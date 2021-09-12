import React from "react";
import { sidebarlinks } from "data/data";
import classes from "./sidebar.module.css";
import Link from "next/link";
import styled from "styled-components";
import { nanoid } from "nanoid";

const Sidebar = () => {
  return (
    <StyledSidebar>
      <StyledList key={nanoid()}>
        {sidebarlinks.map((link) => {
          const { id, url, text } = link;
          return (
            <span key={id}>
              <Link href={url}>{text}</Link>
            </span>
          );
        })}
      </StyledList>
    </StyledSidebar>
  );
};

// const Sidebar = () => {
//   return (
//     <div className={classes.sidebar}>
//       <ul className={classes.links}>
//         {sidebarlinks.map((link) => {
//           const { id, url, text } = link;
//           return (
//             <li key={id}>
//               <Link href={url}>{text}</Link>
//             </li>
//           );
//         })}
//       </ul>
//     </div>
//   );
// };

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
