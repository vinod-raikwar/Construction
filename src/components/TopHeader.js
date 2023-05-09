import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../assets/css/Style.css";
import "../assets/css/Global.css";
import "../assets/css/Responsive.css";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineEmail, MdAccessTime } from "react-icons/md";
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
            <Col xs={12}  md={10} lg={9}>
              <div >
                <Row>
                  <Col xs={12} md={3} className="p-0">
                    <div className="top-header-left">
                      <p>
                        <span>
                          <FiPhoneCall />
                        </span>
                        <Link to="#/">+(123) 123-567-8901</Link>
                      </p>
                    </div>
                  </Col>
                  <Col xs={12} md={3} className="p-0">
                    <div className="top-header-left">
                      <p>
                        <span>
                          <MdOutlineEmail />
                        </span>
                        <Link to="#/"> Example@test.com</Link>
                      </p>
                    </div>
                  </Col>
                  <Col xs={12} md={6} className="p-0">
                    <div className="top-header-left">
                      <p>
                        <span>
                          <MdAccessTime />
                        </span>
                        <Link to="#/">
                          Mon-Sat 08:00AM-17:30PM, Sunday-CLOSED
                        </Link>
                      </p>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col xs={12} md={2}lg={3} className="p-0">
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
