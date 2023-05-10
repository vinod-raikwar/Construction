import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../assets/css/Style.css";
import "../assets/css/Global.css";
import image_1 from "../assets/images/image-1.webp";
import image_2 from "../assets/images/image-2.webp";
import { MdSquare } from "react-icons/md";

function About() {
  return (
    <>
      <section>
        <div className="mrt50">
          <Container>
            <div className="pdb50 pdt50">
              <Row>
                <Col xs={12} md={6} className="align-self-center">
                  <div className="float-image">
                    <div className="image-1 pdtb20">
                      <img className="img-fluid w-100" src={image_1} alt="" />
                    </div>

                    <div className="image-2">
                      <img className="img-fluid vertical-flow" src={image_2} alt="" />
                    </div>
                  </div>
                </Col>
                <Col xs={12} md={6} className="align-self-center">
                  <div className="pdl50">
                    <div className="main-heading">
                      <span className="span-text ">
                        &nbsp;&nbsp;Construction
                      </span>
                      <h2>This is about blog</h2>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Labore veniam vitae tempore! Aut dicta ab nobis nemo
                        voluptates id harum.
                      </p>
                    </div>
                    <div>
                      <Row>
                        <Col xs={12} sm={6}>
                          <div className="company-service pt-1">
                            <span>
                              <MdSquare />
                            </span>
                            <Link to="#/">Lorem ipsum dolor.</Link>
                          </div>
                        </Col>
                        <Col xs={12} sm={6}>
                          <div className="company-service pt-1">
                            <span>
                              <MdSquare />
                            </span>
                            <Link to="#/">Lorem ipsum dolor.</Link>
                          </div>
                        </Col>
                        <Col xs={12} sm={6}>
                          <div className="company-service pt-1">
                            <span>
                              <MdSquare />
                            </span>
                            <Link to="#/">Lorem ipsum dolor.</Link>
                          </div>
                        </Col>
                        <Col xs={12} sm={6}>
                          <div className="company-service pt-1">
                            <span>
                              <MdSquare />
                            </span>
                            <Link to="#/">Lorem ipsum dolor.</Link>
                          </div>
                        </Col>
                      </Row>
                    </div>

                    <div className="link-btn d-flex">
                      <div className="link orenge-btn">
                        <Link to="#/">Read More</Link>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
      </section>
    </>
  );
}

export default About;
