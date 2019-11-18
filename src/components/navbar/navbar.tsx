import * as React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Routes } from "../../data/routes";
import "./navbar.scss";

interface NavbarProps {
  filterRecipes: (filterBy: string) => void;
  history: any;
}

interface NavbarState {
  searchBarValue: string;
}

export class Navbar extends React.Component<NavbarProps, NavbarState> {
  constructor(props: NavbarProps) {
    super(props);

    this.state = {
      searchBarValue: ""
    };
  }

  onSubmit = (e: any) => {
    e.preventDefault();
    this.props.filterRecipes(this.state.searchBarValue);
    this.props.history.push(Routes.recipes);
  };

  onSearchChange = (e: any) => {
    this.setState({ searchBarValue: e.target.value });
  };

  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container">
            <a className="navbar-brand d-none d-lg-block" href="/">
              Hope's Recipes
            </a>
            <form
              className="form-inline navbar-form my-2 my-lg-0"
              onSubmit={this.onSubmit}
            >
              <input
                className="form-control mr-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={this.onSearchChange}
              />
              <button className="btn btn-outline-success my-2" type="submit">
                Search
              </button>
            </form>
          </div>
        </nav>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    filterRecipes: (filterBy: string) =>
      dispatch({ type: "FILTER_RECIPES", filterBy })
  };
};

export default connect(null, mapDispatchToProps)(withRouter(Navbar as any));
