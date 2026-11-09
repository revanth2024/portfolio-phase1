import React from "react";
import "./Footer.scss";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <>
      <section className="footer-section">
        <Container>
          <Row>
            <Col>
              <p className="footer-content">
                &copy; {new Date().getFullYear()}, Designed and developed by{" "}
                <a
                  href="https://www.linkedin.com/in/revanthravichandran/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Revanth
                </a>
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};
export default Footer;
