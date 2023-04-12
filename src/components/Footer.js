import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../assets/css/Style.css";
import "../assets/css/Global.css";
import { MdAccessTime,MdAlternateEmail } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";
import { BsTelephone } from "react-icons/bs";
import map from "../assets/images/footer-map.png";
import excavator from "../assets/images/footer/excavator.svg";
import hook from "../assets/images/footer/hook.svg";
import house from "../assets/images/footer/house.svg";
import tools from "../assets/images/footer/tools.svg";
import workers from "../assets/images/footer/workers.svg";

function Footer() {
  return (
    <>
      <section>
        <div className="ftr-bg mrt100">
          <Container>
            <Row>
              <Col xs={12} sm={6} md={3}>
                <div className="ftr-content-title mrt50">
                  <h3>Lorem, Tech</h3>
                  <div className="ftr-content">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Explicabo voluptatibus necessitatibus odio blanditiis
                      earum exercitationem.
                    </p>
                    <p>
                      <span>
                        <MdAccessTime />
                      </span>
                      <Link to="#/">
                        Mon-Sat 8:00-17:30, <br /> <span style={{marginLeft: "20px"}}></span> Sunday-CLOSED
                      </Link>
                    </p>
                  </div>
                </div>
              </Col>
              <Col xs={12} sm={6} md={3}>
                <div className="ftr-content-title mrt50">
                  <h3>Our Services</h3>
                  <div className="ftr-content">
                    <p>
                    {/* <svg fill={"#9ca5af"} width={"30px"} height={"30px"} src={excavator}></svg> */}
                     <span><svg  src={excavator} alt="" fill="#9ca5af"/></span>
                      <Link to="#/">Lorem ipsum dolor sit.</Link>
                    </p>
                    <p>
                    <span><svg  src={hook} alt="" /></span>
                      <Link to="#/">Lorem ipsum dolor sit.</Link>
                    </p>
                    <p>
                    <span><svg  src={house} alt="" /></span>
                      <Link to="#/">Lorem ipsum dolor sit.</Link>
                    </p>
                    <p>
                    <span><svg  src={tools} alt="" /></span>
                      <Link to="#/">Lorem ipsum dolor sit.</Link>
                    </p>
                    <p>
                    <span><svg  src={workers} alt="" /></span>
                      <Link to="#/">Lorem ipsum dolor sit.</Link>
                    </p>
                  </div>
                </div>
              </Col>
              <Col xs={12} sm={6} md={3}>
                <div className="ftr-content-title mrt50">
                  <h3>Office in Indore </h3>
                  <div className="ftr-content">
                    <p>
                      <span>
                        <SlLocationPin/>
                      </span>
                      <Link to="#/">
                        7300-7398 Colonial Rd, <br /> <span style={{marginLeft: "20px"}}></span> Indore, IND 11209
                      </Link>
                    </p>
                    <p>
                      <span>
                        <BsTelephone />
                      </span>
                      <Link to="#/">+ (123) 1234-567-8901</Link> <br /> <span style={{marginLeft: "20px"}}></span>
                      <Link to="#/">+ (123) 1234-567-8902</Link>
                    </p>
                    <p>
                      <span>
                        <MdAlternateEmail />
                      </span>
                      <Link to="#/">
                      example1@test.com <br /> <span style={{marginLeft: "20px"}}></span> example2@test.com
                      </Link>
                    </p>
                  </div>
                </div>
              </Col>
              <Col xs={12} sm={6} md={3}>
              <div className="ftr-content-title mrt50">
                  <h3>Our Location </h3>
                  <div className="ftr-content">
                   <Link to="#/"> 
                   <img className="img-fluid"  src={map} alt="" />
                   </Link>
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

export default Footer;
