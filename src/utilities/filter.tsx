import { Recipe } from "../data/recipes";

export const filterRecipes = (
  recipes: Recipe[],
  filterBy: string
): Recipe[] => {
  if (!filterBy) return recipes;

  return recipes.filter(x =>
    x.title.toLowerCase().includes(filterBy.toLowerCase())
  );
};
