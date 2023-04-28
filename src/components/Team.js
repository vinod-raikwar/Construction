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
      <section className=" mrt100">
        <div className="team-bg-img ">
          <Container>
            <div className="d-flex justify-content-center pdt150">
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
            <div className="mrt50">
              <Row>
                <Col xs={12} sm={6} md={3}>
                  <div
                    data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000"
                  >
                    <div className="team-content">
                      <div className="team-img">
                        <img className="img-fluid" src={t_1} alt="" />
                      </div>
                      <div className="team-text">
                        <h3>Khushboo</h3>
                        <p>
                          <b>Stock Market</b>
                        </p>

                        <div className="social-icon">
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
                  </div>
                </Col>
                <Col xs={12} sm={6} md={3}>
                  <div
                    data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000"
                  >
                    <div className="team-content">
                      <div className="team-img">
                        <img className="img-fluid" src={t_2} alt="" />
                      </div>
                      <div className="team-text">
                        <h3>Khushboo</h3>
                        <p>
                          <b>Stock Market</b>
                        </p>

                        <div className="social-icon">
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
                  </div>
                </Col>
                <Col xs={12} sm={6} md={3}>
                  <div
                    data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000"
                  >
                    <div className="team-content">
                      <div className="team-img">
                        <img className="img-fluid" src={t_3} alt="" />
                      </div>
                      <div className="team-text">
                        <h3>Khushboo</h3>
                        <p>
                          <b>Stock Market</b>
                        </p>

                        <div className="social-icon">
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
                  </div>
                </Col>
                <Col xs={12} sm={6} md={3}>
                  <div
                    data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000"
                  >
                    <div className="team-content">
                      <div className="team-img">
                        <img className="img-fluid" src={t_4} alt="" />
                      </div>
                      <div className="team-text">
                        <h3>Khushboo</h3>
                        <p>
                          <b>Stock Market</b>
                        </p>

                        <div className="social-icon">
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
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
          {/* <div className="link-btn text-center">
            <Link className="link orenge-btn" to="#/">
              Read More
            </Link>
          </div> */}
        </div>
      </section>
    </>
  );
}

export default Team;
