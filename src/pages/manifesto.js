import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import PageWrapper from "../components/PageWrapper";

const Manifesto = () => {
    return (
        <>
            <PageWrapper
                headerConfig={{
                    align: "right",
                    button: "account", // cta, account, null
                }}
                footerConfig={{
                    style: "style1", //style1, style2
                  }}
            >
             <div className="inner-banner">
                 <Container>
                    <Row className="justify-content-center mt-md-6 pt-24 pt-lg-29">
                        <Col lg="9" xl="8">
                            <div className="px-md-7 text-center mb-11 mb-lg-14">
                                <h2 className="title gr-text-2 mb-9 mb-lg-12">Manifesto</h2>
                                <p className="gr-text-8 mb-0">
                                    With lots of unique blocks, you can easily build a page
                                    without coding. Build your next consultancy website within
                                    few minutes. <br></br> Yes
                                </p>
                            </div>
                        </Col>
                    </Row>
                 </Container>

             </div>
                </PageWrapper></>
    );
};
export default Manifesto;