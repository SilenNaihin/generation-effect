import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import imgC2 from "../../assets/image/conference/png/content-2-img.png";
import imgCR from "../../assets/image/conference/png/content-2-round.png";

const Content = () => {
  return (
    <>
      {/* <!-- Content Area --> */}
      <div className="content-section content-section2 bg-default-6 pt-9 pt-lg-20 pb-7 pb-lg-23">
        <Container>
          <Row className="align-items-center justify-content-center">
            <Col
              xs="10"
              lg="6"
              xl="5"
              className="offset-xl-1 order-lg-2"
              data-aos="fade-right"
              data-aos-duration="1600"
            >
              <div className="content-img position-relative text-center mb-13 mb-lg-0">
                <img
                  src={imgC2}
                  alt=""
                  className="w-90 w-md-60 w-lg-auto shadow-8 rounded-25  position-relative gr-z-index-1"
                />
                <div
                  className="gr-abs-bl-custom-4"
                  data-aos="fade-down-left"
                  data-aos-delay="1000"
                  data-aos-duration="1000"
                >
                  <img src={imgCR} alt="" className="w-auto" />
                </div>
              </div>
            </Col>
            <Col xs="10" lg="6" xl="5" className="pr-lg-15 order-lg-1">
              <div className="section-title content-text mb-13 mb-lg-15">
                <h2 className="title gr-text-4 mb-6">Taught by a Google engineer</h2>
                <p className="gr-text-8 pr-lg-12 mb-0">
                  Hailey joined Google in 2016 as a self-taught developer. She left to pursue her passion of teaching and spreading her methods.
                </p>
              </div>
              <div className="content-widget">
                <Row className="mb-n11">
                  <Col
                    md="6"
                    lg="10"
                    data-aos="fade-right"
                    data-aos-duration="500"
                  >
                    <div className="single-widget mb-11">
                      <h3 className="w-title gr-text-7 mb-4">
                        Optimized for your goals
                      </h3>
                      <p className="gr-text-9 mb-0">
                        Whether you are looking for a career change, or just picking up a useful skill this course is for you.{" "}
                      </p>
                    </div>
                  </Col>
                  <Col
                    md="6"
                    lg="10"
                    data-aos="fade-right"
                    data-aos-duration="1100"
                  >
                    <div className="single-widget mb-11">
                      <h3 className="w-title gr-text-7 mb-4">
                        Get a job/career change
                      </h3>
                      <p className="gr-text-9 mb-0">
                        Learn how to prepare and ace your programming interview!{" "}
                      </p>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Content;
