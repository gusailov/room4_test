import { searchPageAPI } from "../api/api";

const SET_TRACKS = "SEARCH_TRACKS";
const SET_ALBUMS = "SEARCH_ALBUMS";
const SET_PLAYLISTS = "SEARCH_PLAYLISTS";
const SET_ARISTS = "SEARCH_ARISTS";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";

const initialState = {
  tracks: [],
  albums: [],
  playlists: [],
  artists: [],
  isFetching: true,
};

const searchPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TRACKS:
      return { ...state, tracks: action.tracks };
    case SET_ALBUMS:
      return { ...state, albums: action.albums };
    case SET_PLAYLISTS:
      return { ...state, playlists: action.playlists };
    case SET_ARISTS:
      return { ...state, artists: action.artists };
    case TOGGLE_IS_FETCHING: {
      return { ...state, isFetching: action.isFetching };
    }
    default:
      return state;
  }
};
export const setTracks = (tracks) => ({ type: SET_TRACKS, tracks });
export const setAlbums = (albums) => ({ type: SET_ALBUMS, albums });
export const setPlaylists = (playlists) => ({ type: SET_PLAYLISTS, playlists });
export const setArtists = (artists) => ({ type: SET_ARISTS, artists });

export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});

export const getSearchResult = (query, page) => {
  return async (dispatch) => {
    dispatch(toggleIsFetching(true));
    const limit = 5;
    const tracks = await searchPageAPI.searchTrack(query, limit);
    const albums = await searchPageAPI.searchAlbum(query, limit);
    const playlists = await searchPageAPI.searchPlaylist(query, limit);
    const artists = await searchPageAPI.searchArtist(query, limit);

    // console.log("searchPageAPI tracks", tracks.data);
    // console.log("searchPageAPI albums", albums.data);
    // console.log("searchPageAPI playlists", playlists.data);
    // console.log("searchPageAPI artists", artists.data);
    dispatch(setTracks(tracks.data));
    dispatch(setAlbums(albums.data));
    dispatch(setPlaylists(playlists.data));
    dispatch(setArtists(artists.data));
    dispatch(toggleIsFetching(false));
  };
};

export default searchPageReducer;
