import * as types from "./actionTypes";
import * as CategoryUtil from "../util/category";
import * as PostUtil from "../util/post";
import * as CommentUtil from "../util/comment";

export const fillCategories = categories => ({
  type: types.FILL_CATEGORIES,
  categories
});

export const fillPosts = posts => ({
  type: types.FILL_POSTS,
  posts
});

export const fillComments = comments => ({
  type: types.FILL_COMMENTS,
  comments
});

export const getAllPostsAction = () => dispatch => {
  PostUtil.getAllPosts().then(response => {
    if (response.ok) {
      response.json().then(res => {
        dispatch(fillPosts(res));
      });
    } else {
      console.log("error code:", response);
    }
  });
};

export const getAllCategoriesAction = () => dispatch => {
  CategoryUtil.getAllCategories().then(response => {
    if (response.ok) {
      response.json().then(res => {
        dispatch(fillCategories(res.categories));
      });
    } else {
      console.log("error code:", response);
    }
  });
};

export const votePostAction = (id, vote) => dispatch => {
  const body = { option: vote };
  PostUtil.votePost(id, body).then(response => {
    if (response.ok) {
      response.json().then(res => {
        // dispatch(fillCategories(res.categories));
        console.log("OK:", res);
      });
    } else {
      console.log("error code:", response);
    }
  });
};

export const voteCommentAction = (id, vote) => dispatch => {
  const body = { option: vote };
  CommentUtil.voteComment(id, body).then(response => {
    if (response.ok) {
      response.json().then(res => {
        // dispatch(fillCategories(res.categories));
        console.log("OK:", res);
      });
    } else {
      console.log("error code:", response);
    }
  });
};

export const getPostCommentsAction = id => dispatch => {
  PostUtil.getPostComments(id).then(response => {
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
