import HomePage from "components/youtube/homepage";
import { Provider } from "react-redux";
import { loadPlaylist } from "components/redux/PlayListSlice";
import store from "components/redux/store";

store.dispatch(loadPlaylist());

store.subscribe(() => {
  //console.log(store.getState());
  // store.getState().PLAYLIST1.itemslist.map((item) => console.log(item));
});

export default function YouTube() {
  return (
    <Provider store={store}>
      <HomePage />
    </Provider>
  );
}
