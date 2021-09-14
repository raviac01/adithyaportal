import { configureStore } from "@reduxjs/toolkit";

import PlayListReducer from "components/redux/PlayListSlice";
import PaginationSliceReducer from "components/redux/PaginationSlice";

export default configureStore({
  reducer: {
    PLAYLIST1: PlayListReducer,
    PAGINATION: PaginationSliceReducer,
  },
});
