import { mainPageAPI } from "../api/api";

const SET_LISTS = "SET_LISTS";
const SET_ID = "SET_ID";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";

const initialState = {
  lists: [],
  isFetching: true,
};

const mainPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LISTS:
      let newList = {
        id: action.id,
        value: action.query,
        lists: action.lists,
      };
      return {
        ...state,
        lists: [...state.lists, newList],
      };
    case SET_ID:
      return { ...state, tracks: action.tracks.list };

    case TOGGLE_IS_FETCHING: {
      return { ...state, isFetching: action.isFetching };
    }
    default:
      return state;
  }
};
export const setTracks = (query, lists, id) => ({
  type: SET_LISTS,
  query,
  lists,
  id,
});

export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});

export const getTopTracks = (query, id) => {
  return async (dispatch) => {
    dispatch(toggleIsFetching(true));
    const limit = 10;
    const data = await mainPageAPI.gettoptracks(query, limit);
    dispatch(setTracks(query, data.data, id));
    dispatch(toggleIsFetching(false));
  };
};

export default mainPageReducer;
