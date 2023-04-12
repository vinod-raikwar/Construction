import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../assets/css/Style.css";
import "../assets/css/Global.css";
import image_1 from "../assets/images/image-1.webp";
import image_2 from "../assets/images/image-2.webp";
import { FaCircle } from "react-icons/fa";

function About() {
  return (
    <>
      <section>
        <div className="mrt100 pdb100">
          <Container>
            <Row>
              <Col xs={12} md={6}>
                <div className="float-image">
                  <div className="image-1">
                    <img src={image_1} alt="" />
                  </div>

                  <div className="image-2">
                    <img className="vertical-flow" src={image_2} alt="" />
                  </div>
                </div>
              </Col>
              <Col xs={12} md={6}>
                <div className="main-heading pdl50">
                  <h6>Lorem, ipsum dolor.</h6>
                  <h2>Lorem ipsum dolor sit amet consectetur.</h2>

                  <div className="company-service">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore veniam vitae tempore! Aut dicta ab nobis nemo voluptates id harum.
                    </p>
                    <Row>
                      <Col xs={12} sm={6}>
                        <div className="pt-3">
                        <span>
                          <FaCircle />
                        </span>
                        <Link to="#/">Lorem, ipsum dolor.</Link>
                        </div>
                      </Col>
                      <Col xs={12} sm={6}>
                      <div className="pt-3">
                        <span>
                          <FaCircle/>
                        </span>
                        <Link to="#/">Lorem, ipsum dolor.</Link>
                      </div>
                      </Col>
                      <Col xs={12} sm={6}>
                      <div className="pt-3">
                        <span>
                          <FaCircle />
                        </span>
                        <Link to="#/">Lorem, ipsum dolor.</Link>
                      </div>
                      </Col>
                      <Col xs={12} sm={6}>
                      <div className="pt-3">
                        <span>
                          <FaCircle />
                        </span>
                        <Link to="#/">Lorem, ipsum dolor.</Link>
                      </div>
                      </Col>
                    </Row>

                    <div className="link-btn">
                      <Link className="link orenge-btn" to="#/">
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
    </>
  );
}

export default About;
