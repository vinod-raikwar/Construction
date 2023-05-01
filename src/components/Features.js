import React from "react";
import { Container, Row, Col, Accordion } from "react-bootstrap";
import p1 from "../assets/images/project-planning.jpg";
import p2 from "../assets/images/feature-img.jpg";
import "../assets/css/Style.css";
import "../assets/css/Global.css";
import { Link } from "react-router-dom";

function Features() {
  return (
    <>
      <section>
        <div className="mrt100">
          <Container>
            <Row>
              <Col xs={12} sm={6}>
                <div className="project-planning">
                  <div className="main-heading ps-2">
                    <span className="span-text ">
                      &nbsp;&nbsp;Construction company
                    </span>
                    <h2>Why people choice us?</h2>
                  </div>

                  <Accordion>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>
                        <h6>How much does a home remodeling cost?</h6>{" "}
                      </Accordion.Header>
                      <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="1">
                      <Accordion.Header>
                        <h6>How much does a home Building cost?</h6>{" "}
                      </Accordion.Header>
                      <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="2">
                      <Accordion.Header>
                        <h6>Why do roofing estimates vary so widely?</h6>{" "}
                      </Accordion.Header>
                      <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="3">
                      <Accordion.Header>
                        <h6>Why do roofing estimates vary so widely?</h6>{" "}
                      </Accordion.Header>
                      <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="4">
                      <Accordion.Header>
                        <h6>Why do roofing estimates vary so widely?</h6>{" "}
                      </Accordion.Header>
                      <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                  <div className="link-btn d-flex">
                    <div className="link orenge-btn">
                      <Link to="#/">Read More</Link>
                    </div>
                  </div>
                </div>
              </Col>
              <Col xs={12} sm={6}>
                <div className="feature-img pd-3">
                  <div className="feature-img-1">
                    <img className="img-fluid" src={p1} alt="" />
                  </div>
                  <div className="feature-img-2">
                    <img className="img-fluid" src={p2} alt="" />
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

export default Features;
