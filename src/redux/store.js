import { applyMiddleware, combineReducers, createStore } from "redux";
import homePageReducer from "./home_page-reducer";
import artistPageReducer from "./artist_page-reducer";
import searchPageReducer from "./search_page-reducer";
import playlistPageReducer from "./playlist_page-reducer";
import thunkMiddleware from "redux-thunk";

const reducers = combineReducers({
  mainPage: homePageReducer,
  artistPage: artistPageReducer,
  searchPage: searchPageReducer,
  playlistPage: playlistPageReducer,
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
