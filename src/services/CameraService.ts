export class CameraService {
    private mediaStream: MediaStream | null = null;

    constructor(
        private cameraVideo: HTMLVideoElement,
        private capturedImage: HTMLImageElement,
        private videoWrapper: HTMLElement,
        private capturedPreview: HTMLElement,
        private cameraStart: HTMLElement,
        private errorMessage: HTMLElement
    ) {}

    public async start(): Promise<void> {
        try {
            this.mediaStream = await navigator.mediaDevices.getUserMedia({ 
                video: { 
                    facingMode: 'environment',
                    width: { ideal: 1920 },
                    height: { ideal: 1080 }
                } 
            });
            
            this.cameraVideo.srcObject = this.mediaStream;
            this.cameraStart.style.display = 'none';
            this.videoWrapper.style.display = 'block';
            this.hideError();
            
        } catch (error) {
            console.error('Error accessing camera:', error);
            this.showError('無法訪問相機。請確保已授予相機權限。<br>Cannot access camera. Please ensure camera permission is granted.');
        }
    }

    public capture(): Blob | null {
        const canvas = document.createElement('canvas');
        canvas.width = this.cameraVideo.videoWidth;
        canvas.height = this.cameraVideo.videoHeight;
        
        const context = canvas.getContext('2d');
        if (context) {
            context.drawImage(this.cameraVideo, 0, 0);
            
            // Convert to data URL for preview
            const imageDataUrl = canvas.toDataURL('image/jpeg', 0.9);
            this.capturedImage.src = imageDataUrl;
            
            // Show preview
            this.videoWrapper.style.display = 'none';
            this.capturedPreview.style.display = 'block';

            // Return blob for upload (we need to handle async blob creation properly if we want the blob immediately)
            // However, main.ts used `fetch(this.capturedImage.src).then(res => res.blob())`. 
            // We can just rely on the image src being set for now, or return the canvas.
            return null; 
        }
        return null;
    }
    
    // Helper to get blob from the captured image
    public async getCapturedBlob(): Promise<Blob> {
        const response = await fetch(this.capturedImage.src);
        return await response.blob();
    }

    public stop(): void {
        if (this.mediaStream) {
            this.mediaStream.getTracks().forEach(track => track.stop());
            this.mediaStream = null;
        }
        
        this.videoWrapper.style.display = 'none';
        this.cameraStart.style.display = 'flex';
    }

    public retake(): void {
        this.capturedPreview.style.display = 'none';
        this.videoWrapper.style.display = 'block';
    }

    private showError(message: string): void {
        this.errorMessage.innerHTML = message;
        this.errorMessage.style.display = 'block';
    }

    private hideError(): void {
        this.errorMessage.style.display = 'none';
    }
}


