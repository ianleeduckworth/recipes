import * as React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import "./recipeList.scss";
import { sortByTitleAlphabetical } from "../../utilities/filter";

export interface RecipeItem {
  id: number;
  title: string;
  blurb: string;
  cookTime?: {
    amount: number;
    unit: string;
  };
}

export interface RecipeListProps {
  recipes: RecipeItem[];
  history: any;
}

class RecipeList extends React.Component<RecipeListProps> {
  handleClick = (id: number) => {
    this.props.history.push(`/recipe/${id}`);
  };

  render() {
    return (
      <>
        <div className="container">
          {this.props.recipes && this.props.recipes.length > 0 ? (
            <div>
              {this.props.recipes.map(item => (
                <div
                  key={item.id}
                  className="my-3 card clickable recipe-list-card"
                  onClick={() => this.handleClick(item.id)}
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
}

const mapStateToProps = (state: any) => {
  return {
    recipes: state.recipes.sort(sortByTitleAlphabetical)
  };
};

export default withRouter(connect(mapStateToProps)(RecipeList));
