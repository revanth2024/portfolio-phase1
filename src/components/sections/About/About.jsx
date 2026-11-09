import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./About.scss";
import { FaArrowRight } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import ResumePDF from "../../shared/Resume/Revanth_Resume_MERN_Stack_Developer.pdf";

function About() {
  const aboutDetails = [
    "A dedicated Full-stack developer with 3.2 years of professional experience building and maintaining production-ready applications with React.js, Next.js, Sass, JavaScript, Node.js, Express.js, and MongoDB.",
    "Experienced in developing responsive user interfaces, integrating REST APIs, implementing authentication and role-based access control (RBAC), integrating payment gateways, and managing deployments and production support.",
  ];
  return (
    <>
      <section className="about-section" id="about">
        <Container>
          <Row className="align-items-center">
            <Col xxl={5} xl={5} lg={5} md={8} sm={12}>
              <div
                className="iframe-container"
                data-aos="zoom-in"
                data-aos-easing="ease-out-cubic"
                data-aos-delay="0"
              >
                <iframe
                  title="About-img"
                  src="https://lottie.host/embed/eaca4c6b-f3b9-49bd-b3a1-843600a10d2d/el7Os1W3mt.json"
                ></iframe>{" "}
              </div>
            </Col>
            <Col xxl={7} xl={7} lg={7} md={12} sm={12}>
              <div className="about-content" data-aos="zoom-in-up">
                <h2>About Me</h2>
                <div className="underline-animation"></div>
              </div>
              <div className="about-list">
                <ul>
                  {aboutDetails.map((data) => (
                    <li
                      key={data}
                      data-aos="zoom-in-up"
                      data-aos-easing="ease-out-cubic"
                      data-aos-delay="0"
                    >
                      <FaArrowRight />
                      {data}
                    </li>
                  ))}
                </ul>
              </div>
              <dl
                className="personal-detail"
                data-aos="zoom-in-up"
                data-aos-easing="ease-out-cubic"
                data-aos-delay="0"
              >
                <div className="detail-row">
                  <dt>Name :</dt>
                  <dd>Revanth R</dd>
                </div>
                <div className="detail-row">
                  <dt>Email :</dt>
                  <dd>
                    <a href="mailto:revanth2899@gmail.com">
                      revanth2899@gmail.com
                    </a>
                  </dd>
                </div>
                <div className="detail-row">
                  <dt>Mobile :</dt>
                  <dd>
                    <a href="tel:+918056812955">+91 80568 12955</a>
                  </dd>
                </div>
                <div className="detail-row">
                  <dt>Role :</dt>
                  <dd>React Developer, Full-Stack Developer</dd>
                </div>
                <div className="detail-row">
                  <dt>Location :</dt>
                  <dd>Thoraipakkam, Chennai - 600097</dd>
                </div>
              </dl>
              <div>
                <a
                  href={ResumePDF}
                  className="contact-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button>
                    <MdDownload />
                    Download CV
                  </button>
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default About;
