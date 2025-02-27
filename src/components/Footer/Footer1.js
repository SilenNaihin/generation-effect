import React, { useContext } from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";

import GlobalContext from "../../context/GlobalContext";
import Logo from "../Logo";

const Footer = () => {
  const gContext = useContext(GlobalContext);

  const linkClassName =
    gContext.footer.theme === "dark"
      ? "gr-text-color gr-hover-text-green"
      : "gr-text-color gr-hover-text-blue";

  const iconClassName =
    gContext.footer.theme === "dark"
      ? "text-storm gr-hover-text-green"
      : "gr-text-color gr-hover-text-blue";

  return (
    <>
      <div
        className={`footer-section pt-15 pt-lg-25 pb-lg-21 ${
          gContext.footer.theme === "dark"
            ? "dark-mode-texts bg-blackish-blue"
            : ""
        }`}
      >
        <Container>
          <Row className="justify-content-center">
            <Col lg="3" md="4">
              <Logo
                white={gContext.footer.theme === "dark"}
                className="footer-logo mb-11"
              />
              <p className="gr-text-11">
                Learn and retain the knowledge required to acquire a job in the coding industry. <br></br><b>team@generationeffect.co</b>
              </p>
              <ul className="social-icons py-7 list-unstyled mb-7 mb-lg-0">
                <li className="mr-2">
                    <a className={iconClassName} href="https://www.twitter.com/">
                      <i className="icon icon-logo-twitter"></i>
                    </a>
                </li>
                <li className="mr-2">
                    <a className={iconClassName} href="https://www.facebook.com/iamhaileyrene1">
                      <i className="icon icon-logo-facebook"></i>
                    </a>
                </li>
              </ul>
            </Col>
            <Col lg="8" md="8" className="offset-lg-1">
              <Row>
                <Col xs="6" lg="3">
                  <div className="single-footer mb-13 mb-lg-9">
                    <p className="footer-title gr-text-11 mb-7">Company</p>
                    <ul className="footer-list list-unstyled gr-text-9">
                      <li className="py-2">
                        <Link href="/">
                          <a className={linkClassName}>About</a>
                        </Link>
                      </li>
                      <li className="py-2">
                        <Link href="/">
                          <a className={linkClassName}>Contact</a>
                        </Link>
                      </li>
                      <li className="py-2">
                        <Link href="/">
                          <a className={linkClassName}>Careers</a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </Col>
                <Col xs="6" lg="3">
                  <div className="single-footer mb-13 mb-lg-9">
                    <p className="footer-title gr-text-11 mb-7">Product</p>
                    <ul className="footer-list list-unstyled gr-text-9">
                      <li className="py-2">
                        <Link href="/">
                          <a className={linkClassName}>System</a>
                        </Link>
                      </li>
                      <li className="py-2">
                        <Link href="/">
                          <a className={linkClassName}>Pricing</a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </Col>
                <Col xs="6" lg="3">
                  <div className="single-footer mb-13 mb-lg-9">
                    <p className="footer-title gr-text-11 mb-7">Legal</p>
                    <ul className="footer-list list-unstyled gr-text-9">
                      <li className="py-2">
                        <Link href="/">
                          <a className={linkClassName}>Privacy Policy</a>
                        </Link>
                      </li>
                      <li className="py-2">
                        <Link href="/">
                          <a className={linkClassName}>
                            Terms &amp; Conditions
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Footer;
