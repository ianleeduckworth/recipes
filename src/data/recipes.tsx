export interface Recipe {
  id: string;
  title: string;
  blurb: string;
  cookTime?: string;
  servings?: number;
  ingredients: string[];
  steps: string | Step[];
  source?: string;
  notes?: string;
  tags?: string[];
}

export interface Step {
  header: string;
  content: string;
}
