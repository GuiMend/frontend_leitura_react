import { commentTypes } from "../actionTypes";

const initialState = {
  comments: []
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case commentTypes.UPDATE_SINGLE_COMMENT:
      const newComments = state.comments.map(
        comment => (action.comment.id === comment.id ? action.comment : comment)
      );
      return { ...state, comments: newComments };

    case commentTypes.DELETE_SINGLE_COMMENT:
      const resultantComment = state.comments.filter(
        comment => action.comment.id !== comment.id
      );
      return { ...state, comments: resultantComment };

    case commentTypes.ADD_COMMENT:
      return { ...state, comments: [...state.comments, action.comment] };

    case commentTypes.FILL_COMMENTS:
      return { ...state, comments: action.comments };

    default:
      return state;
  }
}

export default reducer;
