import { createSlice } from "@reduxjs/toolkit";

const initState = {
  currentPage: 1,
  postsPerPage: 8,
};

const PaginationSlice = createSlice({
  name: "SLICE2",
  initialState: initState,
  reducers: {
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
  },
});

export default PaginationSlice.reducer;
export const { setCurrentPage } = PaginationSlice.actions;
