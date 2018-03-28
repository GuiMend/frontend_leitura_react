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
