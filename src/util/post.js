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

export const getPostComments = id =>
  fetch(`${CONSTANTS.BACKEND_URL}/posts/${id}/comments`, {
    method: "GET",
    headers: { Authorization: "whatever-you-want" }
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
