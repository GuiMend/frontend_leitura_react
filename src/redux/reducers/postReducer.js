import { postTypes } from "../actionTypes";

const initialState = {
  posts: []
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case postTypes.UPDATE_SINGLE_POST:
      const newPosts = state.posts.map(
        post => (action.post.id === post.id ? action.post : post)
      );
      return { ...state, posts: newPosts };

    case postTypes.DELETE_SINGLE_POST:
      const resultantPost = state.posts.filter(
        post => action.post.id !== post.id
      );
      return { ...state, posts: resultantPost };

    case postTypes.FILL_POSTS:
      return { ...state, posts: action.posts };

    case postTypes.ADD_POST:
      return { ...state, posts: [action.post, ...state.posts] };

    default:
      return state;
  }
}

export default reducer;
