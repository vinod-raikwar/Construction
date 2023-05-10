import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
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
                <Col xs={12} md={6} lg={3}>
                  <div className="ftr-content-title pb-4 ">
                    <div className="logo pt-4 mt-2"></div>
                    <div className="ftr-content mt-4 pe-1">
                      <p>
                        Get Logo and discover streamlined website construction
                        today! Powerful elements, tons of flexible layouts and
                        more inside.
                      </p>
                    </div>
                    <div className="ftr-content-title mt-4 pe-3">
                      <h4>Newsletter</h4>
                      <div className="mt-4">
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
                <Col xs={12} md={6} lg={3}>
                  <div className="ftr-content-title pb-4 ">
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
                <Col xs={12} md={6} lg={3}>
                  <div className="ftr-content-title pb-4 ">
                    <h4>useful links</h4>
                    <div className="ftr-content mt-4">
                      <p>
                        <span className="arrow-btn">
                          <MdOutlineKeyboardDoubleArrowRight />
                        </span>
                        <Link to="#/">About</Link>
                      </p>
                      <p>
                        <span className="arrow-btn">
                          <MdOutlineKeyboardDoubleArrowRight />
                        </span>
                        <Link to="#/">Portfolio</Link>
                      </p>
                      <p>
                        <span className="arrow-btn">
                          <MdOutlineKeyboardDoubleArrowRight />
                        </span>
                        <Link to="#/">Blog</Link>
                      </p>
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
                        <Link to="#/">Contact Us</Link>
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
                    </div>
                  </div>
                </Col>
                <Col xs={12} md={6} lg={3}>
                  <div className="ftr-content-title pb-4 ">
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
                          Plot no.14 AirenHeight, Opposite Orbit Mall, AB Rd, Indore, Madhya Pradesh 452001
                          </Link>
                        </p>
                      </div>
                      <div className="d-flex mt-2">
                        <p>
                          <span className="p-icn-s">
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
                            Mon-Sat 08:00AM-17:30PM, <br />
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
            <div className="vertical-middle">
              <Row>
                <Col xs={12} sm={6} >
                  <div className="btm-ftr-left">
                      <p className="copy-right">
                        <span>
                          <MdCopyright />
                        </span>
                        2023 &nbsp;<Link to="#/">Qode Interactive</Link>, All
                        Rights Reserved
                      </p>
                  </div>
                </Col>
                <Col xs={12} sm={6}>
                  <div className="btm-ftr-right ">
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
