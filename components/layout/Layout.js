import { Container } from "react-bootstrap";
import Navbar from "./Navbar";

export default function Layout({ children, className }) {
  return (
    <Container fluid>
      <Navbar />

      <div className={`page-wrapper ${className}`} >{children}</div>

      <footer className="page-footer">
        <div>
          <a href="#">Jee preparation</a>
        </div>
      </footer>
    </Container>
  );
}
