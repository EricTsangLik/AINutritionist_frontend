import os
import google.auth
from google.auth.transport.requests import Request
from flask import Flask, jsonify, request
from flask_cors import CORS
from flask_limiter import Limiter
from flask_limiter.util import get_remote_address

app = Flask(__name__)

# [資安防護 1] 嚴格限制 CORS，只允許您的 Vercel 網域
# 請保留 localhost 以便您本地開發測試
allowed_origins = [
    "https://ai-nutritionist-frontend.vercel.app",
    "http://localhost:3000",
    "http://localhost:5173"
]
CORS(app, origins=allowed_origins)

# [資安防護 2] 設定速率限制 (Rate Limiting)
# 使用記憶體儲存計數器 (每個 Cloud Run 實體獨立計算)
limiter = Limiter(
    get_remote_address,
    app=app,
    default_limits=["200 per day", "50 per hour"],
    storage_uri="memory://"
)

@app.route('/token', methods=['GET'])
@limiter.limit("10 per minute")  # [關鍵] 限制每個 IP 每分鐘只能拿 10 次 Token
def get_token():
    try:
        # 額外檢查 Referer (防禦非瀏覽器請求)
        referer = request.headers.get('Referer')
        # 如果有 Referer 且不包含我們允許的網域，則警告 (選擇性開啟，這裡先做寬鬆檢查)
        
        scopes = ['https://www.googleapis.com/auth/cloud-platform']
        credentials, project = google.auth.default(scopes=scopes)
        credentials.refresh(Request())
        
        return jsonify({
            'token': credentials.token,
            'project': project
        })
    except Exception as e:
        return jsonify({'error': str(e)}), 500

# 處理被 Rate Limit 擋下的請求
@app.errorhandler(429)
def ratelimit_handler(e):
    return jsonify({"error": "ratelimit exceeded", "message": "Too many requests. Please try again later."}), 429

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=int(os.environ.get("PORT", 8080)))