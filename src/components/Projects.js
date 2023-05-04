import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../assets/css/Style.css";
import "../assets/css/Global.css";
import p1 from "../assets/images/projects/projects-1.jpg";
import p2 from "../assets/images/projects/projects-2.jpg";
import p3 from "../assets/images/projects/projects-3.jpg";
import p4 from "../assets/images/projects/projects-4.jpg";
import p5 from "../assets/images/projects/projects-5.jpg";
import p6 from "../assets/images/projects/projects-6.jpg";
import { MdOutlineArrowRight } from "react-icons/md";
function Projects() {
  return (
    <>
      <section>
        <div className="mrt50">
          <Container>
            <div className="heading-align">
              <div className="main-heading">
                <span className="span-text">&nbsp;&nbsp;our work</span>
                <h2>Explore Recent Projects</h2>
              </div>
            </div>
            <div className="mt-3">
              <Row>
                <Col xs={12} sm={6} md={4}>
                  <div className="project mrtb15">
                    <div className="project-img">
                      <Link to="#/">
                        <img className="img-fluid" src={p1} alt="" />
                      </Link>
                    </div>

                    <div className="project-content">
                      <span className="span-text">&nbsp;&nbsp;Interior</span>
                      <h3>MD Designs</h3>
                      <div className="arrow-btn">
                        <Link className="pt-button" to="#/">
                          <span className="pt-button-line-left"></span>
                          <span className="pt-button-text">Read More</span>
                          <span className="pt-button-line-right"></span>
                          <span className="svg-arrow">
                            <MdOutlineArrowRight />
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col xs={12} sm={6} md={4}>
                  <div className="project mrtb15">
                    <div className="project-img">
                      <Link to="#/">
                        <img className="img-fluid" src={p2} alt="" />
                      </Link>
                    </div>

                    <div className="project-content">
                      <span className="span-text">&nbsp;&nbsp;commercial</span>
                      <h3>Binoid architecture</h3>
                      <div className="arrow-btn">
                        <Link className="pt-button" to="#/">
                          <span className="pt-button-line-left"></span>
                          <span className="pt-button-text">Read More</span>
                          <span className="pt-button-line-right"></span>
                          <span className="svg-arrow">
                            <MdOutlineArrowRight />
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col xs={12} sm={6} md={4}>
                  <div className="project mrtb15">
                    <div className="project-img">
                      <Link to="#/">
                        <img className="img-fluid" src={p3} alt="" />
                      </Link>
                    </div>

                    <div className="project-content">
                      <span className="span-text">&nbsp;&nbsp;furniture</span>
                      <h3>museum architecture</h3>
                      <div className="arrow-btn">
                        <Link className="pt-button" to="#/">
                          <span className="pt-button-line-left"></span>
                          <span className="pt-button-text">Read More</span>
                          <span className="pt-button-line-right"></span>
                          <span className="svg-arrow">
                            <MdOutlineArrowRight />
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </Col>

                <Col xs={12} sm={6} md={4}>
                  <div className="project mrtb15">
                    <div className="project-img">
                      <Link to="#/">
                        <img className="img-fluid" src={p4} alt="" />
                      </Link>
                    </div>

                    <div className="project-content">
                      <span className="span-text">&nbsp;&nbsp;Designer</span>
                      <h3>Catalyst Architech</h3>
                      <div className="arrow-btn">
                        <Link className="pt-button" to="#/">
                          <span className="pt-button-line-left"></span>
                          <span className="pt-button-text">Read More</span>
                          <span className="pt-button-line-right"></span>
                          <span className="svg-arrow">
                            <MdOutlineArrowRight />
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col xs={12} sm={6} md={4}>
                  <div className="project mrtb15">
                    <div className="project-img">
                      <Link to="#/">
                        <img className="img-fluid" src={p5} alt="" />
                      </Link>
                    </div>

                    <div className="project-content">
                      <span className="span-text">&nbsp;&nbsp;commercial</span>
                      <h3>membrane structure</h3>
                      <div className="arrow-btn">
                        <Link className="pt-button" to="#/">
                          <span className="pt-button-line-left"></span>
                          <span className="pt-button-text">Read More</span>
                          <span className="pt-button-line-right"></span>
                          <span className="svg-arrow">
                            <MdOutlineArrowRight />
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col xs={12} sm={6} md={4}>
                  <div className="project mrtb15">
                    <div className="project-img">
                      <Link to="#/">
                        <img className="img-fluid" src={p6} alt="" />
                      </Link>
                    </div>

                    <div className="project-content">
                      <span className="span-text">&nbsp;&nbsp;Interior</span>
                      <h3>VR Design</h3>
                      <div className="arrow-btn">
                        <Link className="pt-button" to="#/">
                          <span className="pt-button-line-left"></span>
                          <span className="pt-button-text">Read More</span>
                          <span className="pt-button-line-right"></span>
                          <span className="svg-arrow">
                            <MdOutlineArrowRight />
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </Col>
                <div className="link-btn mt-5">
                  <div className="link orenge-btn">
                    <Link to="#/">View More</Link>
                  </div>
                </div>
              </Row>
            </div>
          </Container>
        </div>
      </section>
    </>
  );
}

export default Projects;
