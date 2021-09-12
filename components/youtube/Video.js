import ReactPlayer from "react-player";
import styled from "styled-components";
import { nanoid } from "nanoid";

export default function Video({ item }) {
  const { id, snippet = {} } = item;
  const { title, thumbnails = {}, resourceId } = snippet;
  const { medium = {} } = thumbnails;

  return (
    <StyledVideo key={nanoid()}>
      <h3>{title}</h3>
      <ReactPlayer
        width="300px"
        height="240px"
        controls
        url={`https://www.youtube.com/watch?v=${resourceId.videoId}`}
      />
    </StyledVideo>
  );
}

const StyledVideo = styled.div`
  text-align: center;
  margin: auto;
  padding: 1rem;
  background-color: ivory;
  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.5);
  h3 {
    width: 300px;
    word-wrap: break-word;
  }
`;
