import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../assets/css/Style.css";
import "../assets/css/Global.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import l_1 from "../assets/images/testimonial/Layer-1.webp";
import l_2 from "../assets/images/testimonial/Layer-2.webp";
import l_3 from "../assets/images/testimonial/Layer-3.webp";
import l_4 from "../assets/images/testimonial/Layer-4.webp";
import l_5 from "../assets/images/testimonial/Layer-5.webp";

function Testimonial() {
  var settings = {
    infinite: true,
    arrows: true,
		autoplay: true,
    speed: 100,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
      <section>
        <div className="mrt50 pdb50">
          <Container>
            <Row>
              <Col xs={12}>
                <div>
                  <div className="heading-align">
                    <div className="main-heading">
                      <span className="span-text ">
                        &nbsp;&nbsp;our partners
                      </span>
                      <h2>Valueds Clients</h2>
                    </div>
                  </div>
                  <div className="mt-4 box-shadow ">
                    <Slider {...settings}>
                      <div className="pdtb20 ps-5  pe-5 effect d-flex justify-content-center ">
                        <img className="img-fluid" src={l_1} alt="" />
                      </div>
                      <div className="pdtb20 ps-5  pe-5 effect d-flex justify-content-center">
                        <img className="img-fluid" src={l_2} alt="" />
                      </div>
                      <div className="pdtb20 ps-5  pe-5 effect d-flex justify-content-center">
                        <img className="img-fluid" src={l_3} alt="" />
                      </div>
                      <div className="pdtb20 ps-5  pe-5 effect d-flex justify-content-center">
                        <img className="img-fluid" src={l_4} alt="" />
                      </div>
                      <div className="pdtb20 ps-5  pe-5 effect d-flex justify-content-center">
                        <img className="img-fluid" src={l_5} alt="" />
                      </div>
                      <div className="pdtb20 ps-5  pe-5 effect d-flex justify-content-center">
                        <img className="img-fluid" src={l_2} alt="" />
                      </div>
                      <div className="pdtb20 ps-5  pe-5 effect d-flex justify-content-center">
                        <img className="img-fluid" src={l_4} alt="" />
                      </div>
                    </Slider>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="mrt100"></div>
      </section>
    </>
  );
}

export default Testimonial;
