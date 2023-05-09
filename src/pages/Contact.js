import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSignsPost,
  faHeadset,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
function Contact() {
  return (
    <>
      <section>
        <div className="bg-banner-image">
          <Container>
            <Row>
              <Col xs={5}>
                <div className="main-heading ">
                  <span className="span-text">&nbsp;&nbsp;Get in touch</span>
                  <h1>Contact Us</h1>
                  <p className="wht-clr">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Laudantium debitis porro officiis ratione veritatis.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="mrt50">
          <Container>
            <div>
              <Row>
                <Col xs={12} sm={6}>
                  <div className="main-heading contact-left">
                    <span className="span-text">&nbsp;&nbsp;Contact Us</span>
                    <h2>Get in touch</h2>
                    <p className="">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Laudantium debitis porro officiis ratione veritatis sit
                      amet consectetur adipisicing elit.
                    </p>
                  </div>
                  <div className="contact-icon social-icon">
                    <Link to="#/">
                      <FaTwitter />
                    </Link>
                    <Link to="#/">
                      <FaFacebookF />
                    </Link>
                    <Link to="#/">
                      <FaInstagram />
                    </Link>
                    <Link to="#/">
                      <FaLinkedinIn />
                    </Link>
                  </div>
                </Col>
                <Col xs={12} sm={6}>
                  <div className="contact-right">
                    <Row>
                      <Col xs={12} sm={4}>
                        <div className="text-center">
                          <span className="contect-icon">
                            <FontAwesomeIcon icon={faSignsPost} />
                          </span>
                          <div className="contect-icon-box-content">
                            <h5 className="fw-bold mt-4 contect-icon-box-title">
                              <span>Address : </span>
                            </h5>
                            <p className="contect-icon-box-description">
                              Plot no.14 AirenHeight, Opposite Orbit Mall, AB
                              Rd, Indore, Madhya Pradesh 452001
                            </p>
                          </div>
                        </div>
                      </Col>
                      <Col xs={12} sm={4}>
                        <div className="text-center">
                          <span className="contect-icon">
                            <FontAwesomeIcon icon={faHeadset} />
                          </span>
                          <div className="contect-icon-box-content">
                            <h5 className="fw-bold mt-4 contect-icon-box-title">
                              <span>phone no : </span>
                            </h5>
                            <p className="contect-icon-box-description">
                              Tel: 619-270-8578 <br />
                              Mob: +(911) 1987 123
                            </p>
                          </div>
                        </div>
                      </Col>
                      <Col xs={12} sm={4}>
                        <div className="text-center">
                          <span className="contect-icon">
                            <FontAwesomeIcon icon={faPaperPlane} />
                          </span>
                          <div className="contect-icon-box-content">
                            <h5 className="fw-bold mt-4 contect-icon-box-title">
                              <span>Email : </span>
                            </h5>
                            <p className="contect-icon-box-description">
                              info@company.com office@gmail.com
                            </p>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Row>
            </div>
            <div className="mrt50">
              <Row>
                <Col xs={12} sm={6} className="p-0">
                  <div className="box-shadow p-5">
                    <div className=" ps-4 pe-4">
                      <Form>
                        <Form.Group className="mb-3" controlId="formBasicName">
                          <Form.Control type="name" placeholder="Your Name" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Control type="email" placeholder="Your Email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicText">
                          <Form.Control
                            type="text"
                            placeholder="Your Subject"
                          />
                        </Form.Group>

                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlTextarea1"
                        >
                          <Form.Control
                            as="textarea"
                            placeholder="Your Message"
                            rows={5}
                          />
                        </Form.Group>

                        <Button className="link" type="submit">
                          Send Message
                        </Button>
                      </Form>
                    </div>
                  </div>
                </Col>
                <Col xs={12} sm={6} className="my-auto p-0 ml-4" >
                  <div className="location-map">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14718.03136813648!2d75.88608449999998!3d22.74652725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd584d617663%3A0x7ddfc9619bc0d038!2sIndore%2C%20Madhya%20Pradesh%20452011!5e0!3m2!1sen!2sin!4v1680612403324!5m2!1sen!2sin"
                      width="100%"
                      height="400"
                      style={{ border: "1px solid silver" }}
                      allowfullscreen=""
                      loading="lazy"
                      referrerpolicy="no-referrer-when-downgrade"
                      title="My Location">
                    </iframe>
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

export default Contact;
