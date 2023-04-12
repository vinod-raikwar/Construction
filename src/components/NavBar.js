import React from "react";
import { Container, } from "react-bootstrap";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../assets/css/Style.css";
import "../assets/css/Global.css";

function NavBar() {
  return (
    <>
      <Navbar bg="white" expand="lg">
        <Container fluid>
          <span className="nav-logo">
            <Link to="#">Wilmer</Link>
          </span>

          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll>
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">About</Nav.Link>
              <Nav.Link href="#action1">Portfolio</Nav.Link>
              <Nav.Link href="#action2">Blog</Nav.Link>
              <Nav.Link href="#action1">Shop</Nav.Link>
              <Nav.Link href="#action2">Contact</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
