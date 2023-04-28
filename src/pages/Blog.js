import React from "react";
import "../assets/css/Style.css";
import "../assets/css/Global.css";
import { Container, Row, Col, Form, Button,Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import archi from "../assets/images/blog/blog-archi.jpg";
import building from "../assets/images/blog/blog-b-building.jpg";
import construction from "../assets/images/blog/blog-construction.jpg";
import planning from "../assets/images/blog/blog-planning.jpg";
import { MdCalendarMonth,MdRectangle } from "react-icons/md";
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
                  <h6 className="wht-clr">Lorem, ipsum dolor.</h6>
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
            <div className="text-center">
              <h5>Our Blogs</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto
                non repudiandae cumque ea dolorum consequuntur explicabo ipsum.
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reprehenderit, non.
              </p>
            </div>
            <Row>
              <Col xs={12} sm={8}>
                <div class="post mrt100">
                  <Row>
                    <Col xs={12} sm={4}>
                      <div className="post-image">
                        <img className="img-fluid" src={archi} alt="" />
                      </div>
                    </Col>
                    <Col xs={12} sm={8}>
                      <div className="post-content">
                        <h3>Lorem, ipsum dolor.</h3>
                        <p>
                          <MdCalendarMonth />
                          <span className="clr-orenge">January 6, 2023</span>
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
                      </div>
                    </Col>
                    <div className="text-end border-btm-link">
                      <Link to="#/">
                        Read More
                        <span>
                          <TfiAngleDoubleRight />{" "}
                        </span>
                      </Link>
                    </div>
                  </Row>

                  <Row>
                    <Col xs={12} sm={4}>
                      <div className="post-image">
                        <img className="img-fluid" src={building} alt="" />
                      </div>
                    </Col>
                    <Col xs={12} sm={8}>
                      <div className="post-content">
                        <h3>Lorem, ipsum dolor.</h3>
                        <p>
                          <MdCalendarMonth />
                          <span className="clr-orenge">January 6, 2023</span>
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
                      </div>
                    </Col>
                    <div className="text-end border-btm-link">
                      <Link to="#/">
                        Read More
                        <span>
                          <TfiAngleDoubleRight />{" "}
                        </span>
                      </Link>
                    </div>
                  </Row>

                  <Row>
                    <Col xs={12} sm={4}>
                      <div className="post-image">
                        <img className="img-fluid" src={construction} alt="" />
                      </div>
                    </Col>
                    <Col xs={12} sm={8}>
                      <div className="post-content">
                        <h3>Lorem, ipsum dolor.</h3>
                        <p>
                          <MdCalendarMonth />
                          <span className="clr-orenge">January 6, 2023</span>
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
                      </div>
                    </Col>
                    <div className="text-end border-btm-link">
                      <Link to="#/">
                        Read More
                        <span>
                          <TfiAngleDoubleRight />{" "}
                        </span>
                      </Link>
                    </div>
                  </Row>
                </div>
              </Col>
              <Col xs={12} sm={4}>
                <div className="right-sidebar mrt100">
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
                          <h6 className="clr-orenge">February 19, 2023</h6>
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
                          <h6 className="clr-orenge">February 19, 2023</h6>
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
                          <h6 className="clr-orenge">February 19, 2023</h6>
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
                          <h6 className="clr-orenge">February 19, 2023</h6>
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
                        <span className="clr-orenge"><MdRectangle/> </span><Link to="#/">Architect</Link>
                      </p>
                      <p>
                      <span className="clr-orenge"><MdRectangle/> </span><Link to="#/">Building</Link>
                      </p>
                      <p>
                      <span className="clr-orenge"><MdRectangle/> </span> <Link to="#/">Bridge</Link>
                      </p>
                      <p>
                      <span className="clr-orenge"><MdRectangle/> </span> <Link to="#/">Planning</Link>
                      </p>
                      <p>
                      <span className="clr-orenge"><MdRectangle/> </span><Link to="#/">Revonation</Link>
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
