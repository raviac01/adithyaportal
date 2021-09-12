import { useSelector } from "react-redux";

import Video from "./Video";
import styled from "styled-components";
import { nanoid } from "nanoid";
import Sidebar from "./Sidebar";
import SearchSongs from "./SearchSongs";

export default function HomePage() {
  const { itemslist, isLoading, searchSongTitle } = useSelector((state) => {
    return state.PLAYLIST1;
  });
  const sidebarlinks = itemslist.map((item) => {
    const { id, snippet = {} } = item;
    const { title, thumbnails = {}, resourceId } = snippet;
    return { url: "", text: title };
  });

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
            .map((item) => (
              <Video key={nanoid()} item={item} />
            ))}
        </Videos>
      </VideoContainer>
    </VideoHomeContainer>
  );
}

const VideoHomeContainer = styled.div`
  margin-top: 1rem;
`;
const VideoContainer = styled.div`
  padding: 1rem;
  min-height: 100vh;
  display: grid;
  grid-template-columns: 12rem auto;
  grid-column-gap: 2rem;
`;

const Videos = styled.div`
  padding: 0rem 1rem;
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  grid-column-gap: 2rem;
  grid-row-gap: 2rem;
`;
