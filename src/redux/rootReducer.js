import { combineReducers } from "redux";
import movieReducer from "./movieReducer";
import searchReducer from "./searchReducer";
// return the modified state to Store
const rootReducer = combineReducers({
  movie: movieReducer,
  search: searchReducer,
});

export default rootReducer;
