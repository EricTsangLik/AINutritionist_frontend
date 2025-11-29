import { vegetablesData } from '../data/vegetables';
import { VegetableData } from '../types/index';

export class VegetableDisplay {
    private currentVegetable: VegetableData | null = null;

    constructor(
        private infoDisplay: HTMLElement,
        private cameraStart: HTMLElement
    ) {
        this.setupTabs();
        this.setupCloseButton();
    }

    public show(vegetableId: string): void {
        const vegetable = vegetablesData[vegetableId];
        if (!vegetable) return;

        this.currentVegetable = vegetable;

        // Update header
        const infoImage = document.getElementById('infoImage') as HTMLImageElement;
        const infoTitle = document.getElementById('infoTitle');
        
        if (!infoImage || !infoTitle) {
            console.error('Info display elements not found!');
            return;
        }
        
        infoImage.src = vegetable.image;
        infoImage.alt = `${vegetable.name_zh} ${vegetable.name_en}`;
        infoTitle.textContent = `${vegetable.name_zh} | ${vegetable.name_en}`;
        infoTitle.style.color = vegetable.color;

        // Update introduction
        const introductionText = document.getElementById('introductionText');
        if (introductionText) {
            introductionText.innerHTML = `
                <p class="text-zh">${vegetable.introduction_zh}</p>
                <p class="text-en">${vegetable.introduction_en}</p>
            `;
        }

        // Update growing methods
        const growingMethods = document.getElementById('growingMethods');
        if (growingMethods) {
            growingMethods.innerHTML = vegetable.growing_methods.map((method, index) => `
                <div class="growing-step">
                    <div class="growing-step-number">${index + 1}</div>
                    <div class="growing-step-content">
                        <p class="text-zh">${method.step_zh}</p>
                        <p class="text-en">${method.step_en}</p>
                    </div>
                </div>
            `).join('');
        }

        // Update nutrition
        const nutritionList = document.getElementById('nutritionList');
        if (nutritionList) {
            nutritionList.innerHTML = vegetable.nutrition.map(fact => `
                <div class="nutrition-item">
                    <div class="nutrition-icon">💊</div>
                    <div class="nutrition-details">
                        <h5>${fact.name_zh} | ${fact.name_en}</h5>
                        <p class="nutrition-amount">${fact.amount}${fact.unit}</p>
                        <p class="text-zh">${fact.benefit_zh}</p>
                        <p class="text-en">${fact.benefit_en}</p>
                    </div>
                </div>
            `).join('');
        }

        // Update fun facts
        const funFactsList = document.getElementById('funFactsList');
        if (funFactsList) {
            funFactsList.innerHTML = vegetable.fun_facts.map((fact, index) => `
                <div class="fun-fact-item">
                    <div class="fun-fact-number">${index + 1}</div>
                    <div class="fun-fact-content">
                        <p class="text-zh">${fact.fact_zh}</p>
                        <p class="text-en">${fact.fact_en}</p>
                    </div>
                </div>
            `).join('');
        }

        // Update recipe
        const recipeName = document.getElementById('recipeName');
        const recipeIngredients = document.getElementById('recipeIngredients');
        const recipeSteps = document.getElementById('recipeSteps');

        if (recipeName) {
            recipeName.textContent = `${vegetable.recipe.name_zh} | ${vegetable.recipe.name_en}`;
        }
        
        if (recipeIngredients) {
            recipeIngredients.innerHTML = vegetable.recipe.ingredients.map(ing => `
                <li>
                    <span class="ingredient-name">${ing.item_zh} (${ing.item_en})</span>
                    <span class="ingredient-amount">${ing.amount}</span>
                </li>
            `).join('');
        }

        if (recipeSteps) {
            recipeSteps.innerHTML = vegetable.recipe.steps.map(step => `
                <li>
                    <p class="text-zh">${step.step_zh}</p>
                    <p class="text-en">${step.step_en}</p>
                </li>
            `).join('');
        }

        // Show info display
        this.infoDisplay.style.display = 'block';

        // Reset to first tab
        this.switchTab('introduction');

        // Add animation
        this.infoDisplay.classList.add('fade-in');
        setTimeout(() => {
            this.infoDisplay.classList.remove('fade-in');
        }, 500);
    }

    private setupTabs(): void {
        const tabButtons = document.querySelectorAll('.tab-button');
        
        tabButtons.forEach(button => {
            button.addEventListener('click', (e: Event) => {
                const target = e.target as HTMLElement;
                const tabName = target.getAttribute('data-tab');
                if (tabName) {
                    this.switchTab(tabName);
                }
            });
        });
    }

    private switchTab(tabName: string): void {
        // Remove active class from all tabs and contents
        document.querySelectorAll('.tab-button').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelectorAll('.tab-content').forEach(content => {
            content.classList.remove('active');
        });

        // Add active class to selected tab and content
        const selectedButton = document.querySelector(`[data-tab="${tabName}"]`);
        const selectedContent = document.getElementById(tabName);
        
        if (selectedButton && selectedContent) {
            selectedButton.classList.add('active');
            selectedContent.classList.add('active');
        }
    }

    private setupCloseButton(): void {
        const closeButton = document.getElementById('closeButton');
        
        if (closeButton) {
            closeButton.addEventListener('click', () => {
                this.infoDisplay.style.display = 'none';
                this.cameraStart.style.display = 'flex';
                this.currentVegetable = null;
            });
        }
    }
}


