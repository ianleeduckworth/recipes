import * as React from "react";
import { db } from "../../firebase";
import { Recipe } from "../../data/recipes";
import { checkAuthAndLogout } from "../../utilities/authUtilities";
import { withRouter, RouteComponentProps } from "react-router-dom";

interface RecipePageProps extends RouteComponentProps {}

const RecipePageComponent = (props: RecipePageProps) => {
  const [recipe, setRecipe] = React.useState({
    id: '',
    title: '',
    blurb: '',
    cookTime: undefined,
    servings: undefined,
    ingredients: [],
    steps: '',
    source: undefined,
    notes: undefined,
    tags: []
  } as Recipe);

  const id = (props.match.params as any).recipe_id;
  const { history } = props;

  React.useEffect(() => {
    checkAuthAndLogout(history);
    
    let mounted = true;
    const getData = async () => {
      const doc = await db.collection('recipes').doc(id).get();
      const data = doc.data();

      if (mounted) {
        setRecipe(data as Recipe);
      }

      return () => mounted = false;
    }
    getData();
  }, [history, id]);

  const renderSteps = () => {
    if (typeof recipe.steps === "string") {
      return <p>{recipe.steps}</p>;
    } else {
      return (
        <>
          {recipe.steps.map((item, index) => (
            <div className="pb-2" key={item.header}>
              <h6 className="font-weight-bold">{`${index + 1}. ${
                item.header
                }`}</h6>
              <p>{item.content}</p>
            </div>
          ))}
        </>
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
      {recipe.tags && recipe.tags.length > 0 && (
        <div className="row">
          <div className="col-12">
            <div className="mb-1 mt-2">
              <a
                data-toggle="collapse"
                href="#tagsCollapse"
                aria-expanded="false"
                aria-controls="tagsCollapse"
              >
                Tags
                </a>
            </div>
            <div className="collapse" id="tagsCollapse">
              <div className="card">
                <div className="card-header font-weight-bold">Tags</div>
                <div className="card-body">
                  {recipe.tags.map(item => (
                    <span
                      key={item}
                      className="badge badge-pill badge-dark mr-1"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
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
          {recipe.notes && (
            <div className="card mt-4">
              <div className="card-header font-weight-bold">Notes</div>
              <div className="card-body">{recipe.notes}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export const RecipePage = withRouter(RecipePageComponent);