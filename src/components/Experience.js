import React from "react";
import { Container, Row, Col, ProgressBar } from "react-bootstrap";
import exp_1 from "../assets/images/experience-1.jpg";
import "../assets/css/Style.css";
import "../assets/css/Global.css";

function Experience() {
  const now_1 = 95;
  const now_2 = 80;
  const now_3 = 70;
  const now_4 = 60;

  return (
    <>
      <section>
        <div className="mrt100 ">
          <Container>
            <div>
              <Row>
                <Col className="align-self-center">
                  <div className="bg-img-css exp-bg ">
                    <div data-aos="fade-right">
                      <img className="img-fluid fade-img" src={exp_1} alt="" />
                    </div>
                  </div>
                </Col>
                <Col className="align-self-center">
                  <div className="ps-5">
                    <div className="main-heading">
                      <span className="span-text ">
                        &nbsp; Construction Experience
                      </span>
                      <h2>We Building Everything Best That You Needed</h2>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Labore veniam vitae tempore! Aut dicta ab nobis nemo
                        voluptates id harum.
                      </p>
                    </div>
                    <div className="progress-wraper">
                      <div className="mt-4">
                        <div className="progress-text">
                          <span>
                            <h5>Masonry Works and Plaster</h5>
                          </span>
                          <span className="me-4">
                            <h5>95%</h5>
                          </span>
                        </div>
                        <div className="progress-bar">
                          <ProgressBar
                            now={now_1}
                            label={`${now_1}%`}
                            visuallyHidden
                          />
                        </div>
                      </div>

                      <div className="mt-4">
                        <div className="progress-text">
                          <span>
                            <h5>Pre Cast Work</h5>
                          </span>
                          <span className="me-4">
                            <h5>80%</h5>
                          </span>
                        </div>
                        <div className="progress-bar">
                          <ProgressBar
                            now={now_2}
                            label={`${now_2}%`}
                            visuallyHidden
                          />
                        </div>
                      </div>

                      <div className="mt-4">
                        <div className="progress-text">
                          <span>
                            <h5>Pre Engineered Structures</h5>
                          </span>
                          <span className="me-4">
                            <h5>70%</h5>
                          </span>
                        </div>
                        <div className="progress-bar">
                          <ProgressBar
                            now={now_3}
                            label={`${now_3}%`}
                            visuallyHidden
                          />
                        </div>
                      </div>

                      <div className="mt-4">
                        <div className="progress-text">
                          <span>
                            <h5>Engineered Structures</h5>
                          </span>
                          <span className="me-4">
                            <h5>60%</h5>
                          </span>
                        </div>
                        <div className="progress-bar">
                          <ProgressBar
                            now={now_4}
                            label={`${now_4}%`}
                            visuallyHidden
                          />
                        </div>
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

export default Experience;
