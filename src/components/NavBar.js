import React from "react";
import { Container, Navbar, Nav, Form } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import "../assets/css/Style.css";
import "../assets/css/Global.css";
import { BsSearch } from "react-icons/bs";
// import { AiOutlineClose } from "react-icons/ai";

function NavBar() {
  return (
    <>
      <Navbar bg="" expand="lg" className="py-1">
        <Container fluid className="px-0">
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
            <div className="d-flex nav-icon">
              <Form  className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search..."
                  aria-label="Search"  
                />
                <span className="search">
                  <BsSearch />
                </span>
              </Form>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;

//  <span className="close">
//  <AiOutlineClose />
//  </span>
//    <span className="cart-icon">
//     <BsCart3 />
//   </span>
