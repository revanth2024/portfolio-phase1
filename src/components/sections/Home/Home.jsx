import React from "react";
import "./Home.scss";
import { Col, Container, Row } from "react-bootstrap";
import Typewriter from "typewriter-effect";
import profileImage from "./Images/profile-picture.png";
import { TiLocationArrow } from "react-icons/ti";
import Social from "./Social";

function Home() {
  return (
    <>
      <section className="hero-section" id="home">
        <Container>
          <Row className="align-items-center justify-content-between banner-section">
            <Col xxl={6} xl={6} lg={7} md={6} sm={12} className="hero-content">
              <h2>
                Hi, I'm <span>Revanth</span>
              </h2>
              <h1>
                I'm a{"  "}
                <span>
                  <Typewriter
                    options={{
                      strings: [
                        "Full-Stack Developer",
                        "MERN Stack Developer",
                        "React.js Developer",
                        "Next.js Developer",
                      ],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 0,
                      delay: 20,
                      pauseFor: 1000,
                      cursor: "|",
                    }}
                  />
                </span>
              </h1>

              <p
                data-aos="fade-up"
                data-aos-easing="ease-out-cubic"
                data-aos-delay="0"
              >
                Full-stack developer with 3.2 years of professional experience
                building production-ready web applications with React, Next.js,
                Node.js, Express, and MongoDB. I create responsive,
                user-friendly interfaces and reliable end-to-end experiences.
              </p>
              <a href="mailto:revanth2899@gmail.com" className="main-btn">
                <button data-aos="fade-up">
                  <TiLocationArrow />
                  Let's Connect
                </button>
              </a>
              <Social />
            </Col>
            <Col xxl={4} xl={4} lg={4} md={6} sm={8}>
              <div className="hero-image">
                <img
                  src={profileImage}
                  alt="Revanth R, Full-Stack Developer"
                  fetchPriority="high"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
export default Home;
