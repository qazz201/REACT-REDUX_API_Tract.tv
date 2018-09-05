import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import showReducer from "./reducer/showReducer";

var store = createStore(showReducer, applyMiddleware(thunk));
export default store;
