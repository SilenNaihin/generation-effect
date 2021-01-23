import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import imgC2 from "../../assets/image/conference/png/Welcome-Screen.svg";
import imgCR from "../../assets/image/conference/png/content-2-round.svg";

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
              <div className="content-img position-relative mb-11 mb-lg-0">
                <img
                  src={imgC2}
                  alt=""
                  className="content2pic shadow-8 rounded-10 position-relative gr-z-index-1"
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
                <h2 className="title gr-text-4 mb-6">More than just a course</h2>
                <p className="gr-text-8 pr-lg-12 mb-0">
                  Learn how to program, best practices, how to ace your interview, and more.
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
                        Direct mentoring
                      </h3>
                      <p className="gr-text-9 mb-0">
                        Receive feedback and grades directly from the instructor. Hop into her office hours to get help!{" "}
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
                        Not just a programming course. Learn how to prepare and ace your programming interviews and more!{" "}
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
