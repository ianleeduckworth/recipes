import React from "react";
import { Route } from "react-router-dom";
import { Routes } from "./data/routes";
import { Home } from "./pages/landing/home";
import { Navbar } from "./components/navbar/navbar";
import { RecipeList } from "./pages/recipeList/recipeList";
import { RecipePage } from "./pages/recipePage/recipePage";
import { AddRecipe } from "./pages/addRecipe/addRecipe";
import { Login } from "./pages/login/login";
import { auth } from "./firebase";
import { store } from './index';
import { JsonImporter } from "./pages/jsonImporter/jsonImporter";

export class App extends React.Component {
  componentDidMount() {
    auth.onAuthStateChanged(authUser => {
      authUser ? 
        store.dispatch({type: "LOGIN", user: authUser.email}) :
        store.dispatch({type: "LOGIN", user: undefined});
    })
  }

  render(): React.ReactElement {
    return (
      <>
        <Navbar />
        <Route path={Routes.home} component={Home} exact />
        <Route path={Routes.recipes} component={RecipeList} exact />
        <Route path={Routes.login} component={Login} exact />
        <Route path={Routes.addRecipe} component={AddRecipe} exact />
        <Route path={Routes.jsonImporter} component={JsonImporter} exact />
        <Route path={`${Routes.recipe}/:recipe_id`} component={RecipePage} />
      </>
    );
  }
}

export default App;
