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
      return {
        ...state,
        lists: [...state.lists, { value: action.query, lists: action.lists }],
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
export const setTracks = (query, lists) => ({
  type: SET_LISTS,
  query,
  lists,
});

export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});

export const getTopTracks = (query) => {
  return async (dispatch) => {
    dispatch(toggleIsFetching(true));
    const limit = 5;
    const data = await mainPageAPI.gettoptracks(query, limit);
    dispatch(setTracks(query, data.data));
    dispatch(toggleIsFetching(false));
  };
};

export default mainPageReducer;
