import React from "react";
import { Container, Row, Col } from "react-bootstrap";

// import imgC1 from "../../assets/image/conference/jpg/content-1-img.jpg";
import imgC1 from "../../assets/image/conference/png/Welcome-Screen.svg";
import imgCR from "../../assets/image/conference/png/content-1-round.svg";

const Content = () => {
  return (
    <>
      {/* <!-- Content Area --> */}
      <div className="content-section pt-13 pt-lg-29 pb-12 pb-lg-20 bg-default-6">
        <Container>
          <Row className="align-items-center justify-content-center">
            <Col xs="11" lg="6" data-aos="fade-right" data-aos-duration="1200">
              <div className="content-img position-relative mb-11 mb-lg-0">
                <img
                  src={imgC1}
                  alt=""
                  className="w-100 rounded-10 shadow-8 position-relative gr-z-index-1"
                />
                <div
                  className="gr-abs-tl-custom-3"
                  data-aos="fade-left"
                  data-aos-delay="500"
                  data-aos-duration="1200"
                >
                  <img src={imgCR} alt="" className="w-auto" />
                </div>
              </div>
            </Col>
            <Col xs="11" lg="6" xl="5" className="pl-lg-15">
              <div className="section-title content-text mb-13 mb-lg-15">
                <h2 className="title gr-text-4 mb-6">Computer programming is taught wrong</h2>
                <p className="gr-text-8 pr-lg-12 mb-0">
                  There is new research about the optimal way to learn.
                </p>
              </div>
              <div className="content-widget">
                <Row className="mb-n11">
                  <Col
                    md="6"
                    lg="10"
                    data-aos="fade-left"
                    data-aos-duration="750"
                  >
                    <div className="single-widget mb-11">
                      <h3 className="w-title gr-text-7 mb-4">
                        Guided by principles
                      </h3>
                      <p className="gr-text-9 mb-0">
                        The course is designed to maximize learning through using different learning principles.{" "}
                      </p>
                    </div>
                  </Col>
                  <Col
                    md="6"
                    lg="10"
                    data-aos="fade-left"
                    data-aos-duration="1100"
                  >
                    <div className="single-widget mb-11">
                      <h3 className="w-title gr-text-7 mb-4">
                        Optimized for your goals
                      </h3>
                      <p className="gr-text-9 mb-0">
                        Whether you are looking to pick up a crucial skill or are looking for a career change this course is perfect for you.{" "}
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
