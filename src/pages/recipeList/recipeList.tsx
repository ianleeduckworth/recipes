import * as React from "react";
import { connect } from "react-redux";
import { withRouter, RouteComponentProps } from "react-router-dom";
import "./recipeList.scss";
import { filterRecipes } from "../../utilities/filter";
import { Recipe } from "../../data/recipes";
import { db } from "../../firebase";
import { Routes } from "../../data/routes";
import { ApplicationState } from "../../reducers/rootReducer";
import { checkAuthAndLogout } from "../../utilities/authUtilities";

export interface RecipeItem {
  id: number;
  title: string;
  blurb: string;
  servings: number;
  cookTime?: {
    amount: number;
    unit: string;
  };
}

export interface RecipeListProps extends RouteComponentProps {
  filterBy: string;
}

const RecipeListComponent = (props: RecipeListProps) => {
  const { history, filterBy } = props;

  const [recipes, setRecipes] = React.useState([] as Recipe[]);

  React.useEffect(() => {
    let mounted = true;

    checkAuthAndLogout(history);
    
    async function fetchData() {
      const { docs } = await db.collection('recipes').get();
      const recipes = docs.map(doc => {
        const data = doc.data();
        const id = doc.id;
        return { id, ...data };
      }) as Recipe[];

      if (mounted) {
        const filteredRecipes = filterRecipes(recipes, filterBy);
        setRecipes(filteredRecipes as Recipe[]);
      }

      return () => mounted = false;
    }
    fetchData();
  }, [filterBy, history]);

  const handleClick = (id: string) => {
    history.push(`${Routes.recipe}/${id}`);
  };

  const onAddClick = () => {
    history.push(Routes.addEditRecipe);
  }

  return (
    <>
      <div className="container">
        <button className="btn btn-outline-primary mb-2 mt-4" onClick={onAddClick}>+ Add Recipe</button>
        {recipes && recipes.length > 0 ? (
          <div>
            {recipes.map(item => (
              <div
                key={item.id}
                className="my-3 card clickable recipe-list-card"
                onClick={() => handleClick(item.id)}
              >
                <div className="card-body">
                  <h5>{item.title}</h5>
                  <p>{item.blurb}</p>
                  {item.cookTime && <h6>{`Ready in ${item.cookTime}`}</h6>}
                </div>
              </div>
            ))}
          </div>
        ) : (
            <div className="container">
              <h5 className="font-italic py-4 text-center">
                No recipes found!
              </h5>
            </div>
          )}
      </div>
    </>
  );
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    loadRecipes: (recipes: Recipe[]) => dispatch({ type: "LOAD_RECIPES", recipes })
  };
}

const mapStateToProps = (state: ApplicationState) => {
  return {
    filterBy: state.filterBy
  };
};

export const RecipeList = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(RecipeListComponent as any));
