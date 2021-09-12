import { playlistURL } from "youtubeapi";

export const loadPlaylist = () => async (dispatch) => {
  dispatch({
    type: "LOADING",
  });

  const res = await fetch(playlistURL);
  const data = await res.json();
  //console.log("data from fetch", data.items);
  dispatch({
    type: "GET_PLAYLIST_ITEMS",
    payload: {
      itemslist: data.items,
    },
  });
};
