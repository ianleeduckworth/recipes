import * as React from "react";
import { connect } from "react-redux";
import { withRouter, RouteComponentProps, Link } from "react-router-dom";
import { Routes } from "../../data/routes";
import "./navbar.scss";
import { ApplicationState } from "../../reducers/rootReducer";
import { auth } from '../../firebase';

interface NavbarProps extends RouteComponentProps {
  filterRecipes: (filterBy: string) => void;
  currentUser?: string;
}

const NavbarComponent = (props: NavbarProps) => {
  const { history, filterRecipes, currentUser } = props;
  const [searchBarValue, setSearchBarValue] = React.useState('');

  const onLogin = (e: any) => {
    e.preventDefault();
    history.push(Routes.login);
  }

  const onLogOut = (e: any) => {
    e.preventDefault();
    auth.signOut();
  }

  const onSearch = (e: any) => {
    e.preventDefault();
    filterRecipes(searchBarValue);
    history.push(Routes.recipes);
  };

  const onSearchChange = (e: any) => {
    setSearchBarValue(e.target.value);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container d-flex align-items-center">
          <Link className="navbar-brand mr-auto" to={Routes.home}>Hope's Recipes</Link>
          <form
            className="form-inline navbar-form my-2 my-lg-0"
            onSubmit={onSearch}
          >

            {currentUser &&
              <>
                <h6 className="d-none d-md-block mb-0 mr-3 font-italic">{currentUser}</h6>
                <input
                  className="form-control"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  onChange={onSearchChange}
                />
                <button className="btn btn-outline-success my-2 ml-2" type="submit">
                  Search
                </button>
                <button className="btn btn-outline-secondary my-2 ml-2" onClick={onLogOut}>Logout</button>
              </>
            }
            {!currentUser &&
              <button className="btn btn-outline-secondary my-2 ml-4" onClick={onLogin}>Login</button>
            }
          </form>
        </div>
      </nav>
    </>
  );
}

const mapStateToProps = (state: ApplicationState) => {
  return {
    currentUser: state.currentUser
  }
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    filterRecipes: (filterBy: string) =>
      dispatch({ type: "FILTER_RECIPES", filterBy })
  };
};

export const Navbar = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(NavbarComponent as any));
