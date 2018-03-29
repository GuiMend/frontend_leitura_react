import { categoryTypes } from "../actionTypes";
import * as CategoryUtil from "../../util/category";

export const fillCategories = categories => ({
  type: categoryTypes.FILL_CATEGORIES,
  categories
});

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
