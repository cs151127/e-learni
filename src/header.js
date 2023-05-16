import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Εισαγωγή της Link από το react-router-dom

function Header() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="/">Ηλεκτρονική Μάθηση</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/">Αρχική</Nav.Link> {/* Χρήση της Link για τη σύνδεση με τη σελίδα αρχικής */}
          <Nav.Link as={Link} to="/high-school-lessons">Μαθήματα</Nav.Link> {/* Χρήση της Link για τη σύνδεση με τη σελίδα μαθημάτων λυκείου */}
          <Nav.Link href="/projects">Εργασίες</Nav.Link>
          <Nav.Link href="/login">Εγγραφή</Nav.Link>
          <Nav.Link href="/conect">Σύνδεση</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
