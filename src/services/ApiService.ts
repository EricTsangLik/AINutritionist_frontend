export interface RecognitionResult {
    success: boolean;
    vegetable_name?: string;
    message?: string;
}

export class ApiService {
    public async recognizeLetter(imageBlob: Blob): Promise<RecognitionResult> {
        const formData = new FormData();
        formData.append('image', imageBlob, 'captured.jpg');

        const apiResponse = await fetch('/api/recognition/vegetable', {
            method: 'POST',
            body: formData
        });

        return await apiResponse.json();
    }
}


