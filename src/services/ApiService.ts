export interface RecognitionResult {
    success: boolean;
    vegetable_name?: string;
    message?: string;
}

export class ApiService {
    public async recognizeLetter(imageBlob: Blob): Promise<RecognitionResult> {
        const formData = new FormData();
        formData.append('image', imageBlob, 'captured.jpg');

        const baseUrl = import.meta.env.VITE_API_BASE_URL || '';
        const apiResponse = await fetch(`${baseUrl}/api/recognition/vegetable`, {
            method: 'POST',
            body: formData
        });

        return await apiResponse.json();
    }
}


