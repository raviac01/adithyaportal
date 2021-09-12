import CounterReducer from "./CounterReducer";
import LoginReducer from "./LoginReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  count: CounterReducer,
  isLoggedIn: LoginReducer,
});

export default allReducers;
