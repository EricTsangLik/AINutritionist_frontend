export interface RecognitionResult {
    success: boolean;
    vegetable_name?: string;
    message?: string;
}

export class ApiService {
    // [修正] 使用您剛剛部署成功的正確後端網址
    // 這裡加上 /token 是因為您的 Python 代碼裡是 @app.route('/token')
    private readonly TOKEN_SERVICE_URL = import.meta.env.DEV 
        ? 'https://gemini-token-fixed-455163777378.asia-east2.run.app/token'
        : 'https://gemini-token-fixed-455163777378.asia-east2.run.app/token';
    
    // 您的專案編號
    private readonly PROJECT_ID = '455163777378';
    
    // 使用 us-central1 以確保模型支援度
    private readonly LOCATION = 'us-central1';
    
    // 使用支援圖片的 Flash 模型
    private readonly MODEL_ID = 'gemini-2.0-flash'; 

    private readonly VEGETABLE_MAP: Record<string, string> = {
        'A': 'butterhead-lettuce',
        'B': 'big-leaf-lettuce',
        'C': 'kale',
        'D': 'red-sorrel'
    };

    public async recognizeLetter(imageBlob: Blob): Promise<RecognitionResult> {
        try {
            console.log('Step 1: Fetching temporary access token...');
            const token = await this.getAccessToken();
            if (!token) throw new Error('無法獲取訪問憑證');

            console.log('Step 2: Processing image...');
            const base64Image = await this.blobToBase64(imageBlob);
            const base64Data = base64Image.split(',')[1];

            console.log(`Step 3: Calling Vertex AI (${this.MODEL_ID})...`);
            
            const url = `https://${this.LOCATION}-aiplatform.googleapis.com/v1/projects/${this.PROJECT_ID}/locations/${this.LOCATION}/publishers/google/models/${this.MODEL_ID}:generateContent`;

            const prompt = `
                You are an expert agricultural botanist. Identify the vegetable in this image.
                Strictly choose from these 4 options based on visual characteristics:
                A. Butterhead Lettuce (牛油生菜)
                B. Big Leaf Lettuce (大葉生菜)
                C. Kale (羽衣甘藍)
                D. Red Sorrel (紅酸膜)
                If unclear, return "TRY_AGAIN".
                Response: ONLY the single letter (A, B, C, or D) or "TRY_AGAIN".
            `;

            const requestBody = {
                contents: [{
                    role: "user",
                    parts: [
                        { text: prompt },
                        { inlineData: { mimeType: "image/jpeg", data: base64Data } }
                    ]
                }],
                generationConfig: {
                    temperature: 0.0,
                    maxOutputTokens: 10,
                }
            };

            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(requestBody)
            });

            if (!response.ok) {
                const errorText = await response.text();
                console.error('Vertex AI API Error:', errorText);
                throw new Error(`AI Request Failed: ${response.status} ${response.statusText}`);
            }

            const data = await response.json();
            
            let aiOutput = data.candidates?.[0]?.content?.parts?.[0]?.text || '';
            aiOutput = aiOutput.trim().toUpperCase().replace(/['"]/g, '');
            
            // 處理可能的回傳格式
            if (aiOutput.includes('A')) aiOutput = 'A';
            else if (aiOutput.includes('B')) aiOutput = 'B';
            else if (aiOutput.includes('C')) aiOutput = 'C';
            else if (aiOutput.includes('D')) aiOutput = 'D';

            console.log(`AI Output: "${aiOutput}"`);

            if (aiOutput === 'TRY_AGAIN' || !aiOutput) {
                return {
                    success: false,
                    message: '無法識別，請調整角度再試一次 (Please try again)'
                };
            }

            const vegetableId = this.VEGETABLE_MAP[aiOutput];

            if (vegetableId) {
                return { success: true, vegetable_name: vegetableId };
            } else {
                return { success: false, message: `未知的結果: ${aiOutput}` };
            }

        } catch (error) {
            console.error('Final Error:', error);
            const msg = error instanceof Error ? error.message : 'Unknown error';
            return { success: false, message: `系統錯誤: ${msg}` };
        }
    }

    private async getAccessToken(): Promise<string> {
        try {
            // [修正] 因為新後端已經加了 CORS，所以我們不需要再用 Vite Proxy，直接呼叫即可
            const response = await fetch(this.TOKEN_SERVICE_URL);
            
            if (!response.ok) {
                throw new Error(`Token service error: ${response.status}`);
            }
            
            const data = await response.json();
            return data.token;
        } catch (e) {
            console.error('Error fetching token:', e);
            throw e;
        }
    }

    private blobToBase64(blob: Blob): Promise<string> {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onloadend = () => resolve(reader.result as string);
            reader.onerror = reject;
            reader.readAsDataURL(blob);
        });
    }
}


