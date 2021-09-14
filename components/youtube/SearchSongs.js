import { MdSearch } from "react-icons/md";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { setSearchSong } from "components/redux/PlaylistSlice";
import { setCurrentPage } from "components/redux/PaginationSlice";

export default function SearchSongs() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const { searchSongTitle } = state.PLAYLIST1;
  const currentPage = state.PAGINATION.currentPage;

  const searchEvent = (event) => {
    // dispatch({
    //   type: "SET_SEARCH_SONG",
    //   payload: { searchSongTitle: event.target.value, currentPage: 1 },
    // });
    if (currentPage != 1) {
      console.log("dispatch to 1 from", currentPage);
      dispatch(setCurrentPage(1));
    }
    dispatch(setSearchSong(event.target.value));
  };

  return (
    <StyledSearch>
      <MdSearch size="1.3em" />
      <input
        type="text"
        onChange={searchEvent}
        value={searchSongTitle}
        placeholder="type to search..."
      />
    </StyledSearch>
  );
}

const StyledSearch = styled.div`
  display: flex;
  align-items: center;
  background-color: lightgray;
  border-radius: 10px;
  padding: 5px;
  width: 50rem;
  margin: auto;
  margin-top: 0px;
  justify-content: space-between;

  input {
    border: none;
    background-color: lightgray;
    flex: 50%;
  }
  input:focus {
    outline: none;
  }
`;
