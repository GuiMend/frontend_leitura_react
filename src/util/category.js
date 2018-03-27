import CONSTANTS from "../constants";

export const getAllCategories = () =>
  fetch(`${CONSTANTS.BACKEND_URL}/categories`, {
    method: "GET",
    headers: { Authorization: "whatever-you-want" }
  });
