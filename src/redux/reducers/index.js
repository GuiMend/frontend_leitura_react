import { combineReducers } from "redux";
import category from "./categoryReducer";
import comment from "./commentReducer";
import post from "./postReducer";

export default combineReducers({ category, comment, post });
