import { createSlice } from "@reduxjs/toolkit";
import { playlistURL } from "youtubeapi";

const initState = {
  itemslist: [],
  isLoading: true,
  searchSongTitle: "",
};

const PlayListSlice = createSlice({
  name: "SLICE1",
  initialState: initState,
  reducers: {
    loadPlaylistSuccess(state, action) {
      state.itemslist = action.payload;
      state.isLoading = false;
    },
    isLoading(state) {
      state.isLoading = true;
    },
    setSearchSong(state, action) {
      state.searchSongTitle = action.payload;
    },
  },
});

export const loadPlaylist = () => async (dispatch) => {
  dispatch(isLoading());

  const res = await fetch(playlistURL);
  const data = await res.json();
  //console.log("data from fetch", data.items);
  dispatch(loadPlaylistSuccess(data.items));
};

export default PlayListSlice.reducer;
export const { loadPlaylistSuccess, setSearchSong, isLoading } =
  PlayListSlice.actions;
