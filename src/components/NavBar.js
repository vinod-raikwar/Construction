import React from "react";
import { Container, Row, Col, Navbar, Nav, Form } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import "../assets/css/Style.css";
import "../assets/css/Global.css";
import { BsSearch, BsCart3 } from "react-icons/bs";
// import { AiOutlineClose } from "react-icons/ai";

function NavBar() {
  return (
    <>
      <Navbar bg="" expand="lg" className="py-0">
        <Container fluid className="px-0">
          <Row>
            <Col xs={12} md={3} className="p-0">
              <div>
                <Navbar.Brand>
                  <div className="logo-link">
                    <h3>
                      <Link to="/">Logo</Link>
                    </h3>
                  </div>
                </Navbar.Brand>
              </div>
            </Col>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Col xs={12} md={9} className="p-0">
              <div className="d-flex">
                <Navbar.Collapse id="navbarScroll">
                  <Nav
                    className=" my-lg-0"
                    style={{ maxHeight: "100px" }}
                    navbarScroll>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/aboutus">About</NavLink>
                    <NavLink to="/portfolio">Portfolio</NavLink>
                    <NavLink to="blog">Blog</NavLink>
                    <NavLink to="shop">Shop</NavLink>
                    <NavLink to="contact">Contact</NavLink>
                  </Nav>
                </Navbar.Collapse>
                <Form>
                  <div className="d-flex nav-icon">
                    <span className="search">
                      <BsSearch />
                    </span>
                    <span className="cart-icon">
                      <BsCart3 />
                    </span>
                    <span className="hum-menu">
                      <span className="hum-line line-1"></span>
                      <span className="hum-line line-2"></span>
                      <span className="hum-line line-3"></span>
                    </span>
                  </div>
                </Form>
              </div>
            </Col>
            {/* <Col xs={12} md={3} className="p-0">
            </Col> */}
          </Row>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;

//  <span className="close">
//  <AiOutlineClose />
//  </span>
