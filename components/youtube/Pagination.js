import Pagination from "react-bootstrap/Pagination";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentPage } from "components/redux/PaginationSlice";

export default function YPagination() {
  const dispatch = useDispatch();
  const state = useSelector((state) => {
    return state;
  });
  const { itemslist, searchSongTitle } = state.PLAYLIST1;
  const { currentPage, postsPerPage } = state.PAGINATION;

  const eventHandler = (pgNbr) => {
    // dispatch({
    //   type: "SET_CURRENT_PAGE",
    //   payload: {
    //     currentPage: pgNbr,
    //   },
    // });

    dispatch(setCurrentPage(pgNbr));
  };

  const nbrPaginationItems = Math.ceil(itemslist.length / postsPerPage);

  let active = currentPage;
  let items = [];
  for (let number = 1; number <= nbrPaginationItems; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number == active}
        onClick={() => {
          eventHandler(number);
        }}
      >
        {number}
      </Pagination.Item>
    );
  }

  const paginationBasic = (
    <div>
      <Pagination size="lg">{items}</Pagination>
      <br />
    </div>
  );

  return paginationBasic;
}
