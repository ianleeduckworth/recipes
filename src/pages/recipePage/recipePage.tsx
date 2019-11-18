import * as React from "react";
import recipes from "../../data/recipes";

export interface RecipePageState {
  id?: number;
}

class RecipePage extends React.Component<any, RecipePageState> {
  render() {
    const id = parseInt(this.props.match.params.recipe_id);
    const recipe = recipes.filter(x => x.id === id)[0];

    if (!recipe)
      return (
        <div className="container">
          <h5 className="font-italic py-4 text-center">No recipe found!</h5>
        </div>
      );

    return (
      <div className="container">
        <h1 className="py-3 text-center">{recipe.title}</h1>
        <h5 className="font-italic">{recipe.blurb}</h5>
        <div className="row pt-4">
          <div className="col-12 col-lg-4 pb-3">
            <div className="card">
              <div className="card-header">Ingredients</div>
              <ul className="list-group list-group-flush">
                {recipe.ingredients.map(item => (
                  <div key={item}>
                    <li className="list-group-item">{item}</li>
                  </div>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-12 col-lg-8 pb-3">
            <div className="card">
              <div className="card-header">Steps</div>
              <div className="card-body">
                <p>{recipe.steps}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RecipePage;
