import CONSTANTS from "../constants";

export const getAllPosts = () =>
  fetch(`${CONSTANTS.BACKEND_URL}/posts`, {
    method: "GET",
    headers: { Authorization: "whatever-you-want" }
  });

export const votePost = (id, body) =>
  fetch(`${CONSTANTS.BACKEND_URL}/posts/${id}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "whatever-you-want"
    },
    body: JSON.stringify(body)
  });

export const createNewPost = body =>
  fetch(`${CONSTANTS.BACKEND_URL}/posts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "whatever-you-want"
    },
    body: JSON.stringify(body)
  });

export const deletePost = id =>
  fetch(`${CONSTANTS.BACKEND_URL}/posts/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: "whatever-you-want"
    }
  });

export const updatePost = (id, body) =>
  fetch(`${CONSTANTS.BACKEND_URL}/posts/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: "whatever-you-want"
    },
    body: JSON.stringify(body)
  });
