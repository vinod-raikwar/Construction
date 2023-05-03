import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../assets/css/Style.css";
import "../assets/css/Global.css";
import { FiPhoneCall } from "react-icons/fi";
import { MdAlternateEmail, MdAccessTime } from "react-icons/md";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

function TopHeader() {
  return (
    <>
      <div className="top-header">
        <Container fluid>
          <Row>
            <Col xs={12} sm={6} md={9}>
              <div className="top-header-left">
                <p>
                  <span>
                    <FiPhoneCall />
                  </span>
                  <Link to="#/">+(123) 123-567-8901</Link>
                </p>
                <p>
                  <span>
                    <MdAlternateEmail />
                  </span>
                  <Link to="#/"> Example@test.com</Link>
                </p>
                <p>
                  <span>
                    <MdAccessTime />
                  </span>
                  <Link to="#/">Mon-Sat 8:00-17:30, Sunday-CLOSED</Link>
                </p>
              </div>
            </Col>
            <Col xs={12} sm={6} md={3}>
              <div className="top-header-right">
                <div className="social-icon d-flex justify-content-end">
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
        </Container>
      </div>
    </>
  );
}

export default TopHeader;
