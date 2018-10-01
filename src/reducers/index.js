import { combineReducers } from "redux";
import AllArtists from "./reducer_artists";

const rootReducer = combineReducers({
  allArtists: AllArtists
});

export default rootReducer;
