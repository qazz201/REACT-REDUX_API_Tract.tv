import { combineReducers } from "redux";
import { showReducer as showData } from "./allReducers/showReducer";
import { searchReducer as searchData } from "./allReducers/searchReducer";
import { typeShowReducer as showsType } from "./allReducers/typeShowReducer";
import { genreShowReducer as showsGenre } from "./allReducers/genreShowReducer";

export default combineReducers({
  showData,
  searchData,
  showsType,
  showsGenre
});
