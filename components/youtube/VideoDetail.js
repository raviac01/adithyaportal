import ReactPlayer from "react-player";
import styled from "styled-components";

export default function Video({ item }) {
  const { id, snippet = {} } = item;
  const { title, thumbnails = {}, resourceId } = snippet;
  const { medium = {} } = thumbnails;

  return (
    <StyledVideo>
      <h3>{title}</h3>
      <ReactPlayer
        width="680px"
        height="440px"
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
  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.5);
`;
