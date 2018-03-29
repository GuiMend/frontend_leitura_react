import CONSTANTS from "../constants";

export const voteComment = (id, body) =>
  fetch(`${CONSTANTS.BACKEND_URL}/comments/${id}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "whatever-you-want"
    },
    body: JSON.stringify(body)
  });

export const createNewComment = body =>
  fetch(`${CONSTANTS.BACKEND_URL}/comments`, {
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

export const deleteComment = id =>
  fetch(`${CONSTANTS.BACKEND_URL}/comments/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: "whatever-you-want"
    }
  });

export const updateComment = (id, body) =>
  fetch(`${CONSTANTS.BACKEND_URL}/comments/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: "whatever-you-want"
    },
    body: JSON.stringify(body)
  });
