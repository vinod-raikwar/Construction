import React from "react";
import { Container, Navbar, Nav, Form, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "../assets/css/Style.css";
import "../assets/css/Global.css";
import "../assets/css/Responsive.css";
import { BsSearch, BsCart3 } from "react-icons/bs";
// import logo from '../assets/images/logo.webp'

function NavBar() {
  return (
    <>
      {/* <Navbar bg="light" expand="lg">
        <Container fluid className="p-0">
          <Navbar.Brand href="#">
            <div className="logo-link">
              <h3>
                <i>Construction..</i>
              </h3>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
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
          </Navbar.Collapse>
          <Form className="p-0 d-flex f-reverse ">
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
        </Container>
      </Navbar> */}

      <Navbar bg="light" expand="lg">
        <Container fluid className="p-0">
          <Row className="m-0">
            <Col xs={12} lg={2} className="p-0">
              <Navbar.Brand href="#">
                <div className="logo-link">
                  <h3>
                    <i>Construction..</i>
                  </h3>
                </div>
              </Navbar.Brand>
            </Col>

            <Col xs={12} lg={10} className="p-0" >
              <Row className="reverse m-0" >
                <Col xs={12} lg={10} className="p-0">
                  <Navbar.Toggle aria-controls="navbarScroll" />
                  <Navbar.Collapse id="navbarScroll">
                    <Nav
                      className="me-auto my-2 my-lg-0"
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
                  </Navbar.Collapse>
                </Col>
                <Col xs={12} lg={2} className="p-0">
                  <Form className="p-0 search-box">
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
                </Col>
              </Row>
            </Col>
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
