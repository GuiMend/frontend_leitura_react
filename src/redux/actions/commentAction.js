import { commentTypes } from "../actionTypes";
import * as CommentUtil from "../../util/comment";

export const addComment = comment => ({
  type: commentTypes.ADD_COMMENT,
  comment
});

export const updateSingleComment = comment => ({
  type: commentTypes.UPDATE_SINGLE_COMMENT,
  comment
});

export const fillComments = comments => ({
  type: commentTypes.FILL_COMMENTS,
  comments
});

export const deleteSingleComment = comment => ({
  type: commentTypes.DELETE_SINGLE_COMMENT,
  comment
});

export const voteCommentAction = (id, vote) => dispatch => {
  const body = { option: vote };
  CommentUtil.voteComment(id, body).then(response => {
    if (response.ok) {
      response.json().then(res => {
        dispatch(updateSingleComment(res));
      });
    } else {
      console.log("error code:", response);
    }
  });
};

export const createCommentAction = comment => dispatch => {
  CommentUtil.createNewComment(comment).then(response => {
    if (response.ok) {
      response.json().then(res => {
        dispatch(addComment(res));
      });
    } else {
      console.log("error code:", response);
    }
  });
};

export const getPostCommentsAction = id => dispatch => {
  CommentUtil.getPostComments(id).then(response => {
    if (response.ok) {
      response.json().then(res => {
        dispatch(fillComments(res));
        console.log("OK:", res);
      });
    } else {
      console.log("error code:", response);
    }
  });
};

export const deleteCommentAction = id => dispatch => {
  CommentUtil.deleteComment(id).then(response => {
    if (response.ok) {
      response.json().then(res => {
        dispatch(deleteSingleComment(res));
      });
    } else {
      console.log("error code:", response);
    }
  });
};

export const updateComment = (id, body) => dispatch => {
  CommentUtil.updateComment(id, body).then(response => {
    if (response.ok) {
      response.json().then(res => {
        dispatch(updateSingleComment(res));
      });
    } else {
      console.log("error code:", response);
    }
  });
};
