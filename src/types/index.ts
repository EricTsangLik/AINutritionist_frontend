/**
 * Type definitions for the AI School Nutritionist application
 */

export interface NutritionFact {
    name_zh: string;
    name_en: string;
    amount: string;
    unit: string;
    benefit_zh: string;
    benefit_en: string;
}

export interface RecipeIngredient {
    item_zh: string;
    item_en: string;
    amount: string;
}

export interface RecipeStep {
    step_zh: string;
    step_en: string;
}

export interface GrowingMethod {
    step_zh: string;
    step_en: string;
}

export interface FunFact {
    fact_zh: string;
    fact_en: string;
}

export interface VegetableData {
    id: string;
    name_zh: string;
    name_en: string;
    emoji: string;
    color: string;
    image: string;
    introduction_zh: string;
    introduction_en: string;
    growing_methods: GrowingMethod[];
    nutrition: NutritionFact[];
    fun_facts: FunFact[];
    recipe: {
        name_zh: string;
        name_en: string;
        ingredients: RecipeIngredient[];
        steps: RecipeStep[];
    };
}

export type VegetableId = 'carrot' | 'broccoli' | 'tomato' | 'corn';

