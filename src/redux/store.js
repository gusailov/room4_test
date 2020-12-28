import { applyMiddleware, combineReducers, createStore } from "redux";
import homePageReducer from "./home_page-reduser";
import artistPageReducer from "./artist_page-reduser";
import searchPageReducer from "./search_page-reduser";
import thunkMiddleware from "redux-thunk";

const reducers = combineReducers({
  mainPage: homePageReducer,
  artistPage: artistPageReducer,
  searchPage: searchPageReducer,
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
