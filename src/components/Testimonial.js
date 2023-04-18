import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../assets/css/Style.css";
import "../assets/css/Global.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import cl_1 from "../assets/images/testimonial/client-logo1.jpg";
import cl_2 from "../assets/images/testimonial/client-logo2.jpg";
import cl_3 from "../assets/images/testimonial/client-logo3.jpg";
import cl_4 from "../assets/images/testimonial/client-logo4.jpg";
import cl_5 from "../assets/images/testimonial/client-logo5.jpg";
import map from "../assets/images/testimonial/orenge-map.jpg";

function Testimonial() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <>
      <section>
        <div className="mrt100">
          <Container>
            <Row>
              <Col xs={12} sm={6}>
                <div className=" mrt50">
                  <div className=" text-center text">
                    <h2>Our Partners</h2>
                    <h1>Valueds Clients</h1>
                  </div>
                  <div className="">
                    <Slider {...settings}>
                      <div className="pdtb20">
                        <img src={cl_1} alt="" />
                      </div>
                      <div className="pdtb20">
                        <img src={cl_2} alt="" />
                      </div>
                      <div className="pdtb20">
                        <img src={cl_3} alt="" />
                      </div>
                      <div className="">
                        <img src={cl_4} alt="" />
                      </div>
                      <div className="pdtb20">
                        <img src={cl_5} alt="" />
                      </div>
                    </Slider>
                  </div>
                </div>
              </Col>
              <Col xs={12} sm={6}>
                <div className="pdd50 pdr50 mrt50 ">
                  <img className="img-fluid" src={map} alt="" />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
    </>
  );
}

export default Testimonial;
