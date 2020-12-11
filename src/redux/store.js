import { applyMiddleware, combineReducers, createStore } from "redux";
import mainPageReducer from "./main_page-reduser";

import thunkMiddleware from "redux-thunk";

const reducers = combineReducers({
  mainPage: mainPageReducer,
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
