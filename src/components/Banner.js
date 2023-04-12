import React from "react";
import { Carousel, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../assets/css/Style.css";
import "../assets/css/Global.css";

import slide_1 from "../assets/images/slide-1.jpg";
import slide_2 from "../assets/images/slide-2.jpg";
import slide_3 from "../assets/images/slide-3.jpg";

import btm from "../assets/images/slider-btm-img.png";
import schedule from "../assets/images/schedule.png";

function Banner() {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <div className="banner position-relative">
            <img className="d-block w-100" src={slide_3} alt="First slide" />
            <Row>
              <Col xs={6}>
                <div className="schedule">
                  <img src={schedule} alt="schedule" />

                  <div className="main-heading slider-content">
                    <h6>Lorem, ipsum dolor.</h6>
                    <h1>Lorem ipsum dolor sit amet.</h1>
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Laudantium debitis porro officiis ratione veritatis, eos
                      dolor rem corrupti enim iusto.
                    </p>
                    <div className="link-btn">
                      <Link className="link orenge-btn" to="#/">
                        Read More
                      </Link>
                      <Link className="link blue-btn" to="#/">
                        Contact Us
                      </Link>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
            <div className="btm-image">
              <img className="fluid d-blocks" src={btm} alt="First slide" />
            </div>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="banner position-relative">
            <img className="d-block w-100" src={slide_2} alt="First slide" />
            <Row>
              <Col xs={6}>
                <div className="schedule">
                  <img src={schedule} alt="schedule" />

                  <div className="main-heading slider-content txt-clr-wht">
                    <h6>Lorem, ipsum dolor.</h6>
                    <h1>Lorem ipsum dolor sit amet.</h1>
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Laudantium debitis porro officiis ratione veritatis, eos
                      dolor rem corrupti enim iusto.
                    </p>
                    <div className="link-btn">
                      <Link className="link orenge-btn" to="#/">
                        Read More
                      </Link>
                      <Link className="link blue-btn" to="#/">
                        Contact Us
                      </Link>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
            <div className="btm-image">
              <img className="fluid d-blocks" src={btm} alt="First slide" />
            </div>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="banner position-relative">
            <img className="d-block w-100" src={slide_1} alt="First slide" />
            <Row>
              <Col xs={6}>
                <div className="schedule">
                  <img src={schedule} alt="schedule" />

                  <div className="main-heading slider-content">
                    <h6>Lorem, ipsum dolor.</h6>
                    <h1>Lorem ipsum dolor sit amet.</h1>
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Laudantium debitis porro officiis ratione veritatis, eos
                      dolor rem corrupti enim iusto.
                    </p>
                    <div className="link-btn">
                      <Link className="link orenge-btn" to="#/">
                        Read More
                      </Link>
                      <Link className="link blue-btn" to="#/">
                        Contact Us
                      </Link>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
            <div className="btm-image">
              <img className="fluid d-blocks" src={btm} alt="First slide" />
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default Banner;
