import React from "react";
import { Container, Row, Col, Accordion } from "react-bootstrap";
import pp from "../assets/images/project-planning.jpg";
import "../assets/css/Style.css";
import "../assets/css/Global.css";

function Features() {
  return (
    <>
      <section>
        <div className="mrt100">
          <Container>
            <Row>
              <Col xs={12} sm={6}>
                <div className="project-planning">
                  <h6>Renovation company</h6>
                  <h1>Why people choice us?</h1>
                  <Accordion>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>
                        <h5>How much does a home remodeling cost?</h5>{" "}
                      </Accordion.Header>
                      <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>         
                        <h5>How much does a home Building cost?</h5>{" "}
                      </Accordion.Header>
                      <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>                  
                        <h5>Why do roofing estimates vary so widely?</h5>{" "}
                      </Accordion.Header>
                      <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </Accordion.Body>
                      <Accordion.Item eventKey="1">
                      <Accordion.Header>                  
                        <h5>Why do roofing estimates vary so widely?</h5>{" "}
                      </Accordion.Header>
                      <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>                  
                        <h5>Why do roofing estimates vary so widely?</h5>{" "}
                      </Accordion.Header>
                      <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </Accordion.Body>
                    </Accordion.Item>
                    </Accordion.Item>
                  </Accordion>
                </div>
              </Col>
              <Col xs={12} sm={6}>
                <div className="project-planning">
                  <img className="img-fluid" src={pp} alt="" />
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
