import React from "react";
import { Route } from "react-router-dom";
import { Routes } from "./data/routes";
import Home from "./pages/landing/home";
import Navbar from "./components/navbar/navbar";
import RecipeList from "./pages/recipeList/recipeList";
import RecipePage from "./pages/recipePage/recipePage";

export class App extends React.Component {
  render(): React.ReactElement {
    return (
      <>
        <Navbar />
        <Route path={Routes.home} component={Home} exact />
        <Route path={Routes.recipes} component={RecipeList} exact />
        <Route path="/recipe/:recipe_id" component={RecipePage} />
      </>
    );
  }
}

export default App;
