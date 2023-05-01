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
        <div className="bg-img-css team-bg-img">
          <Container>
            <div className="our-team pdt50">
              <div className="d-flex justify-content-center">
                <div className="main-heading team-title ">
                  <span className="span-text">&nbsp;&nbsp;Our team</span>
                  <h2>Our Experiance Team Members</h2>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Laudantium debitis porro officiis <br />
                    ratione veritatis Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Numquam <br />
                    excepturi officiis perferendis nisi deserunt alias culpa
                    adipisci modi expedita reiciendis?.
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <Row>
                  <Col xs={12} sm={6} md={3}>
                    <div
                      data-aos="flip-left"
                      data-aos-easing="ease-out-cubic"
                      data-aos-duration="2000"
                    >
                      <div className="team-content text-center">
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
                          <h3>
                            <Link to="#/">Khushboo</Link>
                          </h3>
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
                      <div className="team-content text-center">
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
                          <h3>
                            <Link to="#/">Robert Anderson</Link>
                          </h3>
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
                      <div className="team-content text-center ">
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
                          <h3>
                            <Link to="#/">josh brown</Link>
                          </h3>
                          <p>
                            <b>Creative Head</b>
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
                      <div className="team-content text-center">
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
                          <h3>
                            <Link to="#/">John Smith</Link>
                          </h3>
                          <p>
                            <b>Work Manager</b>
                          </p>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
              <div className="link-btn d-flex justify-content-center">
                <div className="link orenge-btn">
                  <Link to="#/">Read More</Link>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </section>
    </>
  );
}

export default Team;
