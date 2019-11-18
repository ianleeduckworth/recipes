import React from "react";

export const Home: React.FC<{}> = () => {
  return (
    <>
      <div className="container">
        <h1 className="py-3 text-center">Welcome to Hope's Recipes!</h1>
        <h4 className="text-center font-italic">
          This site houses all of Hope's recipes in one easy to find place. To
          find a recipe, simply click into the search bar above and type! Click
          "Search" (or press Enter) to see all matching recipes. Click the
          recipe card to see the recipe details including ingredients, steps,
          and cook time. It you want to see a list of all recipes, click Search
          without entering any text into the Search box.
        </h4>
      </div>
    </>
  );
};

export default Home;
