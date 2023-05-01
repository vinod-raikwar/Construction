import React from "react";
import { Container, Carousel, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../assets/css/Style.css";
import "../assets/css/Global.css";

function Banner() {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <div
            className="banner"
            style={{
              backgroundImage: `url(${require("../assets/images/slide-1.jpg")})`,
            }}
          >
            <Container>
              <div>
                <Row>
                  <Col xs={6}>
                    <div>
                      <div className="slider-heading">
                        <span className="span-text">&nbsp; construction</span>
                        <h1>Lorem ipsum dolor sit amet</h1>
                        <p>
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Laudantium debitis porro officiis ratione
                          veritatis, eos dolor rem corrupti enim iusto.
                        </p>
                      </div>
                      <div className="link-btn d-flex">
                        <div className="link orenge-btn">
                          <Link to="#/">Read More</Link>
                        </div>
                        <div className="link blue-btn">
                          <Link to="#/">Contact Us</Link>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Container>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div
            className="banner"
            style={{
              backgroundImage: `url(${require("../assets/images/slide-2.jpg")})`,
            }}
          >
            <Container>
              <div>
                <Row>
                  <Col xs={6}>
                    <div>
                      <div className="slider-heading">
                        <span className="span-text">&nbsp; construction</span>
                        <h1>Lorem ipsum dolor sit amet</h1>
                        <p>
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Laudantium debitis porro officiis ratione
                          veritatis, eos dolor rem corrupti enim iusto.
                        </p>
                      </div>
                      <div className="link-btn d-flex">
                        <div className="link orenge-btn">
                          <Link to="#/">Read More</Link>
                        </div>
                        <div className="link blue-btn">
                          <Link to="#/">Contact Us</Link>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Container>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div
            className="banner"
            style={{
              backgroundImage: `url(${require("../assets/images/slide-3.jpg")})`,
            }}
          >
            <Container>
              <div>
                <Row>
                  <Col xs={6}>
                    <div>
                      <div className="slider-heading">
                        <span className="span-text">&nbsp; construction</span>
                        <h1>Lorem ipsum dolor sit amet</h1>
                        <p>
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Laudantium debitis porro officiis ratione
                          veritatis, eos dolor rem corrupti enim iusto.
                        </p>
                      </div>
                      <div className="link-btn d-flex">
                        <div className="link orenge-btn">
                          <Link to="#/">Read More</Link>
                        </div>
                        <div className="link blue-btn">
                          <Link to="#/">Contact Us</Link>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Container>
          </div>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default Banner;
