import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../assets/css/Style.css";
import "../assets/css/Global.css";
import { MdAccessTime, MdAlternateEmail, MdCopyright } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";
import { BsTelephone } from "react-icons/bs";
import map from "../assets/images/footer-map.png";

import cs from "../assets/images/footer/customer-service.png";
import hook from "../assets/images/footer/hook.png";
import workers from "../assets/images/footer/workers.png";
import bp from "../assets/images/footer/blueprint.png";

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
        <div className="ftr-bg mrt100 pdt50 pdb50">
          <Container>
            <Row>
              <Col xs={12} sm={6} md={3}>
                <div className="ftr-content-title mrt50 pdb50">
                  <h4>Lorem, Tech</h4>
                  <div className="ftr-content pe-3">
                    <p>
                      Get Logo and discover streamlined website construction
                      today! Powerful elements, tons of flexible layouts and
                      more inside.
                    </p>
                    <p>
                      <span>
                        <MdAccessTime />
                      </span>
                      <Link to="#/">
                        Mon-Sat 8:00-17:30, <br />{" "}
                        <span style={{ marginLeft: "35px" }}></span>{" "}
                        Sunday-CLOSED
                      </Link>
                    </p>
                  </div>
                </div>
              </Col>
              <Col xs={12} sm={6} md={3}>
                <div className="ftr-content-title mrt50">
                  <h4>Our Services</h4>
                  <div className="ftr-content">
                    <p>
                      <img src={cs} alt="" />
                      <Link to="#/">Lorem ipsum dolor sit.</Link>
                    </p>
                    <p>
                      <img src={hook} alt="" />
                      <Link to="#/">Lorem ipsum dolor sit.</Link>
                    </p>
                    <p>
                      <img src={workers} alt="" />
                      <Link to="#/">Lorem ipsum dolor sit.</Link>
                    </p>
                    <p>
                      <img src={bp} alt="" />
                      <Link to="#/">Lorem ipsum dolor sit.</Link>
                    </p>
                  </div>
                </div>
              </Col>
              <Col xs={12} sm={6} md={3}>
                <div className="ftr-content-title mrt50">
                  <h4>Office in Indore </h4>
                  <div className="ftr-content">
                    <p>
                      <span>
                        <SlLocationPin />
                      </span>
                      <Link to="#/">
                        7300-7398 Colonial Rd, <br />{" "}
                        <span style={{ marginLeft: "35px" }}></span> Indore, IND
                        11209
                      </Link>
                    </p>
                    <p>
                      <span>
                        <BsTelephone />
                      </span>
                      <Link to="#/">+ (123) 1234-567-8901</Link> <br />{" "}
                      <span style={{ marginLeft: "19px" }}></span>
                      <Link to="#/">+ (123) 1234-567-8902</Link>
                    </p>
                    <p>
                      <span>
                        <MdAlternateEmail />
                      </span>
                      <Link to="#/">
                        example1@test.com <br />{" "}
                        <span style={{ marginLeft: "34px" }}></span>{" "}
                        example2@test.com
                      </Link>
                    </p>
                  </div>
                </div>
              </Col>
              <Col xs={12} sm={6} md={3}>
                <div className="ftr-content-title mrt50">
                  <h4>Our Location </h4>
                  <div className="ftr-content">
                    <Link to="#/">
                      <img className="img-fluid" src={map} alt="" />
                    </Link>
                  </div>
                </div>
              </Col>
            </Row>
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
                  <div className="logo-link">
                    <h3>
                      <Link to="/">Logo</Link>
                    </h3>
                  </div>
                </div>
              </Col>
              <Col xs={12} sm={6}>
                <div className="copy-right">
                  <p>
                    <span>
                      <MdCopyright />
                    </span>
                    2023 &nbsp;<Link to="#/">Qode Interactive</Link>, All Rights
                    Reserved
                  </p>
                </div>
              </Col>
              <Col xs={12} sm={3}>
                <div className="btm-ftr-right">
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
