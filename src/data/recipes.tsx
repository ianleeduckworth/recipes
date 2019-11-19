export interface Recipe {
  id: number;
  title: string;
  blurb: string;
  cookTime?: string;
  servings?: number;
  ingredients: string[];
  steps: string;
  source?: string;
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
  },
  {
    id: 3,
    title: "Crockpot Turkey Tacos",
    blurb:
      "The easiest slow cooker turkey tacos on the planet.  Made with a DIY homemade taco seasoning.",
    cookTime: "2 hours 10 minutes",
    source:
      "https://www.ambitiouskitchen.com/amazing-slow-cooker-turkey-tacos/",
    servings: 8,
    ingredients: [
      "1 teaspoon olive oil",
      "1 white onion, chopped",
      "1 lb lean ground turkey",
      "3 garlic cloves",
      "1 cup tomato sauce",
      "2 tsp cumin",
      "2 tsp chili powder",
      "1 tsp oregano",
      "1/2 tsp paprika",
      "1/8 tsp cayenne",
      "3/4 tsp salt",
      "8 corn tortillas",
      "1 cup quartered grape tomatoes",
      "1/2 cup shreaded cheddar cheese",
      "1 avacado",
      "shreaded lettuce"
    ],
    steps: `Add olive oil to a large skillet and place over medium high heat. Add onions and turkey. Brown the turkey, and break up the meat with a wooden spoon until nice and browned.  Transfer to the slow cooker and add in garlic, tomato sauce, cumin, chili powder, oregano, paprika, cayenne pepper and salt. Stir to combine. Cook on high for 2-3 hours or on low for 6-7 hours. Once ready to serve, divide meat between 8 corn tortillas. Add grape tomatoes, cheese, diced avocado, lettuce and jalapeno slices. Serves 4. Optional to serve with greek yogurt, if desired.`
  },
  {
    id: 4,
    title: "Crockpot Corned Beef in Beer",
    blurb: `Slow cooked corned beef with potatoes and vegetables.  An Irish tradition around St. Patrick's day`,
    cookTime: "9 hours 10 minutes",
    source: "https://www.food.com/recipe/corned-beef-in-beer-crock-pot-70522",
    servings: 6,
    ingredients: [
      "3 lb corned beef brisket",
      "6 medium potatoes peeled and quartered",
      "2 medium onions peeled and quartered",
      "6 carrots peeled and quartered",
      "1 bay leaf",
      "12 oz beer (one can/bottle)",
      "1 small cabbage cut into wedges",
      "2 tbsp molasses"
    ],
    steps: `Place potatoes, onions, carrots, and bay leaf in crock pot. Trim excess fat from brisket; put meat on top of veges. Mix molasses with beer and pour over all. Cover and cook on LOW heat setting 9-11 hours. If desired, place cabbage wedges on top of meat. to steam for last hour. Slice brisket thinly across grain (let it cool 5- 10 minutes for easier slicing). Serve with vegetables.`
  },
  {
    id: 5,
    title: "Stuffed Bell Peppers",
    blurb: `A simple and easy weeknight recipe that is sure to please.`,
    cookTime: "1 hour 35 minutes",
    source:
      "https://www-foodnetwork-com.cdn.ampproject.org/v/s/www.foodnetwork.com/recipes/ree-drummond/stuffed-bell-peppers-3325315.amp?usqp=mq331AQA&amp_js_v=0.1#aoh=15642649184721&referrer=https%3A%2F%2Fwww.google.com&amp_tf=From%20%251%24s&ampshare=https%3A%2F%2Fwww.foodnetwork.com%2Frecipes%2Free-drummond%2Fstuffed-bell-peppers-3325315",
    servings: 4,
    ingredients: [
      "6 bell peppers, any color",
      "4 tablespoons olive oil, plus more for drizzling ",
      "8 ounces lean ground beef ",
      "pinch of kosher salt and freshly ground black pepper",
      "1 onion, finely diced",
      "2 cloves garlic, chopped",
      "1 medium zucchini, finely diced",
      "4 Roma tomatoes, seeded and finely diced",
      "Red pepper flakes, as needed",
      "1 cup cooked long-grain and wild rice",
      "1 1/2 cups grated pepper Jack cheese"
    ],
    steps: `Preheat the oven to 350 degrees F. Cut the tops off the peppers. Remove and discard the stems, then finely chop the tops; set aside. Scoop out the seeds and as much of the membrane as you can. Place the peppers cut-side up in a baking dish just large enough to hold them upright. Heat 2 tablespoons of the olive oil in a large skillet over medium-high heat. Add the beef, season with salt and pepper and cook, breaking up the lumps, until the meat is cooked through and just beginning to brown, 8 to 10 minutes. Remove to a paper towel-lined plate to get rid of the fat. Wipe out the skillet and add the remaining 2 tablespoons olive oil. Add the onions and chopped peppers and cook until beginning to soften, 3 to 4 minutes. Add the garlic and zucchini and cook for another minute. Add the tomatoes and season with salt and a pinch or 2 of red pepper flakes. Cook until everything is heated through, then stir in the beef and rice. Taste and adjust the seasoning. Stir in 1 cup of the cheese. Fill the peppers with the rice mixture and top each with a sprinkle of the remaining 1/2 cup cheese. Pour a small amount of water into the bottom of the baking dish and drizzle the peppers with a little olive oil. Cover with foil and bake for 30 minutes. Uncover and bake until the peppers are soft and the cheese is melted and lightly browned, another 15 to 20 minutes.`
  },
  {
    id: 6,
    title: "Crockpot Shredded Chicken",
    blurb: `A super easy Crockpot recipe for all purpose shredded chicken!  This chicken is seasoned and slow cooked all day, then ready to use in any of your favorite wraps, tacos, or casseroles.  Or, you can freeze it to use for later!`,
    cookTime: "6 hours 5 minutes",
    source: "https://thesaltymarshmallow.com/easy-crockpot-shredded-chicken/",
    servings: 6,
    ingredients: [
      "3 pounds chicken breasts (about 4 large chicken breasts)",
      "1 cup chicken broth",
      "1 tsp salt",
      "1 tsp pepper",
      "1 tsp garlic powder",
      "1 tsp onion powder"
    ],
    steps: `Place chicken breasts in bottom of crockpot.  Pour chicken broth and seasonings over chicken. Cook on low for 6-8 hours or high for 3-4 hours. Remove chicken from crockpot and shred with two forks. Use the chicken right away in your favorite recipes.  Or, allow chicken to cool and portion into zip-top bags and freeze for up to two months.`
  }
];

// {
//   id: 5,
//   title: "",
//   blurb: ``,
//   cookTime: "",
//   source: "",
//   servings: 0,
//   ingredients: [
//   ],
//   steps: ``
// },

export default recipes;
