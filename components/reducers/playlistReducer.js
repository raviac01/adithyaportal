const initState = {
  itemslist: [],
  isLoading: true,
  searchSongTitle: "",
};

export default function playlistReducer(state = initState, action) {
  switch (action.type) {
    case "GET_PLAYLIST_ITEMS":
      return {
        ...state,
        itemslist: action.payload.itemslist,
        isLoading: false,
      };

    case "LOADING":
      return { ...state, isLoading: true };

    case "SET_SEARCH_SONG":
      return { ...state, searchSongTitle: action.payload.searchSongTitle };

    case "GET_SEARCH_SONG":
      return state;

    default:
      return state;
  }
}
