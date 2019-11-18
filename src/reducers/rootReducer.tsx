import { Recipe } from "../data/recipes";
import recipes from "../data/recipes";
import { filterRecipes } from "../utilities/filter";

export interface ApplicationState {
  recipes: Recipe[];
}

const initState: ApplicationState = {
  recipes: recipes
};

export const rootReducer = (state = initState, action: any) => {
  if (action.type === "FILTER_RECIPES") {
    return {
      ...state,
      recipes: filterRecipes(recipes, action.filterBy)
    };
  }

  return state;
};

export default rootReducer;
