import { Recipe } from "../data/recipes";

export const filterRecipes = (
  recipes: Recipe[],
  filterBy: string
): Recipe[] => {
  if (!filterBy) return recipes;

  const titleClause = recipes.filter(x =>
    x.title.toLowerCase().includes(filterBy.toLowerCase())
  );

  const tagsClause = recipes.filter(
    x => x.tags && x.tags.indexOf(filterBy) > -1
  );

  return unique([...titleClause, ...tagsClause]);
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
