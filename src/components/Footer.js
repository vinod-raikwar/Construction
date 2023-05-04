import React from "react";
import { Container, Row, Col, Navbar, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../assets/css/Style.css";
import "../assets/css/Global.css";
import {
  MdAccessTimeFilled,
  MdMailOutline,
  MdCopyright,
  MdOutlineKeyboardDoubleArrowRight,
} from "react-icons/md";
import { ImLocation2 } from "react-icons/im";
import { FaPhoneAlt } from "react-icons/fa";
// import map from "../assets/images/footer-map.png";

import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

function Footer() {
  return (
    <>
      <section>
        {/* ********Footer Start********  */}
        <div className="ftr-bg mrt50">
          <Container>
            <div className="pdt50 pdb50">
              <Row>
                <Col xs={12} sm={6} md={3}>
                  <div className="">
                    <h4>
                      <i>Construction..</i>
                    </h4>
                    <div className="ftr-content mt-4 pe-1">
                      <p>
                        Get Logo and discover streamlined website construction
                        today! Powerful elements, tons of flexible layouts and
                        more inside.
                      </p>
                    </div>
                    <div className="ftr-content-title mt-4">
                      <h4>Newsletter</h4>
                      <div className="mt-4 pe-5">
                        <Form className="d-flex">
                          <Form.Control
                            type="search"
                            placeholder="Email..."
                            aria-label="Email"
                          />
                          <Button type="search" className="btn orenge-btn">
                            <MdMailOutline />
                          </Button>
                        </Form>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col xs={12} sm={6} md={3}>
                  <div className="ftr-content-title">
                    <h4>Our Services</h4>
                    <div className="ftr-content mt-4">
                      <p>
                        <span className="arrow-btn">
                          <MdOutlineKeyboardDoubleArrowRight />
                        </span>
                        <Link to="#/">Apartment Design</Link>
                      </p>
                      <p>
                        <span className="arrow-btn">
                          <MdOutlineKeyboardDoubleArrowRight />
                        </span>
                        <Link to="#/">Expert Mechanical</Link>
                      </p>
                      <p>
                        <span className="arrow-btn">
                          <MdOutlineKeyboardDoubleArrowRight />
                        </span>
                        <Link to="#/">House Painting</Link>
                      </p>
                      <p>
                        <span className="arrow-btn">
                          <MdOutlineKeyboardDoubleArrowRight />
                        </span>
                        <Link to="#/">Repaire Welding</Link>
                      </p>
                      <p>
                        <span className="arrow-btn">
                          <MdOutlineKeyboardDoubleArrowRight />
                        </span>
                        <Link to="#/">Construction</Link>
                      </p>
                    </div>
                  </div>
                </Col>
                <Col xs={12} sm={6} md={3}>
                  <div className="ftr-content-title">
                    <h4>useful links</h4>
                    <div className="ftr-content mt-4">
                      <p>
                        <span className="arrow-btn">
                          <MdOutlineKeyboardDoubleArrowRight />
                        </span>
                        <Link to="#/">Services</Link>
                      </p>
                      <p>
                        <span className="arrow-btn">
                          <MdOutlineKeyboardDoubleArrowRight />
                        </span>
                        <Link to="#/">Team</Link>
                      </p>
                      <p>
                        <span className="arrow-btn">
                          <MdOutlineKeyboardDoubleArrowRight />
                        </span>
                        <Link to="#/">Privacy & Policy</Link>
                      </p>
                      <p>
                        <span className="arrow-btn">
                          <MdOutlineKeyboardDoubleArrowRight />
                        </span>
                        <Link to="#/">Term & Condition</Link>
                      </p>
                      <p>
                        <span className="arrow-btn">
                          <MdOutlineKeyboardDoubleArrowRight />
                        </span>
                        <Link to="#/">Contact Us</Link>
                      </p>
                    </div>
                  </div>
                </Col>
                <Col xs={12} sm={6} md={3}>
                  <div className="ftr-content-title">
                    <h4>Office in Indore</h4>
                    <div className="ftr-content mt-4">
                      <div className="d-flex">
                        <p>
                          <span>
                            <ImLocation2 />
                          </span>
                        </p>
                        <p>
                          <Link to="#/">
                            Plot no. 14, PU-3, Scheme no. 53, Bhamori, Opposite
                            Orbit Mall, AB Rd, Behind Pakiza Mall, LIG Colony,
                            Indore, Madhya Pradesh 452001
                          </Link>
                        </p>
                      </div>
                      <div className="d-flex mt-2">
                        <p>
                          <span>
                            <FaPhoneAlt />
                          </span>
                        </p>
                        <p>
                          <Link to="#/">+ (123) 1234-567-8901</Link>
                        </p>
                      </div>

                      <div className="d-flex mt-2">
                        <p>
                          <span>
                            <MdMailOutline />
                          </span>
                        </p>
                        <p>
                          <Link to="#/">example1@test.com</Link>
                        </p>
                      </div>

                      <div className="d-flex mt-2">
                        <p>
                          <span>
                            <MdAccessTimeFilled />
                          </span>
                        </p>
                        <p>
                          <Link to="#/">
                            Mon-Sat 8:00-17:30, <br />
                            Sunday-CLOSED
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
        {/* ********Footer End********  */}

        {/* ********Footer Bottom Start********  */}
        <div className="ftr-btm ftr-bg ">
          <Container>
            <div className="">
              <Row>
                <Col xs={12} sm={3}>
                  <div className="btm-ftr-left">
                    <Navbar.Brand href="/home">
                      <div className="logo-link">
                        <h3>
                          {/* <img
                          src={logo}
                          width="200"
                          height="50"
                          alt="React Bootstrap logo"
                        /> */}
                          <i>Construction..</i>
                        </h3>
                      </div>
                    </Navbar.Brand>
                  </div>
                </Col>
                <Col xs={12} sm={6}>
                  <div className="copy-right">
                    <p>
                      <span>
                        <MdCopyright />
                      </span>
                      2023 &nbsp;<Link to="#/">Qode Interactive</Link>, All
                      Rights Reserved
                    </p>
                  </div>
                </Col>
                <Col xs={12} sm={3}>
                  <div className="btm-ftr-right d-flex justify-content-end">
                    <div className="social-icon d-flex">
                      <Link to="#/">
                        {" "}
                        <FaTwitter />
                      </Link>
                      <Link to="#/">
                        {" "}
                        <FaFacebookF />
                      </Link>
                      <Link to="#/">
                        {" "}
                        <FaInstagram />
                      </Link>
                      <Link to="#/">
                        {" "}
                        <FaLinkedinIn />
                      </Link>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
        {/* ********Footer Bottom End********  */}
      </section>
    </>
  );
}

export default Footer;
