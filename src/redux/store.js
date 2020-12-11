import { applyMiddleware, combineReducers, createStore } from "redux";
import mainPageReducer from "./main_page-reduser";

import thunkMiddleware from "redux-thunk";
import artistPageReducer from "./artist_page-reduser";

const reducers = combineReducers({
  mainPage: mainPageReducer,
  artistPage: artistPageReducer,
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
