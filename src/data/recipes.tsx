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
    steps: `Place potatoes, onions, carrots, and bay leaf in crock pot. Trim excess fat from brisket; put meat on top of vegies. Mix molasses with beer and pour over all. Cover and cook on LOW heat setting 9-11 hours. If desired, place cabbage wedges on top of meat. to steam for last hour. Slice brisket thinly across grain (let it cool 5- 10 minutes for easier slicing). Serve with vegetables.`
  },
  {
    id: 5,
    title: "Stuffed Bell Peppers foo",
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
  },
  {
    id: 7,
    title: "Italian Chicken Sausage and Quinoa Skillet",
    blurb: `An Italian chicken sausage skillet recipe includes quinoa, seasoned tomatoes, fresh spinach and Parmesan cheese`,
    cookTime: "30 minutes",
    source:
      "https://www.readyseteat.com/recipes-Italian-Chicken-Sausage-and-Quinoa-Skillet-8059",
    servings: 6,
    ingredients: [
      "2-1/2 cups reduced-sodium chicken broth",
      "1-1/2 cups white quinoa, uncooked",
      "1/2 cup chopped onion",
      "1/2 cup grated Parmesan cheese, divided",
      "1 can (14.5 oz each) diced tomatoes with basil, garlic and oregano, drained",
      "1 pkg (12 oz each) fully cooked Italian chicken sausage, sliced",
      "2 cups chopped baby spinach leaves"
    ],
    steps: `Stir together broth, quinoa and onion in large skillet. Bring to a boil. Cover, reduce heat and simmer 15 minutes or until liquid is absorbed. Add 1/4 cup cheese to skillet, stirring constantly until cheese melts. Stir in drained tomatoes, sausage and spinach. Heat 3 to 4 minutes or until mixture is hot. Sprinkle with remaining 1/4 cup cheese.`
  },
  {
    id: 8,
    title: "One Pot Pumpkin Pasta",
    blurb: `This One Pot Pumpkin Pasta only dirties one dish and is full of healthy, delicious ingredients like whole wheat pasta, spinach, and apple chicken sausage!`,
    cookTime: "40 minutes",
    source: "https://showmetheyummy.com/one-pot-pumpkin-pasta/?m",
    servings: 8,
    ingredients: [
      "1 tbsp olive oil",
      "1 yellow onion diced",
      "1 (12 oz) package chicken apple sausage sliced",
      "1/4 cup dry white wine",
      "3 cups chicken broth",
      "3/4 cup skim milk",
      "1 (15 oz) can pumpkin puree",
      "1 (12 oz) box whole wheat penne",
      "4 cloves garlic minced or pressed",
      "1 tsp salt + more to taste",
      "1/4 tsp black pepper",
      "1/4 tsp cinnamon",
      "1/4 tsp cayenne",
      "4 oz spinach chopped or left whole",
      "4 oz shredded white cheddar cheese about 1 cup that’s been loosely packed",
      "1/4 cup shredded parmesan",
      "chopped pecans - use as a garnish"
    ],
    steps: `Heat a large stock pot over medium heat. Once hot add in olive oil and coat the pan. Add in the onion and sliced sausage. Saute for 5 minutes. Whisk in white wine, broth, milk, and pumpkin. Stir in penne, garlic, and spices. Stir to combine. Raise heat to high and bring to a simmer. Adjust heat, if necessary, and keep at a simmer for about 6-8 minutes or until the liquid has mostly absorbed and the noodles are al dente. Make sure to stir frequently. Once the noodles are al dente, remove from heat. Stir in parmesan, spinach, and white cheddar. Stir until the cheese has fully melted. Taste and season with salt, if necessary. Serve immediately with a garnish of chopped pecans.`
  },
  {
    id: 9,
    title: "Ground Teriyaki Rice Bowl",
    blurb: `The delicious, sweet teriyaki sauce and the (kind of) hidden veggies in this Teriyaki Turkey Rice Bowl makes this one of those healthy ground turkey recipes that your whole family will love!`,
    cookTime: "35 minutes",
    source: "https://www.yellowblissroad.com/teriyaki-turkey-rice-bowl/",
    servings: 0,
    ingredients: [
      "1/2 cup Low Sodium Soy Sauce",
      "1/4 cup water",
      "2 tbsp Red Wine Vinegar",
      "2 tbsp brown sugar or less as desired",
      "2 tbsp granulated sugar or less as desired",
      "2 tsp minced garlic",
      "1 tsp ground ginger",
      "1 tbsp cornstarch",
      "2 tbsp warm water",
      "1 tbsp vegetable oil",
      "1/2 cup diced onion",
      "2 tbsp minced garlic",
      "1 pound Ground Turkey",
      "1 cup finely chopped broccoli",
      "2 large carrots peeled and grated",
      "2 green onions diced, for garnish"
    ],
    steps: `Mix soy sauce, 1/4 cup water, red wine vinegar, sugars, garlic and ginger in a small saucepan over medium heat. Stir with a whisk until sugar is dissolved. In a small bowl, whisk together 2 tablespoons warm water and cornstarch until cornstarch is completely dissolved. Heat sauce over medium high heat. Slowly whisk in cornstarch mixture and simmer until thickened. Remove from heat and set aside. Heat vegetable oil in a large skillet over medium-high heat. Add diced onions and cook until soft. Crumble ground turkey and garlic into the pan and cook until turkey is about half cooked. Add grated carrots and chopped broccoli and continue to cook until turkey is no longer pink. Pour teriyaki sauce over cooked turkey and vegetable mixture and stir. Simmer for about five minutes to combine the flavors. Spoon meat over rice or noodles. Garnish with green onions and serve immediately.`
  },
  {
    id: 10,
    title: "Fried Rice",
    blurb: `This Chinese restaurant-style fried rice recipe is the absolute best.  It’s quick and easy to make, customizable with any of your favorite mix-ins, and so irresistibly delicious.`,
    cookTime: "15 minutes",
    source: "https://www.gimmesomeoven.com/fried-rice-recipe/",
    servings: 5,
    ingredients: [
      "3 tbsp butter, divided",
      "2 eggs, whisked",
      "2 medium carrots, peeled and diced",
      "1 small white onion, diced",
      "1/2 cup frozen peas",
      "3 cloves garlic, minced",
      "salt and pepper",
      "4 cups cooked and chilled rice (I prefer short-grain white rice)",
      "3 green onions, thinly sliced",
      "3–4 tbsp soy sauce, or more to taste",
      "2 tsp oyster sauce (optional)",
      "1/2 tsp toasted sesame oil"
    ],
    steps: `Heat 1/2 tablespoon of butter in a large sauté pan over medium-high heat until melted. Add egg, and cook until scrambled, stirring occasionally. Remove egg, and transfer to a separate plate. Add an additional 1 tablespoon butter to the pan and heat until melted. Add carrots, onion, peas and garlic, and season with a generous pinch of salt and pepper. Sauté for about 5 minutes or until the onion and carrots are soft. Increase heat to high, add in the remaining 1 1/2 tablespoons of butter, and stir until melted. Immediately add the rice, green onions, soy sauce and oyster sauce (if using), and stir until combined. Continue stirring for an additional 3 minutes to fry the rice. Then add in the eggs and stir to combine. Remove from heat, and stir in the sesame oil until combined. Serve immediately, or refrigerate in a sealed container for up to 3 days.`
  },
  {
    id: 11,
    title: "Sticky Asian Glazed Chicken",
    blurb: `Tender and juicy chicken breasts that get coated in a sticky sweet asian sauce. This meal is ready in just thirty minutes and the flavor is awesome!`,
    cookTime: "20 minutes",
    source: "https://therecipecritic.com/sticky-asian-glazed-chicken/",
    servings: 4,
    ingredients: [
      "1 pound thinly sliced chicken breasts or boneless chicken thighs",
      "1 tbsp olive oil",
      "3/4 cup brown sugar",
      "1/3 cup soy sauce",
      "2 tbsp hoisin sauce",
      "1 tbsp sweet chili sauce",
      "1 tbsp ginger peeled and grated",
      "Pinch of dried red pepper flakes to taste",
      "1/2 tsp minced garlic",
      "Juice of one lime"
    ],
    steps: `Heat a large skillet over medium high heat and add 1 tbsp of olive oil. Add the chicken and salt and pepper. Cook chicken about 3 minutes on each side or until thermometer reads 165 degrees and brown on each side. Set chicken aside on plate. In the skillet whisk together brown sugar, soy sauce, hoisin sauce, sweet chili sauce, ginger, red pepper flakes, garlic and lime juice. Bring to a boil over medium heat for 1-2 minutes until sauce thickens. Add chicken back to the sauce and coat each side with the sauce. Garnish with sesame seeds and chopped green onions.`
  },
  {
    id: 12,
    title: "Crockpot Roasted Leg of Lamb",
    blurb: `Leg of lamb coated in mustard and herbs. Put it in the slow cooker and leave it alone for a few hours. Super easy and fabulous every time!`,
    cookTime: "7 hours 30 minutes",
    source:
      "https://www.allrecipes.com/recipe/241514/slow-cooker-roasted-leg-of-lamb/",
    servings: 6,
    ingredients: [
      "1 (3 pound) bone-in leg of lamb, or more to taste",
      "1 tbsp apple cider vinegar",
      "1/2 cup red wine",
      "1 tbsp dried rosemary",
      "1 lemon, juiced",
      "1 tsp dried thyme",
      "2 tbsp raw honey",
      "1 tsp sea salt",
      "2 tbsp Dijon mustard",
      "1/2 tsp fresh cracked pepper",
      "3 cloves garlic, minced"
    ],
    steps: `Bring leg of lamb to room temperature, about 2 hours. Pour wine into a slow cooker. Mix lemon juice, honey, mustard, garlic, vinegar, rosemary, thyme, sea salt, and pepper together in a bowl until a thick paste forms. Massage paste into the lamb using your hands; gently place into the slow cooker. Cook on Low, without removing the cover, for 5 hours. An instant-read thermometer inserted near the bone should read 145 degrees F (65 degrees C). Let lamb rest for 15 to 20 minutes.`
  },
  {
    id: 13,
    title: "Greek Quinoa Salad",
    blurb: `This is my absolute favorite quinoa recipe! It's so flavorful and always a big hit with my family and friends. Trust me, you'll want to eat every single bite!`,
    cookTime: "1 hour 40 minutes",
    source: "https://www.allrecipes.com/recipe/241071/best-greek-quinoa-salad/",
    servings: 10,
    ingredients: [
      "3 1/2 cups chicken broth",
      "2 cups quinoa",
      "1 cup halved grape tomatoes",
      "3/4 cup chopped fresh parsley",
      "1/2 cup sliced pitted kalamata olives",
      "1/2 cup minced red onion",
      "4 ounces chopped feta cheese, or more to taste",
      "3 tbsp olive oil",
      "3 tbsp red wine vinegar",
      "2 cloves garlic, minced",
      "1 lemon, halved",
      "salt and ground black pepper to taste"
    ],
    steps: `Bring broth and quinoa to a boil in a saucepan. Reduce heat to medium-low, cover, and simmer until quinoa is tender and water has been absorbed, 15 to 20 minutes. Transfer quinoa to a large bowl and set aside to cool, about 10 minutes. Mix tomatoes, parsley, kalamata olives, onion, feta cheese, olive oil, vinegar, and garlic into quinoa. Squeeze lemon juice over quinoa salad, season with salt and pepper, and toss to coat. Chill in refrigerator, 1 to 4 hours.`
  },
  {
    id: 14,
    title: "Roasted Eggplant Salad with Saffron Yogurt",
    blurb: `The secret ingredient is safron`,
    cookTime: "1 hour 20 minutes",
    source:
      "https://www.seriouseats.com/recipes/2011/02/the-secret-ingredient-saffron-roasted-eggplant-recipe.html",
    servings: 4,
    ingredients: [
      "2 1 1/4-pound eggplants, cut in 1-inch cubes",
      "1 teaspoon Kosher salt, plus extra",
      "2 tablespoons olive oil",
      "1/2 teaspoon saffron",
      "2 tablespoons hot water",
      "1/2 cup Greek yogurt",
      "Freshly cracked black pepper",
      "10 basil leaves, roughly chopped",
      "1 tablespoon toasted pine nuts"
    ],
    steps: `In a large colander, toss the eggplant with the salt. Allow to drain over the sink for 30 minutes. Do not rinse. Preheat the broiler. Toss the eggplant with the olive oil on a Silpat- or parchment-lined rimmed baking sheet. Arrange the eggplant in a single layer, close together, on the baking sheet. Broil in the top third of the oven, but not directly under the broiler, stirring 3 times, until the eggplant is soft and just beginning to char, 25 to 30 minutes. Set aside to cool. While the eggplant roasts, combine the saffron and hot water in a small bowl, and allow to steep. Once the eggplant is cool, blend together the saffron, its water, and the yogurt in a small food processor. Season with salt and pepper. Arrange the eggplant in a single layer on a wide platter. Top with the saffron yogurt sauce, then basil leaves, and finally pine nuts. Serve at room temperature.`
  },
  {
    id: 15,
    title: "Greek Mushroom Orzo",
    blurb: `A great side dish to eat either by itself as a light meal or as a compliment to something larger.`,
    cookTime: "30 minutes",
    source: "https://www.food.com/recipe/greek-mushroom-orzo-119195",
    servings: 4,
    ingredients: [
      "1/2 cup water",
      "1 1/4 cups orzo pasta, uncooked",
      "1 tbsp olive oil",
      "1 (14 ounce) can Italian-style tomatoes",
      "1 (14 ounce) can chicken broth",
      "1 lb fresh white mushroom, sliced",
      "1 ounce feta cheese, crumbled"
    ],
    steps: `Heat oil in a large saucepan over medium heat. Add mushroom. Cook, stirring occasionally, until tender and mushrooms just release their liquid (about 6 minutes). Stir in orzo, tomatoes, chicken broth and water. Simmer covered, stirring occasionally, until orzo is tender and most of the liquid is absorbed (about 9 minutes). Stir in Feta cheese and serve immediately.`
  }
];

// {
//   id: 0,
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
