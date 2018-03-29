import { postTypes } from "../actionTypes";
import { fillComments } from "./commentAction";
import * as PostUtil from "../../util/post";

export const fillPosts = posts => ({
  type: postTypes.FILL_POSTS,
  posts
});

export const addPost = post => ({
  type: postTypes.ADD_POST,
  post
});

export const updateSinglePost = post => ({
  type: postTypes.UPDATE_SINGLE_POST,
  post
});

export const deleteSinglePost = post => ({
  type: postTypes.DELETE_SINGLE_POST,
  post
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

export const votePostAction = (id, vote) => dispatch => {
  const body = { option: vote };
  PostUtil.votePost(id, body).then(response => {
    if (response.ok) {
      response.json().then(res => {
        dispatch(updateSinglePost(res));
      });
    } else {
      console.log("error code:", response);
    }
  });
};

export const createNewPostAction = post => dispatch => {
  PostUtil.createNewPost(post).then(response => {
    if (response.ok) {
      response.json().then(res => {
        dispatch(addPost(res));
      });
    } else {
      console.log("error code:", response);
    }
  });
};

export const deletePostAction = id => dispatch => {
  PostUtil.deletePost(id).then(response => {
    if (response.ok) {
      response.json().then(res => {
        dispatch(deleteSinglePost(res));
        dispatch(fillComments([]));
      });
    } else {
      console.log("error code:", response);
    }
  });
};

export const updatePost = (id, body) => dispatch => {
  PostUtil.updatePost(id, body).then(response => {
    if (response.ok) {
      response.json().then(res => {
        dispatch(updateSinglePost(res));
      });
    } else {
      console.log("error code:", response);
    }
  });
};
