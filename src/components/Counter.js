import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../assets/css/Style.css";
import "../assets/css/Global.css";
import experience from "../assets/images/counter/increase.png";
import project from "../assets/images/counter/project-management.png";
import client from "../assets/images/counter/corporate.png";
import workers from "../assets/images/counter/workers.png";

function Counter() {
  return (
    <>
      <section>
        <div className="counter-bg-img mrt100">
          <Container>
            <div className="wht-clr text-center count-title pd150 ">
              <h6>Our Experiance.</h6>
              <h1>Logo Provices all building services</h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Laudantium debitis porro officiis ratione veritatis Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Numquam excepturi
                officiis perferendis nisi deserunt alias culpa adipisci modi
                expedita reiciendis?.
              </p>
            </div>
            <Row>
              <Col xs={12} sm={6} md={3}>
                <div className="counter-text counter-img-1">
                  <Link to="#/">
                    <img src={experience } alt="" />
                  </Link>
                  <h2>
                    <span>25</span>
                  </h2>
                  <p>Years Experience</p>
                </div>
              </Col>
              <Col xs={12} sm={6} md={3}>
                <div className="counter-text counter-img-2">
                  <Link to="#/">
                    {" "}
                    <img src={project} alt="" />
                  </Link>
                  <h2>
                    <span>900+</span>
                  </h2>
                  <p>Projects Done</p>
                </div>
              </Col>
              <Col xs={12} sm={6} md={3}>
                <div className="counter-text counter-img-3">
                  <Link to="#/">
                    {" "}
                    <img src={client} alt="" />
                  </Link>
                  <h2>
                    <span>800+</span>
                  </h2>
                  <p>Happy Clients</p>
                </div>
              </Col>
              <Col xs={12} sm={6} md={3}>
                <div className="counter-text counter-img-4">
                  <Link to="#/">
                    {" "}
                    <img src={workers} alt="" />
                  </Link>
                  <h2>
                    <span>270+</span>
                  </h2>
                  <p>Workers</p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
    </>
  );
}

export default Counter;
