import { MdSearch } from "react-icons/md";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

export default function SearchSongs() {
  const dispatch = useDispatch();
  const { searchSongTitle } = useSelector((state) => {
    return state.PLAYLIST1;
  });

  const searchEvent = (event) => {
    dispatch({
      type: "SET_SEARCH_SONG",
      payload: { searchSongTitle: event.target.value, currentPage: 1 },
    });
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
