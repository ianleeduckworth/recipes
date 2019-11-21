import * as React from "react";
import recipes from "../../data/recipes";

export interface RecipePageState {
  id?: number;
}

class RecipePage extends React.Component<any, RecipePageState> {
  render() {
    const id = parseInt(this.props.match.params.recipe_id);
    const recipe = recipes.filter(x => x.id === id)[0];

    const renderSteps = () => {
      if (typeof recipe.steps === "string") {
        return <p>{recipe.steps}</p>;
      } else {
        return (
          <div>
            {recipe.steps.map(item => (
              <div className="pb-2">
                <h6 className="font-weight-bold">{item.header}</h6>
                <p>{item.content}</p>
              </div>
            ))}
          </div>
        );
      }
    };

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
        {recipe.source && (
          <a rel="noopener noreferrer" target="_blank" href={recipe.source}>
            Source
          </a>
        )}
        <div className="row pt-4">
          <div className="col-12 col-lg-4 pb-3">
            <div className="card">
              <div className="card-header font-weight-bold">Ingredients</div>
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
              <div className="card-header font-weight-bold">Steps</div>
              <div className="card-body">{renderSteps()}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RecipePage;
