import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

//import showReducer from "./reducer/showReducer";
import reducer from "./reducer";

var store = createStore(reducer, applyMiddleware(thunk));

export default store;
