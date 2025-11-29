/**
 * Main TypeScript file for AI School Nutritionist
 * Handles camera capture and letter recognition
 */

import './styles.css';
import { CameraService } from './services/CameraService';
import { ApiService } from './services/ApiService';
import { VegetableDisplay } from './ui/VegetableDisplay';

class NutritionistApp {
    private cameraService: CameraService;
    private apiService: ApiService;
    private vegetableDisplay: VegetableDisplay;
    
    private loadingOverlay: HTMLElement;
    private errorMessage: HTMLElement;

    constructor() {
        // Get DOM elements
        const infoDisplay = document.getElementById('infoDisplay')!;
        const cameraVideo = document.getElementById('cameraVideo') as HTMLVideoElement;
        const capturedImage = document.getElementById('capturedImage') as HTMLImageElement;
        const videoWrapper = document.getElementById('videoWrapper')!;
        const capturedPreview = document.getElementById('capturedPreview')!;
        const cameraStart = document.getElementById('cameraStart')!;
        this.loadingOverlay = document.getElementById('loadingOverlay')!;
        this.errorMessage = document.getElementById('errorMessage')!;
        
        // Initialize services
        this.cameraService = new CameraService(
            cameraVideo,
            capturedImage,
            videoWrapper,
            capturedPreview,
            cameraStart,
            this.errorMessage
        );
        
        this.apiService = new ApiService();
        
        this.vegetableDisplay = new VegetableDisplay(
            infoDisplay,
            cameraStart
        );
        
        this.init();
    }

    private init(): void {
        this.setupCameraControls();
        this.updateDate();
    }

    private setupCameraControls(): void {
        // Start camera
        const startButton = document.getElementById('startCameraButton');
        if (startButton) {
            startButton.addEventListener('click', () => {
                this.cameraService.start();
            });
        }

        // Capture photo
        const captureButton = document.getElementById('captureButton');
        if (captureButton) {
            captureButton.addEventListener('click', () => {
                this.cameraService.capture();
            });
        }

        // Stop camera
        const stopButton = document.getElementById('stopCameraButton');
        if (stopButton) {
            stopButton.addEventListener('click', () => {
                this.cameraService.stop();
            });
        }

        // Confirm and recognize
        const confirmButton = document.getElementById('confirmButton');
        if (confirmButton) {
            confirmButton.addEventListener('click', () => {
                this.recognizeVegetable();
            });
        }

        // Retake photo
        const retakeButton = document.getElementById('retakeButton');
        if (retakeButton) {
            retakeButton.addEventListener('click', () => {
                this.cameraService.retake();
            });
        }
    }

    private async recognizeVegetable(): Promise<void> {
        this.loadingOverlay.style.display = 'flex';
        this.errorMessage.style.display = 'none';

        try {
            // Get blob from camera service
            const blob = await this.cameraService.getCapturedBlob();
            
            // Send to backend
            const result = await this.apiService.recognizeLetter(blob);

            if (result.success && result.vegetable_name) {
                // Stop camera and cleanup
                this.cameraService.stop();
                document.getElementById('capturedPreview')!.style.display = 'none';
                
                // Display vegetable info
                this.vegetableDisplay.show(result.vegetable_name);
            } else {
                this.showError(result.message || '無法識別蔬菜。請重試。<br>Could not recognize vegetables. Please try again.');
                this.cameraService.retake();
            }

        } catch (error) {
            console.error('Error recognizing vegetable:', error);
            this.showError('識別失敗。請檢查網絡連接並重試。<br>Recognition failed. Please check network and try again.');
        } finally {
            this.loadingOverlay.style.display = 'none';
        }
    }

    private showError(message: string): void {
        this.errorMessage.innerHTML = message;
        this.errorMessage.style.display = 'block';
    }

    private updateDate(): void {
        const dateElement = document.getElementById('currentDate');
        if (dateElement) {
            const now = new Date();
            const options: Intl.DateTimeFormatOptions = { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric',
                weekday: 'long'
            };
            const dateString = now.toLocaleDateString('zh-HK', options);
            dateElement.textContent = dateString;
        }
    }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new NutritionistApp();
});
