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
                            <div className="px-md-7 mb-11 mb-lg-14">
                                <h2 className="title text-center gr-text-2 mb-9 mb-lg-12">Manifesto</h2>
                                <p className="gr-text-8 mb-0 text-left">
                                The status quo for coding education is bad. There are currently three options for one looking to learn how to code. <br></br>
                                    <ul>
                                        <li>You could go to an expensive university and pay hundreds of thousands. Even then, a study found that most CS grads aren't career ready right after university. </li>
                                        <li>You could teach yourself programming. From our personal experience venturing into the field on your own is difficult and intimidating, especially without any guidance, accountability, or help.</li>
                                        <li>You could do a bootcamp or course online, but most teach concepts without a purpose and without telling you the why behind those concepts. Most methods are boring and not very effective at actually teaching you programing.</li>
                                    </ul>
                                    Generation effect was created to provide you with guidance, and be specifically dedicated to your purpose of learning coding. <br></br>
                                    We utilize the new research about the science of learning to increase your understanding and retention of concepts. We TELL you why are you are learning something instead of just blindly telling you to follow us through the sections of the course.<br></br> 
                                    All of the problems that you would have had before are solved. Generation Effect provides a high quality of: <br></br> 
                                    <ul>
                                        <li>All of the problems that you would have had before are solved. Generation Effect provides a high quality of: </li>
                                        <li>Guidance - ask any questions by email or on call with the instructor. Get personalized feedback</li>
                                        <li>Accountability - emails and gamification to keep you on track</li>
                                        <li>Valuable price - instead of paying hundreds of thousands, pay less for a course that will teach you more, quicker</li>
                                        <li>Employability - if you are dedicated, expect to get a job after the course</li>
                                    </ul>
                                    Hailey is the perfect person to teach. She received two bachelors degrees in x and y in 2012. She had done multiple online courses such as this and that. She has been into high performance learning and teaching since she was young. She picked up programming on her own for this reason. <br></br>
                                    She landed a position at Google 2017, and worked for 3 years until 2020 when she wasn't satisfied. While she enjoyed working at Google, she didn't have closure about how others were learning coding. She started Generation Effect to solve these problems and provide a coding education for all, the right way. She also currently teaches a 'high performance' course at Minerva Schools at KGI. <br></br>
                                    Our commitments are to<br></br>
                                    <ul>
                                        <li>High quality</li>
                                        <li>High responsiveness</li>
                                        <li>Consistency</li>
                                        <li>Be passionate about our students</li>
                                        <li>Work 24/7 to solve this problem</li>
                                    </ul>
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