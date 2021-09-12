import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { nanoid } from "nanoid";
import { useDispatch } from "react-redux";

const Sidebar = ({ sidebarlinks }) => {
  const dispatch = useDispatch();

  const songChosen = (text) => {
    dispatch({
      type: "SET_SEARCH_SONG",
      payload: { searchSongTitle: text },
    });
  };

  return (
    <StyledSidebar>
      <StyledList key={nanoid()}>
        {sidebarlinks.map((link) => {
          const { id, url, text } = link;
          return (
            <a
              key={nanoid()}
              onClick={() => {
                songChosen(text);
              }}
            >
              {text}
            </a>
          );
        })}
      </StyledList>
    </StyledSidebar>
  );
};

export default Sidebar;

const StyledList = styled.div`
  a {
    display: flex;
    align-items: center;
    font-size: 1.25rem;
    padding: 1rem 1rem;
    color: grey;
    transition: all 0.3s linear;
  }
  a:hover {
    background: grey;
    color: chartreuse;
  }
`;

const StyledSidebar = styled.div`
  word-wrap: break-word;
  padding-top: 5rem;
  height: 100vh;
  background: white;
  display: grid;
  grid-template-rows: auto 1fr auto;
  row-gap: 2rem;
  box-shadow: 2px 2px 50px grey;
  transition: all 0.3s linear;
  transform: translate(0%);
  overflow: scroll;
  overflow-x: hidden;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  background-color: ivory;
`;