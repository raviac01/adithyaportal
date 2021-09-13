import { Container } from "react-bootstrap";
import Navbar from "./Navbar";
import styled from "styled-components";

export default function Layout({ children, className }) {
  return (
    // <Container fluid>
    <StyledContiner>
      <Navbar />

      <div className={`page-wrapper ${className}`}>{children}</div>

      <footer className="page-footer">
        <div>
          <a href="#">Jee preparation</a>
        </div>
      </footer>
    </StyledContiner>
  );
}

const StyledContiner = styled.div`
  height: 90vh;
  margin: 0px;
`;
