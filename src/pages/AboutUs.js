import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../assets/css/Style.css";
import "../assets/css/Global.css";
import m_1 from "../assets/images/about/about-image-1.png";
import { MdAlternateEmail } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import b_safe from "../assets/images/about/keep-your-bussiness-safe.jpg";

function AboutUs() {
  return (
    <>
      <section>
        <div className="bg-banner-image">
          <Container>
            <Row>
              <Col xs={5}>
                <div className="main-heading ">
                  <h6 className="wht-clr">Lorem, ipsum dolor.</h6>
                  <h1>About Us</h1>
                  <p className="wht-clr">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Laudantium debitis porro officiis ratione veritatis.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="mrt100 ">
          <Container>
            <Row>
              <Col xs={12} sm={4}>
                <div className="main-heading">
                  <h6>Few Word About Lorem</h6>
                  <h2>Lorem ipsum dolor, sit amet consectetur.</h2>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Illum iure, nihil nesciunt earum aliquid quaerat provident
                    at, autem omnis reiciendis, odit repellat soluta ut ullam
                    est eaque similique dolorem tenetur?
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Corrupti amet ratione incidunt recusandae voluptatem omnis
                    eius quod voluptas deleniti architecto ullam, atque vel.
                    Optio neque eligendi ipsum dolore velit ducimus.
                  </p>
                  <div className="link-btn">
                    <Link className="link orenge-btn" to="#/">
                      Read More
                    </Link>
                  </div>
                </div>
              </Col>
              <Col xs={12} sm={8}>
                <div className="d-flex justify-content-center">
                  <img className="img-fluid" src={m_1} alt="" />
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="mrt100">
          <Container>
            <Row>
              <Col xs={12} sm={4}>
                <div className="pdr50">
                  <h2>Keep Your Business Safe & Ensure High Availability.</h2>
                </div>
              </Col>
              <Col xs={12} sm={4}>
                <div className="pdr50">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                    excepturi soluta libero non deleniti. Iste minima officia
                    totam nisi ipsam commodi perferendis esse inventore.
                    Perspiciatis eaque fugiat fuga deserunt quis?
                  </p>
                </div>
              </Col>

              <Col xs={12} sm={4}>
                <div className="content pdr50">
                  <p>
                    <span>
                      <MdAlternateEmail />
                    </span>
                    <Link to="#/">
                      example1@test.com
                    </Link>
                  </p>
                  <p>
                    <span>
                      <BsTelephone />
                    </span>
                    <Link to="#/">+ (123) 1234-567-8901</Link> <br />
                    <span style={{ marginLeft: "16px" }}></span>
                    <Link to="#/">+ (123) 1234-567-8902</Link>
                  </p>
                </div>
              </Col>
              <Col xs={12}>
                <div className="mrt100">
                  <img className="img-fluid" src={b_safe} alt="" />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
    </>
  );
}

export default AboutUs;
