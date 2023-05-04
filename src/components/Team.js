import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../assets/css/Style.css";
import "../assets/css/Global.css";
import t_1 from "../assets/images/team/t-1.jpg";
import t_2 from "../assets/images/team/t-2.jpg";
import t_3 from "../assets/images/team/t-3.jpg";
import t_4 from "../assets/images/team/t-4.jpg";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

function Team() {
  return (
    <>
      <section>
        <div className="mrt50">
          {/* <div className="bg-img-css team-bg-img"> */}
          <Container>
            <div className="our-team">
              <div className="heading-align">
                <div className="main-heading team-title ">
                  <span className="span-text">&nbsp;&nbsp;Our team</span>
                  <h2>Team Members</h2>
                </div>
              </div>
              <div className="mt-4 d-flex justify-content-center">
                <Row>
                  <Col xs={12} sm={6} md={3}>
                    <div
                      data-aos="flip-left"
                      data-aos-easing="ease-out-cubic"
                      data-aos-duration="2000"
                    >
                      <div className="team-content text-center box-shadow">
                        <div className="team-img">
                          <img className="img-fluid" src={t_1} alt="" />
                          <div className="team-icon social-icon">
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
                        <div className="team-name">
                          <h4>
                            <Link to="#/">Khushboo</Link>
                          </h4>
                          <p>
                            <b>Stock Market</b>
                          </p>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col xs={12} sm={6} md={3}>
                    <div
                      data-aos="flip-left"
                      data-aos-easing="ease-out-cubic"
                      data-aos-duration="2000"
                    >
                      <div className="team-content text-center box-shadow">
                        <div className="team-img">
                          <img className="img-fluid" src={t_2} alt="" />
                          <div className="team-icon social-icon">
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
                        <div className="team-name">
                          <h4>
                            <Link to="#/">Robert Anderson</Link>
                          </h4>
                          <p>
                            <b>Stock Market</b>
                          </p>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col xs={12} sm={6} md={3}>
                    <div
                      data-aos="flip-left"
                      data-aos-easing="ease-out-cubic"
                      data-aos-duration="2000"
                    >
                      <div className="team-content text-center box-shadow">
                        <div className="team-img">
                          <img className="img-fluid" src={t_3} alt="" />
                          <div className="team-icon social-icon">
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
                        <div className="team-name">
                          <h4>
                            <Link to="#/">josh brown</Link>
                          </h4>
                          <p>
                            <b>creative head</b>
                          </p>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col xs={12} sm={6} md={3}>
                    <div
                      data-aos="flip-left"
                      data-aos-easing="ease-out-cubic"
                      data-aos-duration="2000"
                    >
                      <div className="team-content text-center box-shadow">
                        <div className="team-img">
                          <img className="img-fluid" src={t_4} alt="" />

                          <div className="team-icon social-icon">
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
                        <div className="team-name">
                          <h4>
                            <Link to="#/">John Smith</Link>
                          </h4>
                          <p>
                            <b>Work Manager</b>
                          </p>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <div className="link-btn">
                    <div className="link orenge-btn mrt50">
                      <Link to="#/">Read More</Link>
                    </div>
                  </div>
                </Row>
              </div>
            </div>
          </Container>
          {/* </div> */}
        </div>
      </section>
    </>
  );
}

export default Team;
