const initState = {
  currentPage: 1,
  postsPerPage: 8,
};

export default function PaginationReducer(state = initState, action) {
  switch (action.type) {
    case "GET_CURRENT_PAGE":
      return state;
    case "SET_CURRENT_PAGE":
      return { ...state, currentPage: action.payload.currentPage };
    case "SET_SEARCH_SONG":
      return { ...state, currentPage: action.payload.currentPage };
    default:
      return state;
  }
}
