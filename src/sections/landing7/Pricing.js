import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import Input from "../../components/Core/Input.js";

const Pricing = () => {
  return (
    <>
    {/* Import */}
      {/* <!-- Pricing Area --> */}
      <div className="pricing-section pt-14 pb-9 pt-lg-25 pb-lg-25 bg-default-2">
        <Container>
          <Row className="justify-content-center">
            <Col xl="6" lg="8" md="10">
              <div className="section-title text-center mb-12 mb-lg-21">
                <h2 className="title gr-text-4 mb-6">
                  Take the step
                </h2>
                <p className="gr-text-8 px-lg-7 px-xl-0">
                  The best investments are those that compound. This is one of those investments.
                </p>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg="4" md="6" sm="10" className="mb-9">
              {/* <!-- .pricing card --> */}
              <div className="pricing-card gr-hover-shadow-1 bg-white border rounded-10 text-center pt-10 pb-12 px-9 px-xl-15">
                <span className="badge gr-badge text-primary gr-bg-blue-opacity-1 rounded-pill gr-text-12 text-uppercase">
                  Starter
                </span>
                <h2 className="price-value gr-text-3 font-weight-bold text-blackish-blue line-spacing-none mb-2 mt-8">
                  Free
                </h2>
                <p className="gr-text-9 mb-7 gr-color-blackish-blue-opacity-7">
                  Intro section
                </p>
                <ul className="card-list list-style-border text-center pl-0 mt-9 mb-3 mx-auto">
                  <li className="text-blackish-blue gr-text-9 mb-0 py-3 d-block">
                    Introductory section
                  </li>
                  <li className="text-blackish-blue gr-text-9 mb-0 py-3 d-block">
                    Exclusive offers
                  </li>
                  <li className="text-blackish-blue gr-text-9 mb-0 py-3 d-block">
                    Weekly programming and interview tips 
                  </li>
                  <li className="text-blackish-blue gr-text-9 mb-0 py-3 d-block">
                    Free foundational call
                  </li>
                </ul>
                <Input className="w-100 mt-7">
                </Input>
                <span className="btn-bottom-text d-block gr-text-11 text-blackish-blue gr-opacity-7 mt-5">
                  No sign up required
                </span>
              </div>
              {/* <!-- /.pricing card Ends--> */}
            </Col>
            <Col lg="4" md="6" sm="10" className="mb-9">
              {/* <!-- .pricing card --> */}
              <div className="pricing-card gr-hover-shadow-1 bg-white border rounded-10 text-center pt-10 pb-12 px-9 px-xl-15">
                <span className="badge gr-badge text-primary gr-bg-blue-opacity-1 rounded-pill gr-text-12 text-uppercase">
                  Full Course
                </span>
                <h2 className="price-value gr-text-3 font-weight-bold text-blackish-blue line-spacing-none mb-2 mt-8">
                  Contact
                </h2>
                <p className="gr-text-9 mb-7 gr-color-blackish-blue-opacity-7">
                  team@generationeffect.co
                </p>
                <ul className="card-list list-style-border text-center pl-0 mt-9 mb-3 mx-auto">
                  <li className="text-blackish-blue gr-text-9 mb-0 py-3 d-block">
                    Full course: 10 unique sections
                  </li>
                  <li className="text-blackish-blue gr-text-9 mb-0 py-3 d-block">
                    Interview training &amp; learning how to learn
                  </li>
                  <li className="text-blackish-blue gr-text-9 mb-0 py-3 d-block">
                    Unlimited meeting time
                  </li>
                  <li className="text-blackish-blue gr-text-9 mb-0 py-3 d-block">
                    Personalized feedback
                  </li>
                  <li className="text-blackish-blue gr-text-9 mb-0 py-3 d-block">
                    Learn full stack programming
                  </li>
                </ul>
                <Button className="gr-hover-y w-100 mt-7 gr-text-9">
                  Get Started
                </Button>
              </div>
              {/* <!-- /.pricing carde Ends--> */}
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Pricing;
