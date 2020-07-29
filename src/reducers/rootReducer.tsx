export interface ApplicationState {
  currentUser: string | null | undefined;
  filterBy: string | null | undefined;
}

const initState: ApplicationState = {
  currentUser: undefined,
  filterBy: undefined
};

export const rootReducer = (state = initState, action: any) => {
  if (action.type === "FILTER_RECIPES") {
    return {
      ...state,
      filterBy: action.filterBy
    };
  }

  if (action.type === "LOGIN") {
    return {
      ...state,
      currentUser: action.user
    }
  }

  return {...state};
};

export default rootReducer;
