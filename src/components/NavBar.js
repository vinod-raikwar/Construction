import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../assets/css/Style.css";
import "../assets/css/Global.css";
import { BsSearch,BsCart3 } from "react-icons/bs";

function NavBar() {

  // const=handleSearch
  // onClick={handleSearch}
  return (
    <>
      <Navbar bg="" expand="lg">
        <Container fluid className="gx-0">
          <Navbar.Brand to="#home">
            <div className="logo-link ">
              <Link to="#/" className="position-relative">
                <h3>Logo</h3>
              </Link>
            </div>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className=" my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">About</Nav.Link>
              <Nav.Link href="#action1">Portfolio</Nav.Link>
              <Nav.Link href="#action2">Blog</Nav.Link>
              <Nav.Link href="#action1">Shop</Nav.Link>
              <Nav.Link href="#action2">Contact</Nav.Link>
            </Nav>
            <Form className="d-flex search-icon">
              {/* <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              /> */}
              <span ><BsSearch/></span>
              <span><BsCart3/></span>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
