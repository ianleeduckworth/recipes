export interface Recipe {
  id: number;
  title: string;
  blurb: string;
  cookTime?: string;
  servings?: number;
  ingredients: string[];
  steps: string;
}

const recipes: Recipe[] = [
  {
    id: 1,
    title: "Tomato Soup",
    blurb:
      "An all-American classic.  Serve by itself or with a sandwich, it is hearty, comforting, and delicious.  Great for adults and kids alike.",
    cookTime: "1 hour",
    servings: 8,
    ingredients: [
      "2 Tbs. extra-virgin olive oil",
      "1 Tbs. unsalted butter",
      "1 large white onion, finely chopped",
      "1 large clove garlic, smashed and peeled",
      "2 Tbs. all-purpose flour",
      "3 cups lower-salt chicken broth",
      "28-oz. can whole peeled plum tomatoes, puréed (include the juice)",
      "1-1/2 tsp. sugar",
      "1 sprig fresh thyme",
      "Kosher salt and freshly ground black pepper",
      "3 Tbs. thinly sliced fresh basil, chives, or dill, or a mixture of all three (omit if using one of the garnishes below)"
    ],
    steps:
      "In a nonreactive 5- to 6-quart Dutch oven, heat the oil and butter over medium-low heat until the butter melts. Add the onion and garlic and cook, stirring occasionally, until soft but not browned, about 8 minutes. Add the flour and stir to coat the onion and garlic. Add the broth, tomatoes, sugar, thyme, and 1/4 tsp. each salt and pepper. Bring to a simmer over medium-high heat while stirring the mixture to make sure that the flour is not sticking to the bottom of the pan. Reduce the heat to low, cover, and simmer for 40 minutes. Discard the thyme sprig. Let cool briefly and then purée in two or three batches in a blender or food processor. Rinse the pot and return the soup to the pot. Season to taste with salt and pepper. Reheat if necessary. Serve warm but not hot, garnished with the herbs or dolloped with one of the garnishes below."
  },
  {
    id: 2,
    title: "Grilled Cheese",
    blurb:
      "Bread, butter and cheddar cheese - here's a way to make this classic sandwich in a nonstick pan.",
    cookTime: "30 minutes",
    servings: 2,
    ingredients: [
      "4 slices white bread",
      "3 tablespoons butter, divided",
      "2 slices Cheddar cheese"
    ],
    steps:
      "Preheat skillet over medium heat. Generously butter one side of a slice of bread. Place bread butter-side-down onto skillet bottom and add 1 slice of cheese. Butter a second slice of bread on one side and place butter-side-up on top of sandwich. Grill until lightly browned and flip over; continue grilling until cheese is melted. Repeat with remaining 2 slices of bread, butter and slice of cheese."
  }
];

export default recipes;
