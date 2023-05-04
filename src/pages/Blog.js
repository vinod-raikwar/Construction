import React from "react";
import "../assets/css/Style.css";
import "../assets/css/Global.css";
import { Container, Row, Col, Form, Button, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import archi from "../assets/images/blog/blog-archi.jpg";
import building from "../assets/images/blog/blog-b-building.jpg";
import construction from "../assets/images/blog/blog-construction.jpg";
import planning from "../assets/images/blog/blog-planning.jpg";
import { MdCalendarMonth, MdRectangle } from "react-icons/md";
import { FaUser, FaListAlt, FaCommentDots } from "react-icons/fa";
import { TfiAngleDoubleRight } from "react-icons/tfi";
import { BsSearch } from "react-icons/bs";

function Blog() {
  return (
    <>
      <section>
        <div className="bg-banner-image">
          <Container>
            <Row>
              <Col xs={5}>
                <div className="main-heading ">
                  <span className="span-text">&nbsp; construction</span>
                  <h1>Blog</h1>
                  <p className="wht-clr">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Laudantium debitis porro officiis ratione veritatis.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="mrt100">
          <Container>
            <div className="d-flex justify-content-center">
              <div className="main-heading">
                <span className="span-text">&nbsp;&nbsp;our Blog</span>
                <h2>Explore Recent Blogs</h2>
              </div>
            </div>
            <Row>
              <Col xs={12} sm={8}>
                <div class="post mrt50">
                  <Row>
                    <Col xs={12}>
                      <div
                        data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="1000"
                      >
                      <div className="pe-5">
                        <div className="post-image">
                          <img className="img-fluid w-100" src={archi} alt="" />
                        </div>
                        <div className="main-heading post-content border-btm-link pdtb20">
                          <h3>Lorem, ipsum dolor.</h3>
                          <p>
                            <MdCalendarMonth />
                            <span>January 6, 2023</span>
                            <FaUser />
                            <span>
                              <Link to="#/"> Lorem Ipsum</Link>
                            </span>
                            <FaListAlt />
                            <span>
                              <Link to="#/">Uncategorized</Link>
                            </span>
                            <FaCommentDots />
                            <span>Off</span>
                          </p>
                          <p className="clr-black ">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Eos suscipit quas temporibus quod aut incidunt
                            at atque rerum, natus deserunt consectetur ullam rem
                            harum? Nesciunt dignissimos dicta veniam distinctio
                            quae.
                          </p>
                          <div className="read-more">
                            <Link to="#/">
                              Read More
                              <span>
                                <TfiAngleDoubleRight />{" "}
                              </span>
                            </Link>
                          </div>
                        </div>
                      </div>
                      </div>
                    </Col>
                  </Row>

                  <Row>
                    <Col xs={12}>
                      <div className="pe-5">
                        <div className="post-image">
                          <img
                            className="img-fluid w-100"
                            src={building}
                            alt=""
                          />
                        </div>
                        <div className="main-heading post-content border-btm-link pdtb20">
                          <h3>Lorem, ipsum dolor.</h3>
                          <p>
                            <MdCalendarMonth />
                            <span>January 6, 2023</span>
                            <FaUser />
                            <span>
                              <Link to="#/"> Lorem Ipsum</Link>
                            </span>
                            <FaListAlt />
                            <span>
                              <Link to="#/">Uncategorized</Link>
                            </span>
                            <FaCommentDots />
                            <span>Off</span>
                          </p>
                          <p className="clr-black ">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Eos suscipit quas temporibus quod aut incidunt
                            at atque rerum, natus deserunt consectetur ullam rem
                            harum? Nesciunt dignissimos dicta veniam distinctio
                            quae.
                          </p>
                          <div className="read-more">
                            <Link to="#/">
                              Read More
                              <span>
                                <TfiAngleDoubleRight />{" "}
                              </span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </Col>
                  </Row>

                  <Row>
                    <Col xs={12}>
                      <div className="pe-5">
                        <div className="post-image">
                          <img
                            className="img-fluid w-100"
                            src={construction}
                            alt=""
                          />
                        </div>
                        <div className="main-heading post-content border-btm-link pdtb20">
                          <h3>Lorem, ipsum dolor.</h3>
                          <p>
                            <MdCalendarMonth />
                            <span>January 6, 2023</span>
                            <FaUser />
                            <span>
                              <Link to="#/"> Lorem Ipsum</Link>
                            </span>
                            <FaListAlt />
                            <span>
                              <Link to="#/">Uncategorized</Link>
                            </span>
                            <FaCommentDots />
                            <span>Off</span>
                          </p>
                          <p className="clr-black ">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Eos suscipit quas temporibus quod aut incidunt
                            at atque rerum, natus deserunt consectetur ullam rem
                            harum? Nesciunt dignissimos dicta veniam distinctio
                            quae.
                          </p>
                          <div className="read-more">
                            <Link to="#/">
                              Read More
                              <span>
                                <TfiAngleDoubleRight />{" "}
                              </span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
              {/* ***********Blog Aside Col Start********* */}
              <Col xs={12} sm={4}>
                <div className="right-sidebar mrt50">
                  <div className="blog-sidebar-box">
                    <h3>Search</h3>
                    <Form className="d-flex header-form">
                      <Form.Control
                        type="search"
                        placeholder="Search..."
                        aria-label="Search"
                      />
                      <Button type="search" className="btn orenge-btn">
                        <BsSearch />
                      </Button>
                    </Form>
                  </div>

                  <div className="blog-sidebar-box ">
                    <h3>Popular Post</h3>
                    <div className="border p-3">
                      <div className="d-flex">
                        <img
                          src={archi}
                          alt="John Doe"
                          style={{ width: "70px", height: "70px" }}
                        />

                        <div className="ps-2">
                          <p className="clr-orenge m-0">
                            <strong>February 19, 2023</strong>
                          </p>
                          <p className="clr-black">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit.
                          </p>
                        </div>
                      </div>

                      <div className="d-flex">
                        <img
                          src={building}
                          alt="John Doe"
                          style={{ width: "70px", height: "70px" }}
                        />

                        <div className="ps-2">
                          <p className="clr-orenge m-0">
                            <strong>February 19, 2023</strong>
                          </p>
                          <p className="clr-black">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit.
                          </p>
                        </div>
                      </div>

                      <div className="d-flex">
                        <img
                          src={planning}
                          alt="John Doe"
                          style={{ width: "70px", height: "70px" }}
                        />

                        <div className="ps-2">
                          <p className="clr-orenge m-0">
                            <strong>February 19, 2023</strong>
                          </p>
                          <p className="clr-black">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit.
                          </p>
                        </div>
                      </div>

                      <div className="d-flex">
                        <img
                          src={construction}
                          alt="John Doe"
                          style={{ width: "70px", height: "70px" }}
                        />

                        <div className="ps-2">
                          <p className="clr-orenge m-0">
                            <strong>February 19, 2023</strong>
                          </p>
                          <p className="clr-black">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="blog-sidebar-box">
                    <h3>Categories</h3>
                    <div className="category content">
                      <p>
                        <span className="clr-orenge">
                          <MdRectangle />{" "}
                        </span>
                        <Link to="#/">Architect</Link>
                      </p>
                      <p>
                        <span className="clr-orenge">
                          <MdRectangle />{" "}
                        </span>
                        <Link to="#/">Building</Link>
                      </p>
                      <p>
                        <span className="clr-orenge">
                          <MdRectangle />{" "}
                        </span>{" "}
                        <Link to="#/">Bridge</Link>
                      </p>
                      <p>
                        <span className="clr-orenge">
                          <MdRectangle />{" "}
                        </span>{" "}
                        <Link to="#/">Planning</Link>
                      </p>
                      <p>
                        <span className="clr-orenge">
                          <MdRectangle />{" "}
                        </span>
                        <Link to="#/">Revonation</Link>
                      </p>
                    </div>
                  </div>

                  <div className="blog-sidebar-box">
                    <h3>Tags</h3>
                    <div className="blog-tags ">
                      <Nav>
                        <Link to="#/"> Bridge(8)</Link>
                        <Link to="#/"> Renovation(7)</Link>
                        <Link to="#/"> Building(9)</Link>
                        <Link to="#/"> Road(3)</Link>
                        <Link to="#/"> Architect(10)</Link>
                        <Link to="#/"> Construction(12)</Link>
                      </Nav>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
    </>
  );
}

export default Blog;
