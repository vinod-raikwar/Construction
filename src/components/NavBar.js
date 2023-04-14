import React from "react";
import {Container,Navbar,Nav,Form } from "react-bootstrap";
import { Link,NavLink } from "react-router-dom";
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
          <Navbar.Brand to="/">
            <div className="logo-link ">
              <Link to="/" className="position-relative">
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
              <NavLink to="/">Home</NavLink>
              <NavLink to="/aboutus">About</NavLink>
              <NavLink to="/portfolio">Portfolio</NavLink>
              <NavLink to="blog">Blog</NavLink>
              <NavLink to="shop">Shop</NavLink>
              <NavLink to="contact">Contact</NavLink>
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
