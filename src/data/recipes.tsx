export interface Recipe {
  id: number;
  title: string;
  blurb: string;
  cookTime?: string;
  servings?: number;
  ingredients: string[];
  steps: string | Step[];
  source?: string;
  notes?: string;
}

export interface Step {
  header: string;
  content: string;
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
  },
  {
    id: 16,
    title: "Binging With Babish Green Bean Casserole",
    blurb: `Babish knows best when it comes to great cooking.  This fresh green been casserole is a huge step up over the canned kind you grew up with.`,
    cookTime: "1 hour 30 minutes",
    servings: 6,
    ingredients: [
      "2 onions",
      "1 cup buttermilk",
      "2 -3 cups all purpose flour",
      "8 oz cremini mushrooms",
      "2 cloves crushed garlic",
      "1 1/2 cups chicken stock",
      "1 cup heavy cream",
      "1.5 pounds green beans",
      "3 tbsp butter",
      "Splash of whiskey",
      "Vegetable oil",
      "Dash of soy sauce",
      "Salt",
      "Pepper"
    ],
    steps: [
      {
        header: "Fried Onions",
        content:
          "Mandolin onions into small slivers.  Soak in buttermilk for 15 minutes and drain.  Coat in flour, use seiv to remove excess.  Fry coated onions in oil for 7 to 9 minutes.  Remove from pan, strain and season with salt."
      },
      {
        header: "Cream of Mushroom Soup",
        content:
          "Stem, crush, and finely chop mushrooms.  Saute in butter and add a pinch of salt.  Add a heaping tablespoon of flour and stir in for 1 minute.  Add 2 cloves of crushed garlic and saute for about 30 seconds.  Deglaze with whiskey and add chicken stock and heavy cream. Add a dash of soy sauce and simmer until thick."
      },
      {
        header: "Green Beans and Assembly",
        content:
          "Cut ends off of green beans and cut into 1 inch pieces.  Par boil for 2 minutes then shock in an ice bath.  Mix with cream of mushroom soup and half of the onions.  Pour into buttered dish and bake at 350 degrees for 15 to 20 minutes.  Add remainder of the onions to the top and cook for another 5 to 10 minutes."
      }
    ],
    notes:
      "This recipe came from a Binging with Babish video and in it he never actually specifies the amount of green beans, so the number here is a guess.  Additionally, the amount that he calls for the boil time to be produces very crisp green beans.  For softer green beans, boil longer."
  },
  {
    id: 17,
    title: "Crock Pot Mexican Casserole",
    blurb: `Crock Pot Mexican Casserole is protein-packed with quinoa, black beans, and ground chicken or turkey. This Mexican casserole is healthy, gluten free comfort food, and one of the best crockpot recipes for Taco Tuesdays or Cinco de Mayo!`,
    cookTime: "6 hours 15 minutes",
    source: "https://www.wellplated.com/crock-pot-mexican-casserole/",
    servings: 8,
    ingredients: [
      "1 tbsp extra-virgin olive oil",
      "1 pound ground turkey",
      "1 medium yellow onion, diced",
      "1 cup uncooked quinoa",
      "2 cans red enchilada sauce (10 ounce cans)",
      "1 can black beans (15 ounces), drained and rinsed",
      "1 can fire-roasted diced tomatoes in their juices (15 ounces)",
      "1 cup corn kernels, fresh or frozen",
      "1 red bell pepper, cored and diced",
      "1 green bell pepper, cored and diced",
      "2 tbsp chili powder",
      "1 tbsp ground cumin",
      "1 tsp garlic powder",
      "1/2 cup water",
      "1 cup shredded Mexican blend cheese, divided",
      "Chopped fresh cilantro (for serving)"
    ],
    steps: [
      {
        header: "Browning the Turkey",
        content:
          "Heat the olive oil in a large skillet or Dutch oven over medium high. Add the turkey and onion. Cook and stir, breaking up the turkey as you go, until the turkey is no longer pink, about 5 minutes. Transfer to the bottom of a large slow cooker."
      },
      {
        header: "Adding the Vegetables",
        content:
          "To the slow cooker, add the quinoa, enchilada sauce, black beans, tomatoes, corn, red bell pepper, green bell pepper, chili powder, cumin, garlic powder, and 1/2 cup water. Stir to combine, then cover and cook on high for 2 1/2 to 3 hours or low for 5 to 6 hours, until the liquid is absorbed and the quinoa is tender."
      },
      {
        header: "Assembly",
        content:
          "Remove the lid and stir. Taste and adjust any seasonings as desired. Stir in 1/2 cup of the shredded cheese, then sprinkle the remaining cheese over the top. Cover and cook on high until the cheese melts, about 10 to 15 minutes. Serve hot with any desired toppings."
      }
    ]
  },
  {
    id: 18,
    title: "Crockpot Chicken and Wild Rice Soup",
    blurb: `Pure creamy comfort food made right in your crockpot! So quick, easy, and hearty with veggies, rice and chicken!`,
    cookTime: "8 hours 15 minutes",
    source:
      "https://damndelicious.net/2016/12/09/slow-cooker-chicken-wild-rice-soup/",
    servings: 4,
    ingredients: [
      "1 1/2 pounds boneless skinless chicken breasts",
      "Kosher salt and freshly ground black pepper to taste",
      "6 cups chicken stock",
      "1 cup wild rice",
      "3 cloves garlic, minced",
      "1 onion, diced",
      "3 carrots, peeled and diced",
      "3 stalks celery, diced",
      "1/2 tsp dried thyme",
      "1/2 tsp dried rosemary",
      "2 bay leaves",
      "1 pound cremini mushrooms, thinly sliced",
      "1/4 cup unsalted butter",
      "1/4 cup all-purpose flour",
      "1 cup milk",
      "1 cup half and half",
      "2 tbsp chopped fresh parsley"
    ],
    steps: `Season chicken with salt and pepper, to taste. Place chicken into a 6-qt slow cooker. Stir in chicken stock, wild rice, garlic, onion, carrots, celery, thyme, rosemary and bay leaves; season with salt and pepper, to taste. Cover and cook on low heat for 6-8 hours. Add mushrooms during the last 30 minutes of cooking time. Remove chicken from the slow cooker and shred, using two forks. Melt butter in a saucepan over medium heat. Whisk in flour until lightly browned, about 1 minute. Whisk in milk and half and half, and cook, whisking constantly, until slightly thickened, about 4-5 minutes; season with salt and pepper, to taste. Stir chicken and milk mixture into the slow cooker. If the soup is too thick, add more half and half as needed until desired consistency is reached. Serve immediately, garnished with parsley, if desired.`
  },
  {
    id: 19,
    title: "Crockpot Chicken and Dumplings",
    blurb: `Q: Is there anything more comforting than chicken & dumplings? A: Nope!`,
    cookTime: "4 hours 20 minutes",
    source:
      "https://www.delish.com/cooking/recipe-ideas/recipes/a53818/easy-crock-pot-chicken-and-dumplings-recipe/",
    servings: 0,
    ingredients: [
      "1 onion, chopped",
      "1 1/4 lb. boneless skinless chicken breasts",
      "1 tsp dried oregano",
      "Kosher salt",
      "Freshly ground black pepper",
      "2 (10.5-oz.) cans cream of chicken soup",
      "2 cups low-sodium chicken broth",
      "4 sprigs fresh thyme",
      "1 bay leaf",
      "2 stalks celery, chopped",
      "2 large carrots, peeled and chopped",
      "1 cups frozen peas, thawed",
      "3 cloves garlic, minced",
      "1 (16.3-oz.) can refrigerated biscuits"
    ],
    steps: [
      {
        header: "Prepping the Onions",
        content:
          "Scatter onion in the bottom of a large slow cooker then top with chicken. Season with oregano, salt, and pepper."
      },
      {
        header: "Starting in the Slow Cooker",
        content:
          "Pour over soup and broth then add thyme and bay leaf. Cover and cook on high until the chicken is cooked through, about 3 hours."
      },
      {
        header: "Finishing Touches",
        content:
          "Discard thyme and bay leaf, then shred chicken with two forks. Stir in celery, carrots, peas, and garlic. Cut biscuits into small pieces, then stir into chicken mixture. Spoon liquid over any biscuits at the top. Cook on high until vegetables are tender and biscuits are cooked through, about 1 hour more."
      }
    ]
  },
  {
    id: 20,
    title: "Quick and Easy Empanadas",
    blurb: `This is such a simple recipe w/ just a few ingredients I almost always have on hand. It's a quick dinner w/ a green salad.`,
    cookTime: "45 minutes",
    source: "https://www.food.com/recipe/quick-and-easy-empanadas-133297",
    servings: 12,
    ingredients: [
      "1 lb ground beef",
      "1 garlic clove",
      "1 tsp salt",
      "1 (15 ounce) can fresh cut corn, drained",
      "1/2 cup chopped onion",
      "8 ounces grated cheddar cheese",
      "1 cup salsa",
      "2 (16 ounce) cans large refrigerated biscuits"
    ],
    steps: `Brown the ground beef in a frying pan adding the salt and pepper just before done. Let the beef cool. In a large bowl mix the corn, onions, cheese, and salsa, then add the cooled beef mixing carefully so not to break up all the cheese. Roll the biscuits out flat to about 2-1/2 times their size. Place approx 1/3 cup filling on one side of the center of the circle lengthwise. Fold the dough over the filling like a turn over and crimp the edges like a pie crust. Be careful not to tear the dough, and to seal the edges completely or your filling will come out! depending on how much filling is used will determine how many biscuits you will use. Place on slightly greased cookie sheet and bake at 375 till lightly browned.`
  },
  {
    id: 21,
    title: "Asian Quinoa Meatballs",
    blurb: `Healthy, nutritious and packed with so much flavor. Perfect as an appetizer or a light dinner!`,
    cookTime: "35 minutes",
    source: "https://damndelicious.net/2014/10/15/asian-quinoa-meatballs/",
    servings: 0,
    ingredients: [
      "1 pound ground turkey",
      "3/4 cup cooked quinoa",
      "3 cloves garlic, minced",
      "2 green onions, thinly sliced",
      "1 large egg",
      "1 tbsp soy sauce",
      "2 tsp sesame oil",
      "1 tsp sriracha, or more, to taste",
      "Kosher salt and freshly ground black pepper, to taste",
      "1/2 tsp sesame seeds",
      "1/4 cup soy sauce",
      "2 tbsp rice vinegar",
      "1 tbsp freshly grated ginger",
      "1 tbsp brown sugar, packed",
      "1 tsp sesame oil",
      "1 tsp Sriracha, or more, to taste",
      "2 tsp cornstarch"
    ],
    steps: `Preheat oven to 400 degrees F. Lightly oil a 9×13 baking dish or coat with nonstick spray. In a large bowl, combine ground turkey, quinoa, garlic, onions, egg, soy sauce, sesame oil, Sriracha, salt and pepper, to taste. Using a wooden spoon or clean hands, stir until well combined. Roll the mixture into 1 1/4-to-1 1/2-inch meatballs, forming about 18-20 meatballs. Place meatballs onto the prepared baking dish and bake for 18-20 minutes, or until all sides are browned and meatballs are cooked through. To make the sauce, whisk together soy sauce, rice vinegar, ginger, sugar, sesame oil, Sriracha and 1/2 cup water in a small saucepan over medium high heat. In a small bowl, whisk together cornstarch and 1 tablespoon water. Stir into soy sauce mixture until thickened, about 2 minutes. Serve meatballs immediately with sauce, garnished with green onion and sesame seeds.`
  },
  {
    id: 22,
    title: "Healthier Crockpot Chicken and Dumplings",
    blurb: `This is an easy slow cooker recipe that cooks while you are at work! We added more veggies and used natural (not condensed) soup to make this recipe healthier.`,
    cookTime: "5 hours 45 minutes",
    source:
      "https://www.allrecipes.com/recipe/222117/healthier-slow-cooker-chicken-and-dumplings/?internalSource=recipe%20hub&referringId=17708&referringContentType=recipe%20hub&clickId=cardslot%2065",
    servings: 8,
    ingredients: [
      "4 skinless, boneless chicken breast halves",
      "2 tbsp butter",
      "2 cups natural cream of chicken soup",
      "1 onion, finely diced",
      "3 carrots, sliced",
      "10 ounces refrigerated reduced-fat biscuit dough, torn into pieces",
      "1 cup frozen peas"
    ],
    steps: `Place chicken, butter, cream of chicken soup, and onion in a slow cooker. Cover and cook on High for 5 to 6 hours. Stir in carrots after 5 hours of cooking. Place torn biscuit dough in slow cooker 30 minutes before serving. Cook until dough is no longer raw in the center, about 25 minutes. Lift edges of biscuits and stir in peas. Let stand until warm, about 10 minutes, before serving.`
  },
  {
    id: 23,
    title: "Peppery Whole Wheat Pasta with Wilted Chard",
    blurb: `This recipe makes far more than enough for one meal, and the leftovers are great warmed or straight from the fridge. Hence, a dinner-to-lunch recipe!`,
    cookTime: "45 minutes",
    source: "https://www.thekitchn.com/dinnertolunch-recipe-peppery-w-113975",
    servings: 6,
    ingredients: [
      "1 pound whole wheat pasta, like penne or farfalle",
      "1 large onion, diced",
      "8 ounces button mushrooms, sliced",
      "1 bunch chard (about 1 pound), stems removed and diced, leaves cut into ribbons",
      "2 sausage links (8 ounces), sliced (optional)",
      "4 to 5 garlic cloves, minced",
      "3 ounces cream cheese, mascarpone, or other soft creamy cheese",
      "1/2 cup pasta water, saved from cooking pasta",
      "Kosher salt",
      "Freshly cracked black pepper"
    ],
    steps: `Cook the pasta in a large amount of boiling water with a good handful of salt. Just before draining, use a measuring cup to dip out about 1/2 cup of the starchy pasta water, and set this aside. Heat a teaspoon of olive oil in a large skillet or Dutch oven over medium-high heat. Add the onion with a pinch of salt and cook until the onion is softened and translucent. Add the mushrooms and another pinch of salt. Cook until the mushrooms have released their liquid, the liquid has boiled away, and the mushrooms are turning golden. Stir in the diced chard stems and the sausage. Cook until the stems are softened and the sausage is warmed through. (If the sausage is not pre-cooked, cook it along with the onions instead.)`
  },
  {
    id: 24,
    title: "Peanut Butter Cookies",
    blurb: `A special recipe makes the peanut butteriest tasting cookie I have ever tasted. These soft and chewy peanut buttery cookies are the best!`,
    cookTime: "1 hour",
    source:
      "https://www.allrecipes.com/recipe/11024/joeys-peanut-butter-cookies/",
    servings: 36,
    ingredients: [
      "1 cup peanut butter",
      "1/2 cup butter, softened",
      "1/2 cup white sugar",
      "1/2 cup packed brown sugar",
      "1 egg",
      "3 tbsp milk",
      "1 tsp vanilla extract",
      "1 1/4 cups all purpose flour",
      "3/4 tsp baking powder",
      "1/4 teaspoon salt"
    ],
    steps: `Preheat oven to 375 degrees. In a large bowl, cream together the peanut butter, butter, white sugar, and brown sugar until well blended. Beat in the egg, milk, and vanilla one at a time. Combine the flour, baking powder, and salt; stir into creamed mixture. Roll tablespoonfuls of dough into balls. Place cookies 2 inches apart onto ungreased cookie sheets. Press each ball once with fork tines. Bake for 8 to 10 minutes in the preheated oven, or until edges are lightly browned.`
  },
  {
    id: 25,
    title: "Banana Bread",
    blurb: `Favorite banana bread recipe`,
    cookTime: "1 hour",
    source:
      "https://gimmedelicious.com/healthy-moist-banana-bread/#wprm-recipe-container-12869",
    servings: 12,
    ingredients: [
      "2 eggs",
      "1/2 cup olive oil",
      "1/3 cup honey or maple syrup",
      "1/4 cup milk or Greek yogurt",
      "1 tsp vanilla extract",
      "2-3 medium bananas",
      "1 3/4 cups white whole wheat flour",
      "1/2 tsp ground cinnamon optional",
      "1 tsp baking soda",
      "1/2 tsp salt",
      "1/2 cup dark chocolate chips"
    ],
    steps: `Pre-heat oven to 350F. Grease a 9x5 inch loaf pan and set aside. In a medium bowl, whisk the flour, cinnamon, baking soda and salt. Set aside. In a large bowl, beat eggs, oil, honey, milk and vanilla for 2 minutes. Stir in the bananas, flour mixture and chocolate chips (or any other add-ins of choice). Pour batter into greased pan, sprinkle with some more cinnamon, raw sugar, or banana slices (optional) Bake for 50-55 minutes or until a toothpick inserted comes out clean. Cool for 10 minutes, slice and enjoy!`,
    notes: "Easy to double recipe; best baked in 9 inch round cake pans"
  },
  {
    id: 26,
    title: "Pasta Aglio E Olio",
    blurb: `A recipe that is definitely greater than the sum of it's parts.  With just 7 ingredients, this pasta has no right being this good.`,
    cookTime: "20 minutes",
    servings: 2,
    ingredients: [
      "1/2 cup good quality olive oil",
      "8 cloves of garlic, very thinly sliced",
      "1 tsp red pepper flakes",
      "1/2 lemon",
      "1/2 cup finely chopped parsley",
      "Salt and pepper to taste"
    ],
    steps: `In a large skilet, heat the oil over medium heat until barely shimmering.  Add the garlick and cook, stirring constantly, until softened and turning golden brown around the edges, taking care not to let the garlic burn.  Add the red pepper flakes and remove the skillet from the heat.  Meanshile, bring a large pot of salted water to a boil.  Add the pasta and cook until just shy of al dente.  Drain the pasta, reserving 1/4 cup of the pasta water.  Return the skilet to medium heat and add the drained pasta and a spash of pasta water.  Continue cooking the pasta, tossing frequently and adding water as needed, until the pasta is al dente and well coated in a creamy sauce.  Squeeze the lemon over the pasta, season to taste with salte and pepper, sprinkle with the parseley and serve.`,
    notes:
      "The amount of parseley called for here ends up being a lot; consider making it with less."
  },
  {
    id: 27,
    title: "Hawaiian Burger",
    blurb: `Inspired by Pulp Fiction.  The cornerstone of a nutritious breakfast.`,
    cookTime: "1 hour",
    servings: 1,
    ingredients: [
      "2 tbsp unsalted butter",
      "1 red onion sliced into rings",
      "2 1/2 inch thick pineapple rings",
      "1 tbsp vegetable oil",
      "4 oz ground beef divided into 2 balls",
      "2 sliced monterrey jack cheese",
      `1 Hawaiian style burger bun (such as King's Hawaiian)`,
      "1 1/2 tsp ketchup",
      "1 1/2 tsp teriyaki sauce"
    ],
    steps: `In a large skilet, heat 1 tbsp of butter over medium heat until foaming.  Add teh onions and cook slowly over low heat, stirring often, until the union is caramalized; 30 minutes.  Transfer the onion to a bowl and set aside.  Wipe out the skillet and heat the remaining tbsp of butter over medium heat until sizzling.  Add the pineapple slices and cook, turning once, until lightly browned on both sides.  Transfer the pineapple to a plate and set aside.  In a large cast-iron skillet, heat the oil over high heat until just beginning to smoke.  Place the beef balls several inches apart in the skillet, then use a heavy spatula to smash them down into thin patties (about 1/4 to 1/2 inch thick).  Cook unti lthet bottom is well browned and crisp, 1 to 2 minutes, then flip and top with a slice of cheese.  Turn off the heat, but leave the patties in the pan while you assemble the burgers (the risidual heat will brown the other side).  Dress the bottom half of the but with ketchup and teriyaki sauceand top with the patties, pineapple, and caramalized onion.  Top with the other half of the bun and serve.`
  },
  {
    id: 28,
    title: "Fluffy Pumpkin Pancakes",
    blurb: `These pumpkin pancakes are also delicious served with butter or whipped topping and a sprinkle of pumpkin pie spice.`,
    cookTime: "30 minutes",
    source: "https://www.tasteofhome.com/recipes/fluffy-pumpkin-pancakes/",
    servings: 6,
    ingredients: [
      "1/3 cup all-purpose flour",
      "1/3 cup whole wheat flour",
      "2 tablespoons sugar",
      "1/2 teaspoon baking powder",
      "1/2 teaspoon baking soda",
      "1/4 teaspoon pumpkin pie spice",
      "1/8 teaspoon ground cinnamon",
      "Dash salt",
      "1 large egg",
      "1/2 cup fat-free milk",
      "1/3 cup vanilla yogurt",
      "1/3 cup canned pumpkin",
      "1 tablespoon canola oil",
      "1/8 teaspoon vanilla extract",
      "Maple syrup"
    ],
    steps: `In a bowl, whisk together the first eight ingredients. In another bowl, whisk the next six ingredients until blended. Add to dry ingredients; stir just until moistened. Lightly coat a griddle with cooking spray; preheat over medium heat. Pour batter by 1/3 cupfuls onto griddle. Cook until bubbles on top begin to pop. Turn; cook until golden brown. Serve with syrup.`
  },
  {
    id: 29,
    title: "Pumpkin Scones with Spiced Glaze",
    blurb: `These pumpkin scones are a copycat version of Starbucks’ pumpkin scone; they are warmly spiced and topped with two sweet glazes – one plain and one spiced.`,
    cookTime: "45 minutes",
    source: "https://www.browneyedbaker.com/pumpkin-scones-spiced-glaze/",
    servings: 8,
    ingredients: [
      "2 cups all-purpose flour",
      "7 tbsp granulated sugar",
      "1 tbsp baking powder",
      "1/2 tsp salt",
      "3/4 tsp ground cinnamon",
      "3/4 tsp ground nutmeg",
      "1/4 tsp ground cloves",
      "1/4 tsp ground ginger",
      "6 tbsp cold butter (cut into small cubes)",
      "1/2 cupcanned pumpkin",
      "3 tbsp half-and-half (can substitute heavy cream)",
      "1 large egg",
      "3 tbsp milk",
      "2 cups 4 tbsp powdered sugar"
    ],
    steps: `Make the Scones: Preheat the oven to 425 degrees F. Line a baking sheet with parchment paper; set aside. In a large bowl, whisk together the flour, sugar, baking powder, salt, cinnamon, nutmeg, cloves and ginger. Using a pastry blender (or fork), cut the butter into the dry ingredients until the mixture is crumbly and there are no pieces of butter larger than the size of a pea; set aside. In a medium bowl, whisk together the pumpkin, half-and-half and egg. Fold the wet ingredients into the dry ingredients until mostly combined (the mixture will seem dry), and turn the dough out onto a clean work surface. Knead the dough a few times to ensure it is completely combined. Pat the dough into a 7-inch circle. Cut the round of dough into 8 equal triangles. Place the scones on the prepared baking sheet. Bake for 14 to 16 minutes, or until lightly browned on top. Cool completely before glazing. Make the Powdered Sugar Glaze: In a small bowl, whisk together the powdered sugar and milk until smooth. Use a pastry brush to spread the glaze over the top of each scone. Allow to set (about 15 minutes) before proceeding with the spiced glaze. For the Spiced Glaze: In a small bowl, whisk together the powdered sugar, milk, cinnamon, nutmeg, ginger and cloves. Using a spoon, drizzle the glaze over each scone and allow to set before serving. (If the mixture is too stiff to drizzle, whisk in a splash of milk at a time to thin it out just enough to drizzle.) Leftover scones can be stored in an airtight container at room temperature for up to 3 days.`
  },
  {
    id: 30,
    title: "Mexican Pumpkin Empanadas",
    blurb: `My take on a traditional pumpkin empanada! Adjust all spices to your taste.`,
    cookTime: "1 hour",
    source:
      "https://www.allrecipes.com/recipe/216489/mexican-pumpkin-empanadas/",
    servings: 12,
    ingredients: [
      "3 cups all purpose flour",
      "1/3 cup white sugar",
      "1 1/2 tsp salt",
      "1/4 tsp baking powder",
      "1 cup vegetable shortening",
      "1 cup warm water",
      "4 cups canned pure pumpkin",
      "2 eggs",
      "1 cup white sugar",
      "1 tsp salt",
      "1 1/2 tsp ground cinnamon",
      "1 tsp ground ginger",
      "1/2 tsp ground cloves"
    ],
    steps: `Preheat oven to 350 degrees F (175 degrees C). Line baking sheets with parchment paper. In a large bowl, whisk the flour, 1/3 cup of sugar, 1 1/2 teaspoons of salt, and baking powder together. Cut the shortening into the flour mixture until it resembles coarse crumbs; stir the water in, about 2 tablespoons at a time, just until you can gather the dough together. Knead the dough a few times in the bowl, then scrape it out onto a floured surface. Cut the dough in quarters, and cut each quarter into thirds to make 12 equal portions. Roll the portions into balls. Cover the dough balls with a cloth, and allow to rest while you make the filling. Mix the pumpkin, 2 eggs, 1 cup of sugar, 1 teaspoon of salt, cinnamon, ginger, and cloves together until smooth. On a floured surface, roll each dough ball out into a thin circle about 6 inches across; spoon about 1/3 cup of filling into the center of the dough circle. Fold the dough over the filling to make a half-moon shaped pie, and crimp the edges of the crust together with a fork, leaving little fork lines in the dough. Gently lay the empanadas onto the prepared baking sheets. Brush the top of each pie with beaten egg. Bake in the preheated oven until the filling is hot and the crusts are shiny and browned, about 20 minutes.`
  },
  {
    id: 31,
    title: "Pumpkin Pie-Spiced Granola",
    blurb: `It's granola and it's pumpkin.  Not much else can be said.  Not sexy, but it'll get the job done`,
    cookTime: "1 hour",
    source: "https://www.tasteofhome.com/recipes/pumpkin-pie-spiced-granola/",
    servings: 4,
    ingredients: [
      "4 cups old-fashioned oats",
      "1 cup raw pumpkin seeds or pepitas",
      "1 cup canned pumpkin",
      "1/2 cup packed brown sugar",
      "1/4 cup honey",
      "1/4 cup canola oil",
      "2 tablespoons water",
      "2 teaspoons ground cinnamon",
      "3/4 teaspoon salt",
      "3/4 teaspoon ground ginger",
      "3/4 teaspoon ground nutmeg",
      "1/4 teaspoon ground cloves"
    ],
    steps: `Preheat oven to 325°. In a large bowl, combine oats and pumpkin seeds. In a small saucepan, whisk remaining ingredients; bring to a boil. Remove from heat. Pour over oat mixture; toss to coat. Spread evenly into 2 greased 15x10x1-in. baking pans. Bake 40-50 minutes or until golden brown, stirring every 10 minutes. Cool completely on wire racks. Store in an airtight container.`
  },
  {
    id: 32,
    title: "Dark Chocolate Pumpkin Truffles",
    blurb: `The combination of pumpkin and dark chocolate is unexpected and delectable. These delicious truffles make a pretty addition to a party plate, a sweet way to finish up a meal, or a gift your friends and family will love.`,
    cookTime: "30 minutes",
    source:
      "https://www.tasteofhome.com/recipes/dark-chocolate-pumpkin-truffles/",
    servings: 30,
    ingredients: [
      "2/3 cup reduced-fat cream cheese",
      "1/2 cup confectioners sugar",
      "2/3 cup canned pumpkin",
      "1 teaspoon pumpkin pie spice",
      "1 teaspoon vanilla extract",
      "2-1/4 cups crushed reduced-fat graham crackers",
      "1 package (10 ounces) dark chocolate chips"
    ],
    steps: `In a small bowl, beat cream cheese and confectioners' sugar until blended. Beat in pumpkin, pie spice and vanilla. Stir in cracker crumbs. Freeze, covered, 20 minutes or until firm enough to shape. Shape pumpkin mixture into 1-in. balls; place on waxed paper-lined baking sheets; freeze 20 minutes or until firm. In a microwave, melt chocolate; stir until smooth. Dip truffles in chocolate; allow excess to drip off. Return to baking sheets; refrigerate until set. Store in airtight containers in the refrigerator.`
  },
  {
    id: 33,
    title: "Homemade Falafel with Tahini Sauce",
    blurb: `Solid falafel and tahini sauce recipe`,
    cookTime: "1 hour and 30 minutes",
    source: "https://www.justataste.com/homemade-falafel-with-tahini-sauce/",
    servings: 8,
    ingredients: [
      "2 cups roughly chopped white onion",
      "6 garlic cloves",
      "2 cups cooked chickpeas, drained",
      "1 cup lightly packed parsley leaves",
      "1 cup lightly packed cilantro leaves",
      "1 tsp salt",
      "1/4 tsp chili powder",
      "2 tsp cumin",
      "2 tsp baking powder",
      "1/2 cup all-purpose flour",
      "Canola oil, for sauteing",
      "Pita bread, for serving",
      "FOR THE TAHINI SAUCE:",
      "1 1/4 cups plain yogurt (full fat or non-fat)",
      "1/4 cup tahini (sesame paste)",
      "2 Tablespoons fresh lemon juice"
    ],
    steps: `Add the onion and garlic cloves to the bowl of a food processor and pulse just until they are finely minced. Remove the mixture and press it through a strainer to release as much liquid as possible then set it aside. Add the chickpeas, parsley, cilantro, salt, chili powder, and cumin to the bowl of the food processor and pulse until they are roughly blended but not pureed. Return the onion mixture to the food processor, along with the baking powder and just enough flour so that when you pulse the processor, the mixture begins to form a small ball and is not sticky. (Note: Start by adding ¼ cup of flour, and then the remaining ¼ cup. You can add more if the mixture is still too wet.) Transfer the falafel mixture to a bowl, cover it with plastic wrap and refrigerate it for 1 hour. While the falafel mixture is chilling, prepare the tahini sauce by whisking together the yogurt, tahini and lemon juice. Season it with salt and pepper, cover it and place it in the fridge. Once the falafel mixture has chilled, use a small ice cream scoop or spoons to form the mixture into balls (roughly 3 Tablespoons per ball) then flatten them slightly so they are the shape of patties. (Note: You can also add additional flour at this point, if the mixture is too wet to scoop.) Set a large sauté pan over medium heat and add a liberal amount of canola oil so that the pan is well-coated. Let the pan pre-heat for 3 minutes then add the falafel one by one, browning them on the first side for 3 minutes, then flipping them once and browning the second side until the mixture is cooked throughout. Transfer the falafel to a paper towel-lined cooling rack and immediately season them with salt. Repeat this process until you have cooked all of the falafel. Place three or four falafel inside a halved, warmed pita and drizzle with the prepared tahini sauce.`
  },

  {
    id: 34,
    title: "Spinach-Feta Quinoa Cakes",
    blurb: `Great little patties with lemon-dill yogurt sauce`,
    cookTime: "40 minutes",
    source:
      "https://paninihappy.com/spinach-feta-quinoa-cakes-plus-5-quick-dinners-on-the-panini-press/?utm_source=feedburner&utm_medium=email&utm_campaign=Feed:+PaniniHappy+(Panini+Happy)&utm_content=Yahoo!+Mail",
    servings: 8 - 10,
    ingredients: [
      "Lemon-Dill Yogurt Sauce:",
      "1/2 cup plain Greek yogurt, reduced-fat or whole",
      "2 tablespoons finely chopped scallions",
      "2 teaspoons freshly squeezed lemon juice",
      "2 teaspoons chopped fresh dill",
      "Coarse salt and freshly ground black pepper",
      "Quinoa Cakes:",
      "1 tablespoon extra-virgin olive oil",
      "1/2 cup finely chopped onion",
      "2 garlic cloves, finely chopped",
      "5 ounces chopped baby spinach",
      "2 large eggs, beaten",
      "1 1/4 cups cooked quinoa",
      "2 ounces crumbled feta cheese",
      "1 tablespoon chopped fresh dill",
      "1/4 teaspoon grated lemon zest",
      "1/4 teaspoon freshly ground black pepper",
      "1/2 cup bread crumbs"
    ],
    steps: [
      {
        header: "Lemon-Dill Yogurt Sauce",
        content:
          "Whisk together the yogurt, scallions, lemon juice, and dill in a small bowl. Season to taste with salt and pepper. Cover and refrigerate the sauce for at least 1 hour to allow the flavors to meld."
      },
      {
        header: "Quinoa Cakes",
        content:
          "Heat the olive oil in a large skillet over medium heat. Add the onion and garlic and cook, stirring often, until softened, about 4 minutes. Add the spinach and cook, stirring often, until wilted, about 3 minutes. Transfer the mixture to a medium-size bowl. Add the eggs, quinoa, feta, dill, lemon zest, and black pepper and mix well. Mix in the bread crumbs and let the mixture sit for a few minutes to allow the bread crumbs to absorb some of the moisture. Heat the panini press to medium-high heat. Form quinoa patties about 2 1/2 inches in diameter and 1/2 inch thick. Place the patties on the grill, in batches if necessary, and close the lid. Grill the patties until they’re cooked through and browned on the outside, 4 to 5 minutes. Serve warm with lemon-dill yogurt sauce."
      }
    ]
  },

  {
    id: 35,
    title: "Pad Thai",
    blurb: `Super easy go-to pad thai recipe`,
    cookTime: "40 minutes",
    source: "http://browniesfordinner.com/2010/05/11/easy-pad-thai/",
    servings: 4,
    ingredients: [
      "8 ounces dried, wide and flat rice noodles",
      "2 tablespoons brown sugar",
      "2 tablespoons fresh lime juice, plus wedges for serving",
      "3 tablespoons soy sauce",
      "1 squirt (about 1/8 teaspoon) Sriracha (optional)",
      "2 teaspoons vegetable oil",
      "3 scallions (green onions), white and green parts, separated and thinly sliced",
      "1 garlic clove, minced",
      "2 large eggs, light beaten (optional)",
      "1/2 cup fresh cilantro",
      "1/4 cup chopped roasted, salted peanuts"
    ],
    steps: `Soak noodles according to package instructions. Drain. In a small bowl, whisk together brown sugar, lime juice, soy sauce, and Sriracha. In a large nonstick skillet, heat oil over medium-high heat. Add scallion whites and garlic and cook, stirring constantly, until fragrant (about 30 seconds). Add eggs and cook, scraping skillet with spatula until eggs are almost set (about 30 seconds). Transfer eggs to a plate. Add noodles, scallion greens, and sauce to skillet. Cook, tossing constantly, until noodles are soft (about 1 minute). Add egg mixture and toss to coat, breaking eggs up gently. Serve noodles with lime wedges, topped with cilantro and peanuts.`
  },

  {
    id: 36,
    title: "Easy Sweet Potato Veggie Burgers With Avocado",
    blurb: `An old favorite.  A little time consuming but tasty and healthy.`,
    cookTime: "One hour and twenty minutes",
    source:
      "https://healthyhappylife.com/easy-sweet-potato-veggie-burgers-with/",
    servings: 6,
    ingredients: [
      "1 medium sweet potato, baked and peeled",
      "16 oz. cooked white beans, canned, drained and rinsed",
      "1/2 cup white onion, chopped",
      "2-3 Tbsp tahini",
      "3/4 tsp apple cider vinegar",
      "1 tsp garlic powder",
      "1/2 – 1 tap chipotle powder, or cajun spice",
      "1/2 tsp salt",
      "1/8 tsp black pepper, or to taste",
      "1/3 cup nutritional yeast, or any flour as a sub",
      "1/2 cup leafy greens, kale, spinach, parsley, finely chopped",
      "toppings:  avocado, tomato, lettuce, tomato, onion, greens, etc",
      "Panko bread crumbs for crispy topping, optional"
    ],
    steps: `Bake your sweet potato in a 400 degree oven for 45 minutes or until tender. If in a hurry, you could use the microwave, but oven-baked yields more flavor. Drain and rinse beans. Rinse in very hot water to help soften them a bit. Add the sweet potato and beans to a large mixing bowl. Add the tahini and vinegar. Using a large fork, mash well. Fold inthe onion, garlic, chipotle, salt, pepper, nutritional yeast/flour and greens – and continue mashing. Preheat oven to 400 degrees. Pan-fry: Form burger mixture into large patties and roll in the Panko breadcrumbs. Warm a skillet over high heat. Addoil to pan. Cook patties 2-3 at a time. Pan fry each side for about two minutes, until crispy and lightly browned. Transferthe pan-fried patties to a parchment-sheet lined baking sheet. Repeat until all the patties are pan-fried. (6-8 patties). Bake patties in a 400 degree oven for 10-15 minutes. Toast burger buns. Add toppings and patties. Serve!`
  },

  {
    id: 37,
    title: "Cheesy Quinoa Mac and Cheese",
    blurb: `Used to make this a lot in law school.  Doesn't keep well so don't double it.`,
    cookTime: "1 hour 30 minutes",
    source:
      "http://aroundthetableri.blogspot.com/2012/02/cheesy-quinoa-mac-cheese.html",
    servings: 8,
    ingredients: [
      "1 1/2 cups quinoa, rinsed and drained",
      "Veggies of your choice (optional)",
      "good pinch of salt",
      "a few grinds of seasoning salt",
      "2 cloves garlic, minced",
      "2 large eggs",
      "1 cup soy milk or non-fat milk",
      "1 1/2 cups grated Cheddar cheese, more for sprinkling",
      "Optional- Crushed Red Pepper, Panko Bread crumbs for topping"
    ],
    steps: `Lightly saute any veggies you would like in this dish. Cook quinoa to packaged instructions until fully cooked. (About 15 minutes).  Preheat oven to 350 F. Coat 13x9 inch dish( or 8 individual ramekins) with cooking spray. Whisk together eggs and milk in large bowl. Fold in quinoa mixture and cheese. Stir very well and let some of the cheese melt.  Transfer to prepared baking dish and if using Panko Crumbs or Bread crumbs add now and bake 30-35 mins, until bread crumbs are browned.`
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
