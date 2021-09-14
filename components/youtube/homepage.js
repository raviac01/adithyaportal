import { useSelector } from "react-redux";

import Video from "./Video";
import styled from "styled-components";
import { nanoid } from "nanoid";
import Sidebar from "./Sidebar";
import SearchSongs from "./SearchSongs";
import YPagination from "./Pagination";

export default function HomePage() {
  const state = useSelector((state) => {
    return state;
  });
  const { itemslist, isLoading, searchSongTitle } = state.PLAYLIST1;
  const { currentPage, postsPerPage } = state.PAGINATION;

  const sidebarlinks = itemslist.map((item) => {
    const { id, snippet = {} } = item;
    const { title, thumbnails = {}, resourceId } = snippet;
    return { url: "", text: title };
  });

  //Get Current Videos
  const indexOfLastVideo = currentPage * postsPerPage;
  const indexOfFirstVideo = indexOfLastVideo - postsPerPage;

  return (
    <VideoHomeContainer>
      <SearchSongs />
      <VideoContainer>
        <Sidebar sidebarlinks={sidebarlinks} />

        <Videos>
          {itemslist
            .filter((item) => {
              const { id, snippet = {} } = item;
              const { title, thumbnails = {}, resourceId } = snippet;
              return title
                .toLowerCase()
                .includes(searchSongTitle.toLowerCase());
            })
            .slice(indexOfFirstVideo, indexOfLastVideo)
            .map((item) => (
              <Video key={nanoid()} item={item} />
            ))}
        </Videos>
      </VideoContainer>
      <StyledPagination>
        <YPagination />
      </StyledPagination>
    </VideoHomeContainer>
  );
}

const StyledPagination = styled.div`
  width: 5rem;
  margin: auto;
`;

const VideoHomeContainer = styled.div`
  margin-top: 1rem;
`;

const VideoContainer = styled.div`
  padding: 1rem;
  display: grid;
  grid-template-columns: 12rem auto;
  grid-column-gap: 1rem;
  padding-top: 5px;
`;

const Videos = styled.div`
  padding: 0rem 1rem;
  height: 70vh;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
  padding-top: 5px;
`;
