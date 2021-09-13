import { combineReducers } from "redux";
import playlistReducer from "./playlistReducer";
import PaginationReducer from "./paginationReducer";

const allReducers = combineReducers({
  PLAYLIST1: playlistReducer,
  PAGINATION: PaginationReducer,
});

export default allReducers;
