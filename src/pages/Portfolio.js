import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import p_1 from "../assets/images/portfolio/p-1.webp";
import p_2 from "../assets/images/portfolio/p-2.webp";
import p_3 from "../assets/images/portfolio/p-3.webp";
import p_4 from "../assets/images/portfolio/p-4.webp";
import p_5 from "../assets/images/portfolio/p-5.webp";
import p_6 from "../assets/images/portfolio/p-6.webp";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

function Portfolio() {
  return (
    <>
      <section>
        <div className="bg-banner-image">
          <Container>
            <Row>
              <Col xs={12} md={5}>
                <div className="main-heading ">
                  <span className="span-text">&nbsp;&nbsp;construction</span>
                  <h1>Portfolio</h1>
                  <p className="wht-clr">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Laudantium debitis porro officiis ratione veritatis.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="mrt50">
          <Container>
            <Col xs={12}>
              <div className=""></div>
            </Col>
            <Row>
              <Col xs={12} sm={6} md={4}>
                <div className="card-img pdtb15">
                  <Link to="#/">
                    <img className="img-fluid" src={p_1} alt="" />
                  </Link>

                  <div className="img-hover-content d-flex">
                    <div className="pdtb20 w-100">
                      <h3>Bathroom Modeling</h3>
                      <span>
                        <Link to="#/">Building,</Link>
                        <Link to="#/">Renovation</Link>
                      </span>
                    </div>
                    <div className="social-icon ">
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
                </div>
              </Col>
              <Col xs={12} sm={6} md={4}>
                <div className="card-img pdtb15">
                  <Link to="#/">
                    <img className="img-fluid" src={p_2} alt="" />
                  </Link>

                  <div className="img-hover-content d-flex">
                    <div className="pdtb20 w-100">
                      <h3>Bathroom Construction</h3>
                      <span>
                        <Link to="#/">Building,</Link>
                      </span>
                    </div>
                    <div className="social-icon ">
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
                </div>
              </Col>
              <Col xs={12} sm={6} md={4}>
                <div className="card-img pdtb15">
                  <Link to="#/">
                    <img className="img-fluid" src={p_3} alt="" />
                  </Link>

                  <div className="img-hover-content d-flex">
                    <div className="pdtb20 w-100">
                      <h3>Park Offices</h3>
                      <span>
                        <Link to="#/">Building,</Link>
                      </span>
                    </div>
                    <div className="social-icon ">
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
                </div>
              </Col>
              <Col xs={12} sm={6} md={4}>
                <div className="card-img pdtb15">
                  <Link to="#/">
                    <img className="img-fluid" src={p_4} alt="" />
                  </Link>

                  <div className="img-hover-content d-flex">
                    <div className="pdtb20 w-100">
                      <h3>Interior Construction</h3>
                      <span>
                        <Link to="#/">Building,</Link>
                        <Link to="#/">Renovation</Link>
                      </span>
                    </div>
                    <div className="social-icon ">
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
                </div>
              </Col>
              <Col xs={12} sm={6} md={4}>
                <div className="card-img pdtb15">
                  <Link to="#/">
                    <img className="img-fluid" src={p_5} alt="" />
                  </Link>

                  <div className="img-hover-content d-flex">
                    <div className="pdtb20 w-100">
                      <h3>Roofing Construction</h3>
                      <span>
                        <Link to="#/">Building,</Link>
                      </span>
                    </div>
                    <div className="social-icon ">
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
                </div>
              </Col>
              <Col xs={12} sm={6} md={4}>
                <div className="card-img pdtb15">
                  <Link to="#/">
                    <img className="img-fluid" src={p_6} alt="" />
                  </Link>

                  <div className="img-hover-content d-flex">
                    <div className="pdtb20 w-100">
                      <h3>Road Construction</h3>
                      <span>
                        <Link to="#/">Building,</Link>
                      </span>
                    </div>
                    <div className="social-icon ">
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
                </div>
              </Col>
            </Row>
            <div className="link-btn d-flex justify-content-start">
              <div className="link orenge-btn">
                <Link to="#/">View More</Link>
              </div>
            </div>
          </Container>
        </div>
      </section>
    </>
  );
}

export default Portfolio;
