import React from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";

import imgC3 from "../../assets/image/conference/png/content-3-img.svg";
import imgCD from "../../assets/image/conference/png/fill-dot-red.svg";
import imgCR from "../../assets/image/conference/png/content-3-round.svg";

const Content = () => {
  return (
    <>
      {/* <!-- Content Area --> */}
      <div className="content-section content-section-3 bg-default-6 py-13 pt-lg-19 pb-lg-19">
        <Container>
          <Row className="align-items-center justify-content-center">
            <Col sm="10" lg="6" className="mb-9 mb-lg-0">
              <div className="content-image position-relative gr-z-index-1">
                <img
                  src={imgC3} // outline + feedback
                  alt=""
                  data-aos="zoom-in"
                  data-aos-duration="800"
                  className="w-100"
                />
                <div className="img-1 gr-abs-tl-custom-4">
                  <img
                    src={imgCD} 
                    alt=""
                    data-aos="fade-down"
                    data-aos-duration="800"
                    data-aos-delay="600"
                    className="w-auto"
                  />
                </div>
                <div className="img-2 gr-abs-br-custom-2 gr-z-index-n1">
                  <img
                    src={imgCR}
                    alt=""
                    data-aos="fade-up-left"
                    data-aos-duration="800"
                    data-aos-delay="1000"
                    className="w-auto"
                  />
                </div>
              </div>
            </Col>
            <Col sm="10" lg="6" xl="5">
              <div className="content-text pl-lg-10">
                <h2 className="gr-text-4 mb-9">
                Instructed by a self-taught <br className="d-none d-lg-block" />
                Google programmer
                </h2>
                <p className="gr-text-8 mb-0">
                  Hailey joined Google in 2017 as a self-taught developer. She left in 2020 to pursue her passion of teaching the way things should be taught.
                </p>
                <Link href="/#">
                  <a className="btn-link with-icon gr-text-blue gr-text-7 font-weight-bold mt-11">
                    Read more{" "}
                    <i className="icon icon-tail-right font-weight-bold"></i>
                  </a>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Content;
