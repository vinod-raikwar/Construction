import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../assets/css/Style.css";
import "../assets/css/Global.css";
import Blog_1 from "../assets/images/cards/blog-1.jpg";
import Blog_2 from "../assets/images/cards/blog-2.jpg";
import Blog_3 from "../assets/images/cards/blog-3.jpg";
import author1 from "../assets/images/cards/author1.jpg";
import author2 from "../assets/images/cards/author2.jpg";
import author3 from "../assets/images/cards/author3.jpg";
import { FaUser, FaRegCalendarAlt, FaTags } from "react-icons/fa";

function Blog() {
  return (
    <>
      <section>
        <div className="mrt100">
          <Container>
            <div className="d-flex justify-content-center">
              <div className="main-heading text-start">
                <span className="span-text">&nbsp;&nbsp;construction Blog</span>
                <h2>This is blog posts</h2>
              </div>
            </div>
            <div>
              <div className="mrt50">
                <Row>
                  <Col xs={12} sm={6} md={4}>
                    <div className="cards">
                      <div className="box-shadow border-btm">
                        <div className="card-image">
                          <Link to="#/">
                            <img className="img-fluid " src={Blog_1} alt="" />
                          </Link>
                        </div>
                        <div class="author-img">
                          <img src={author1} alt="author" />
                        </div>
                        <div className="card-content pt-4 ms-3">
                          <p className="fw-bold mt-3">
                            <span>
                              <span className="blg-crd-icon">
                                <FaUser />
                              </span>{" "}
                              By Lorem
                            </span>
                            <span>
                              <span className="blg-crd-icon">
                                <FaRegCalendarAlt />
                              </span>{" "}
                              April 3, 2023
                            </span>
                            <span>
                              <span className="blg-crd-icon">
                                <FaTags />
                              </span>
                              Planning
                            </span>
                          </p>

                          <Link to="#/">
                            <h5>this is first blog</h5>
                          </Link>
                          <p className="word-wrap">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Voluptas aspernatur odit tempore veniam nobis
                            recusandae.
                          </p>
                          <div className="link-btn d-flex">
                            <div className="link orenge-btn">
                              <Link to="#/">Read More</Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col xs={12} sm={6} md={4}>
                    <div className="cards">
                      <div className="box-shadow border-btm">
                        <div className="card-image">
                          <Link to="#/">
                            <img className="img-fluid" src={Blog_2} alt="" />
                          </Link>
                        </div>
                        <div class="author-img">
                          <img src={author2} alt="author" />
                        </div>
                        <div className="card-content pt-4 ms-3">
                          <p className="fw-bold mt-3">
                            <span>
                              <span className="blg-crd-icon">
                                <FaUser />
                              </span>{" "}
                              By Lorem
                            </span>
                            <span>
                              <span className="blg-crd-icon">
                                <FaRegCalendarAlt />
                              </span>{" "}
                              April 3, 2023
                            </span>
                            <span>
                              <span className="blg-crd-icon">
                                <FaTags />
                              </span>
                              Residential
                            </span>
                          </p>
                          <Link to="#/">
                            <h5>this is second blog</h5>
                          </Link>
                          <p className="word-wrap">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Voluptas aspernatur odit tempore veniam nobis
                            recusandae.
                          </p>
                          <div className="link-btn d-flex">
                            <div className="link orenge-btn">
                              <Link to="#/">Read More</Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col xs={12} sm={6} md={4}>
                    <div className="cards">
                      <div className="box-shadow border-btm">
                        <div className="card-image">
                          <Link to="#/">
                            <img className="img-fluid" src={Blog_3} alt="" />
                          </Link>
                        </div>
                        <div class="author-img">
                          <img src={author3} alt="author" />
                        </div>
                        <div className="card-content pt-4 ms-3">
                          <p className="fw-bold mt-3">
                            <span>
                              <span className="blg-crd-icon">
                                <FaUser />
                              </span>{" "}
                              By Lorem
                            </span>
                            <span>
                              <span className="blg-crd-icon">
                                <FaRegCalendarAlt />
                              </span>{" "}
                              April 3, 2023
                            </span>
                            <span>
                              <span className="blg-crd-icon">
                                <FaTags />
                              </span>
                              Housing
                            </span>
                          </p>
                          <Link to="#/">
                            <h5>this is third blog</h5>
                          </Link>
                          <p className="word-wrap">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Voluptas aspernatur odit tempore veniam nobis
                            recusandae.
                          </p>
                          <div className="link-btn d-flex">
                            <div className="link orenge-btn">
                              <Link to="#/">Read More</Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </Container>
        </div>
      </section>
    </>
  );
}

export default Blog;
