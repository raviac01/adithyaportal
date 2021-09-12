import HomePage from "components/youtube/homepage";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import allReducers from "components/reducers";
import { Provider } from "react-redux";
import { loadPlaylist } from "components/actions/playlistActions";

//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  allReducers,
  //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  //composeEnhancers(applyMiddleware(thunk))
  applyMiddleware(thunk)
);

store.dispatch(loadPlaylist());

store.subscribe(() => {
  //console.log("state is", store.getState().PLAYLIST1.itemslist);
  // store.getState().PLAYLIST1.itemslist.map((item) => console.log(item));
});

export default function YouTube() {
  return (
    <Provider store={store}>
      <HomePage />;
    </Provider>
  );
}
