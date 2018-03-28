import * as types from "./actionTypes";

const initialState = {
  categories: [],
  posts: [],
  comments: []
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case types.UPDATE_SINGLE_POST:
      const modifiedPost = state.posts.findIndex(_ => _.id === action.post.id);
      console.log("index", modifiedPost);
      state.posts[modifiedPost] = action.post;
      console.log("posts", state.posts);
      return { ...state };

    case types.FILL_CATEGORIES:
      return { ...state, categories: action.categories };

    case types.FILL_POSTS:
      return { ...state, posts: action.posts };

    case types.FILL_COMMENTS:
      return { ...state, comments: action.comments };

    case "ADD_ITEM":
      return action.item;

    case "EMPTY_CART":
      return {};

    case "UPDATE_ITEMS":
      state.items = action.items;
      return state;
    default:
      return state;
  }
}

export default reducer;
