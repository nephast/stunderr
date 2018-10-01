import { combineReducers } from "redux";
import AllArtists from "./reducer_artists";
import SelectedArtist from "./reducer_selected_artist";

const rootReducer = combineReducers({
  allArtists: AllArtists,
  // selectedArtist: SelectedArtist
});

export default rootReducer;
