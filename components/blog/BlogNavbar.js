import { Navbar, Nav, NavDropdown, Container, NavItem, NavLink } from "react-bootstrap";
import classes from "./blog.module.css";
import { jeeSyllabus } from "data/data";

export default function BlogNavBar() {
  return (
    <Navbar
      bg="primary"
      variant="dark"
      expand="lg"
      className="fj-navbar fj-nav-base"
      sticky="top"
    >
      <Container>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {jeeSyllabus.map((syllabus) => (
              <NavDropdown
                className="fj-navbar-item fj-navbar-link"
                title={`${syllabus.subject}`}
                id={syllabus.id}
                key={syllabus.id}
              >
                {syllabus.topics.map((subtopic) => (
                  <NavDropdown.Item key={subtopic.id} id={subtopic.id} href={`/blog/${syllabus.subject}/${subtopic.name}`}>{subtopic.name}</NavDropdown.Item>
                ))}
              </NavDropdown>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
