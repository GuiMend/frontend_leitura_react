import { categoryTypes } from "../actionTypes";

const initialState = {
  categories: []
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case categoryTypes.FILL_CATEGORIES:
      return { ...state, categories: action.categories };

    default:
      return state;
  }
}

export default reducer;
