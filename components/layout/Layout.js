import { Container } from "react-bootstrap";
import Navbar from "./Navbar";

export default function Layout({ children, className }) {
  return (
    <Container>
      <Navbar />

      <div className={`page-wrapper ${className}`}>{children}</div>

      <footer className="page-footer">
        <div>
          <a href="#">Blog</a>
        </div>
      </footer>
    </Container>
  );
}
