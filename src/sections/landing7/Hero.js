import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

import bgHero from "../../assets/image/conference/png/hero-bg.svg";
import imgHero from "../../assets/image/conference/png/hero-main.svg";

const Hero = () => {
  return (
    <>
      {/* <!-- Hero Area --> */}
      <div className="bg-default-6 pt-18 position-relative">
        <div
          className="hero-area bg-image dark-mode-texts mx-6 mx-lg-9 rounded-15"
          css={`
            background-image: url(${bgHero});
          `}
        >
          <Container>
            <Row className="justify-content-sm-end">
              <Col lg="6" md="8">
                <div className="hero-content pr-xl-16 pt-18 pt-lg-31 pb-md-18 pb-lg-30 mb-9 mb-md-0">
                  <h6 className="gr-text-12 text-uppercase mb-8">
                    The ultimate way to learn
                  </h6>
                  <h1 className="title gr-text-2 mb-8">Generation Effect</h1>
                  <p className="gr-text-8 mb-0">
                    Leverage the way your brain was built to maximize information retention.
                    Learn from a Google engineer who quit her job to pursue education.
                  
                  </p>
                  <Button variant="hero" className=" mt-11">
                    Join now
                  </Button>
                </div>
              </Col>
              <Col
                lg="5"
                md="4"
                sm="7"
                className="offset-lg-1 align-self-sm-end"
              >
                <div
                  className="hero-img hero-img-custom z-index-1 mb-n12 mb-md-0"
                  data-aos="fade-left"
                  data-aos-duration="1000"
                  data-aos-delay="500"
                >
                  <img className="w-100 w-xl-auto" src={imgHero} alt="" />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Hero;
