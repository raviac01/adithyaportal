import { Navbar, Nav } from "react-bootstrap";

export default function BlogNavbar() {
  return (
    <Navbar
      className="fj-navbar fj-nav-base"
      bg="transparent"
      expand="lg"
      sticky="top"
    >
      <Navbar.Brand className="fj-navbar-brand">
        <Nav.Link className="fj-navbar-item fj-navbar-link" href="/">
          Adithya&apos;s Blog
        </Nav.Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link className="fj-navbar-item fj-navbar-link" href="/">
            Home
          </Nav.Link>
          <Nav.Link className="fj-navbar-item fj-navbar-link" href="/notes">
            Notes
          </Nav.Link>
          <Nav.Link className="fj-navbar-item fj-navbar-link" href="/blog">
            Blog
          </Nav.Link>
          <Nav.Link className="fj-navbar-item fj-navbar-link" href="/youtube">
            Music
          </Nav.Link>
          <Nav.Link className="fj-navbar-item fj-navbar-link" href="/learn">
            Learn
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
