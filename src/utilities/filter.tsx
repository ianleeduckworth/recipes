import { Recipe } from "../data/recipes";

export const filterRecipes = (
  recipes: Recipe[],
  filterBy: string
): Recipe[] => {
  const lowercaseFilterBy = filterBy.toLowerCase();

  const sortedRecipes = recipes.sort(sortByTitleAlphabetical);
  if (!filterBy) return sortedRecipes;

  const titleClause = sortedRecipes.filter((sortedRecipe) =>
    sortedRecipe.title.toLowerCase().includes(lowercaseFilterBy)
  );

  const tagsClause = sortedRecipes.filter(
    (sortedRecipe) =>
      sortedRecipe.tags &&
      sortedRecipe.tags.indexOf(lowercaseFilterBy) > -1
  );

  const ingredientsClause = sortedRecipes.filter(
    (sortedRecipe) => {
      const lowercaseIngredients = sortedRecipe.ingredients.map((x) =>
        x.toLowerCase()
      );
      for (let i = 0; i < lowercaseIngredients.length; i++) {
        const ingredient = lowercaseIngredients[i];
        if (ingredient.indexOf(lowercaseFilterBy) !== -1) {
          return true;
        }
      }

      return false;
    }
  );

  return unique([...titleClause, ...tagsClause, ...ingredientsClause]);
};

export const sortByTitleAlphabetical = (a: Recipe, b: Recipe) => {
  const titleA = a.title.toUpperCase();
  const titleB = b.title.toUpperCase();

  let comparison = 0;
  if (titleA > titleB) {
    comparison = 1;
  } else if (titleA < titleB) {
    comparison = -1;
  }
  return comparison;
};

export const unique = (array: any[]) => {
  var a = array.concat();
  for (var i = 0; i < a.length; ++i) {
    for (var j = i + 1; j < a.length; ++j) {
      if (a[i] === a[j]) a.splice(j--, 1);
    }
  }

  return a;
};
