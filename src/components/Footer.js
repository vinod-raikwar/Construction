import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../assets/css/Style.css";
import "../assets/css/Global.css";
import { MdAccessTime, MdAlternateEmail, MdCopyright } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";
import { BsTelephone } from "react-icons/bs";
import map from "../assets/images/footer-map.png";
// import excavator from "../assets/images/footer/excavator.svg";
import hook from "../assets/images/footer/hook.svg";
import house from "../assets/images/footer/house.svg";
import tools from "../assets/images/footer/tools.svg";
import workers from "../assets/images/footer/workers.svg";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

function Footer() {
  return (
    <>
      <section>
        {/* ********Footer Start********  */}
        <div className="ftr-bg mrt100">
          <Container>
            <Row>
              <Col xs={12} sm={6} md={3}>
                <div className="ftr-content-title mrt50 pdb50">
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
                        Mon-Sat 8:00-17:30, <br />{" "}
                        <span style={{ marginLeft: "20px" }}></span>{" "}
                        Sunday-CLOSED
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
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          version="1.0"
                          width="30"
                          height="30"
                          viewBox="0 0 512.000000 512.000000"
                          preserveAspectRatio="xMidYMid meet"
                        >
                          <g
                            transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                            fill="#ff5e14"
                            stroke="none"
                          >
                            <path d="M1029 5105 c-143 -52 -238 -153 -274 -290 -12 -48 -23 -306 -55 -1275 -23 -668 -43 -1221 -45 -1228 -2 -6 -12 -12 -22 -12 -41 0 -128 -53 -188 -114 -89 -90 -110 -147 -110 -291 0 -103 2 -114 31 -172 l32 -62 -140 -163 c-215 -252 -265 -371 -256 -611 4 -98 10 -136 30 -195 50 -139 96 -202 297 -403 154 -153 198 -191 257 -222 129 -67 134 -67 671 -67 l483 0 0 85 0 85 -85 0 -85 0 0 228 0 228 -159 127 c-258 206 -255 200 -306 664 l-26 233 25 42 c54 94 69 212 42 315 -17 64 -47 115 -98 168 l-38 41 191 1069 c135 757 195 1075 207 1088 15 17 40 -6 438 -404 l422 -422 -20 -43 c-24 -56 -25 -156 -2 -229 26 -85 122 -181 198 -201 l26 -6 0 -293 0 -292 -54 -6 c-30 -3 -67 -12 -82 -20 -46 -24 -102 -86 -119 -131 -8 -22 -65 -288 -125 -591 -95 -475 -110 -563 -110 -647 l0 -98 -43 -53 c-85 -105 -133 -261 -123 -400 10 -146 89 -306 195 -398 58 -50 184 -114 253 -128 37 -8 405 -11 1233 -9 1162 3 1181 3 1236 24 128 46 241 139 312 256 53 89 69 147 74 275 4 96 2 123 -17 185 -24 81 -56 142 -106 204 l-33 41 -3 409 c-3 398 -4 410 -25 450 -23 44 -89 108 -121 118 -17 6 -20 18 -24 99 -3 79 -8 98 -31 135 -36 55 -96 98 -158 111 -31 7 -222 11 -514 11 l-464 0 -17 35 c-28 61 -124 124 -186 125 l-28 0 0 548 c0 510 -1 554 -19 624 -34 134 -104 242 -203 317 -29 22 -411 243 -849 493 -757 431 -798 456 -840 508 -50 61 -128 113 -203 135 -61 18 -198 18 -247 0z m206 -172 c29 -9 66 -33 91 -59 150 -150 42 -405 -171 -405 -154 0 -269 144 -231 290 23 88 73 144 161 178 43 17 94 15 150 -4z m1080 -673 c546 -311 740 -427 777 -462 59 -57 106 -152 118 -240 5 -35 10 -291 10 -570 l0 -508 -285 0 -285 0 0 294 0 294 26 6 c76 20 172 116 198 200 20 64 22 161 5 214 -58 175 -251 273 -424 214 l-60 -21 -427 427 -428 427 18 72 c9 40 20 72 23 70 3 -1 334 -189 734 -417z m-1345 75 c50 -26 128 -45 183 -45 26 0 47 -2 47 -4 0 -2 -79 -446 -175 -985 -96 -540 -175 -987 -175 -993 0 -7 -3 -8 -9 -2 -4 5 7 438 25 969 18 528 33 993 33 1034 1 70 2 73 19 59 9 -9 33 -24 52 -33z m1642 -801 c37 -8 95 -75 103 -118 19 -97 -56 -186 -155 -186 -142 0 -210 169 -108 267 33 31 89 54 118 47 8 -1 27 -6 42 -10z m797 -1235 c17 -6 36 -19 41 -29 6 -12 10 -227 10 -564 l0 -545 -592 -3 c-580 -3 -594 -3 -653 -25 -33 -12 -62 -20 -64 -17 -8 8 221 1130 235 1152 9 13 25 27 37 32 33 13 947 12 986 -1z m-2558 -187 c63 -32 112 -97 127 -167 46 -216 -219 -373 -386 -229 -62 53 -86 105 -86 184 0 181 186 295 345 212z m3724 22 c24 -9 45 -58 45 -104 l0 -40 -330 0 -330 0 0 -90 0 -90 387 0 c383 0 387 0 410 -22 l23 -21 0 -328 0 -328 -57 22 c-56 21 -73 22 -570 25 l-513 3 0 325 0 324 80 0 80 0 0 90 0 90 -80 0 -80 0 0 75 0 75 459 0 c253 0 467 -3 476 -6z m-3970 -627 c67 -28 201 -30 264 -4 24 10 45 17 46 15 2 -2 14 -107 29 -233 28 -252 46 -328 101 -420 47 -78 84 -115 232 -232 73 -58 123 -105 123 -115 0 -16 -11 -18 -85 -18 l-85 0 0 -85 0 -85 85 0 85 0 0 -80 0 -80 -280 0 c-169 0 -300 4 -332 11 -110 24 -162 60 -344 243 -151 152 -175 180 -211 253 -80 159 -81 322 -4 478 49 99 286 388 311 378 8 -3 38 -15 65 -26z m3983 -527 c88 -12 183 -59 241 -119 221 -227 115 -595 -194 -676 -52 -13 -203 -15 -1161 -15 -706 0 -1121 4 -1155 10 -313 60 -436 445 -215 678 63 67 139 105 241 121 70 12 2166 13 2243 1z" />
                            <path d="M2485 2138 c-2 -7 -24 -116 -50 -243 -34 -173 -45 -253 -45 -322 l0 -93 500 0 500 0 0 335 0 335 -450 0 c-352 0 -452 -3 -455 -12z m735 -318 l0 -160 -326 0 -326 0 5 23 c3 12 18 84 33 160 l27 137 293 0 294 0 0 -160z" />
                            <path d="M3790 1570 l0 -90 170 0 170 0 0 90 0 90 -170 0 -170 0 0 -90z" />
                            <path d="M4290 1570 l0 -90 170 0 170 0 0 90 0 90 -170 0 -170 0 0 -90z" />
                            <path d="M2354 889 c-74 -28 -137 -88 -175 -165 -60 -122 -40 -267 51 -367 121 -132 302 -150 450 -43 l47 33 39 -29 c130 -99 316 -95 427 10 l27 26 28 -26 c61 -59 172 -93 263 -81 55 7 134 42 175 76 l32 27 38 -31 c125 -101 315 -97 426 8 l26 25 39 -30 c66 -53 127 -75 215 -75 68 0 87 5 143 32 126 62 190 172 183 316 -4 95 -29 154 -92 218 -63 63 -125 90 -218 95 -90 5 -138 -9 -219 -64 l-50 -35 -29 24 c-119 101 -311 102 -426 3 l-39 -34 -36 33 c-50 45 -135 75 -213 75 -77 0 -133 -18 -198 -65 l-49 -36 -29 24 c-119 101 -310 102 -426 3 l-39 -33 -39 33 c-83 72 -225 95 -332 53z m179 -163 c46 -19 94 -77 102 -125 9 -52 -20 -119 -66 -152 -46 -32 -134 -34 -176 -3 -54 40 -75 83 -71 142 6 64 29 99 88 130 51 25 78 27 123 8z m507 -8 c59 -31 82 -66 88 -130 3 -44 0 -59 -20 -87 -33 -49 -69 -72 -120 -78 -147 -17 -231 162 -126 264 59 57 109 66 178 31z m483 8 c44 -18 95 -78 103 -121 9 -51 -19 -119 -64 -153 -46 -35 -135 -39 -178 -6 -52 38 -69 71 -69 132 0 70 28 115 89 143 49 22 76 23 119 5z m507 -8 c86 -44 115 -136 69 -218 -71 -125 -258 -95 -290 47 -19 88 61 191 151 193 14 0 46 -10 70 -22z m514 -7 c47 -29 80 -99 73 -152 -3 -22 -17 -56 -32 -75 -88 -116 -270 -62 -282 83 -11 128 130 212 241 144z" />
                          </g>
                        </svg>
                      </span>
                      <Link to="#/">Lorem ipsum dolor sit.</Link>
                    </p>
                    <p>
                      <span>
                        <img src={hook} alt="" />
                      </span>
                      <Link to="#/">Lorem ipsum dolor sit.</Link>
                    </p>
                    <p>
                      <span>
                        <img src={house} alt="" />
                      </span>
                      <Link to="#/">Lorem ipsum dolor sit.</Link>
                    </p>
                    <p>
                      <span>
                        <img src={tools} alt="" />
                      </span>
                      <Link to="#/">Lorem ipsum dolor sit.</Link>
                    </p>
                    <p>
                      <span>
                        <img src={workers} alt="" />
                      </span>
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
                        <SlLocationPin />
                      </span>
                      <Link to="#/">
                        7300-7398 Colonial Rd, <br />{" "}
                        <span style={{ marginLeft: "20px" }}></span> Indore, IND
                        11209
                      </Link>
                    </p>
                    <p>
                      <span>
                        <BsTelephone />
                      </span>
                      <Link to="#/">+ (123) 1234-567-8901</Link> <br />{" "}
                      <span style={{ marginLeft: "20px" }}></span>
                      <Link to="#/">+ (123) 1234-567-8902</Link>
                    </p>
                    <p>
                      <span>
                        <MdAlternateEmail />
                      </span>
                      <Link to="#/">
                        example1@test.com <br />{" "}
                        <span style={{ marginLeft: "20px" }}></span>{" "}
                        example2@test.com
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
                      <img className="img-fluid" src={map} alt="" />
                    </Link>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        {/* ********Footer End********  */}

        {/* ********Footer Bottom Start********  */}
        <div className="ftr-btm ftr-bg">
          <Container>
            <Row>
              <Col xs={12} sm={4}>
                <div className="btm-ftr-left">
                  <div className="logo-link">
                    <Link to="#/">
                      <h3>Logo</h3>
                    </Link>
                  </div>
                </div>
              </Col>
              <Col xs={12} sm={4}>
                <div className="copy-right">
                  <p>
                    <span>
                      <MdCopyright />
                    </span>
                    2023 &nbsp;<Link to="#/">Qode Interactive</Link>, All Rights
                    Reserved
                  </p>
                </div>
              </Col>
              <Col xs={12} sm={4}>
                <div className="btm-ftr-right">
                  <div className="social-icon d-flex justify-content-end">
                    <Link to="#/">
                      {" "}
                      <FaTwitter />
                    </Link>
                    <Link to="#/">
                      {" "}
                      <FaFacebookF />
                    </Link>
                    <Link to="#/">
                      {" "}
                      <FaInstagram />
                    </Link>
                    <Link to="#/">
                      {" "}
                      <FaLinkedinIn />
                    </Link>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        {/* ********Footer Bottom End********  */}
      </section>
    </>
  );
}

export default Footer;
