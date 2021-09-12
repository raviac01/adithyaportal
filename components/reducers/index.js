import { combineReducers } from "redux";
import playlistReducer from "./playlistReducer";

const allReducers = combineReducers({ PLAYLIST1: playlistReducer });

export default allReducers;
