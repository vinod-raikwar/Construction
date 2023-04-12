import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../assets/css/Style.css";
import "../assets/css/Global.css";
import Blog_1 from "../assets/images/blog-1.webp";
import Blog_2 from "../assets/images/blog-2.webp";
import Blog_3 from "../assets/images/blog-3.webp";

function Blog() {
  return (
    <>
      <section>
        <Container>
          <Row>
            <div className="main-heading text-center mrt100">
              <h6>Lorem, ipsum dolor.</h6>
              <h2>Lorem ipsum dolor sit amet.</h2>
            </div>
            <Col xs={12} sm={6} md={4}>
              <div className="mrt50">
                <div className="card-image">
                  <Link to="#/">
                    <img className="img-fluid" src={Blog_1} alt="" />
                  </Link>
                </div>
                <div className="card-content pdtb20">
                  <p>
                    <span>By, Lorem ipsum.</span>
                    <span>April 3, 2023</span>
                  </p>
                  <h3>
                    <Link to="#/">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </Link>
                  </h3>

                  <div className="link-btn">
                    <Link className="link orenge-btn" to="#/">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={12} sm={6} md={4}>
              <div className="mrt50">
                <div className="card-image">
                  <Link to="#/">
                    <img className="img-fluid" src={Blog_2} alt="" />
                  </Link>
                </div>
                <div className="card-content pdtb20">
                  <p>
                    <span>By, Lorem ipsum.</span>
                    <span>April 3, 2023</span>
                  </p>
                  <h3>
                    <Link to="#/">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </Link>
                  </h3>

                  <div className="link-btn">
                    <Link className="link orenge-btn" to="#/">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={12} sm={6} md={4}>
              <div className="mrt50">
                <div className="card-image">
                  <Link to="#/">
                    <img className="img-fluid" src={Blog_3} alt="" />
                  </Link>
                </div>
                <div className="card-content pdtb20">
                  <p>
                    <span>By, Lorem ipsum.</span>
                    <span>April 3, 2023</span>
                  </p>
                  <h3>
                    <Link to="#/">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </Link>
                  </h3>

                  <div className="link-btn">
                    <Link className="link orenge-btn" to="#/">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Blog;
