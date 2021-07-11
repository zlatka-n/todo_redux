import { combineReducers } from "redux";
//import TodoReducer from "./TodoReducer";
import { todoReducer } from "./TodoReducer";

export default combineReducers({
  todos: todoReducer,
});
