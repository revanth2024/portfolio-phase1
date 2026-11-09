import { Col, Container, Row } from "react-bootstrap";
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import "./Experience.scss";

const experience = [
  {
    role: "Full-Stack Developer",
    company: "GSUS Star Software Solutions Private Limited",
    period: "October 2024 – June 2026",
    duration: "1 year 8 months",
    location: "Rajapalayam, Tamil Nadu",
  },
  {
    role: "Frontend Developer",
    company: "Andril Web Technologies",
    period: "April 2023 – October 2024",
    duration: "1 year 6 months",
    location: "Vadapalani, Chennai",
  },
];

function Experience() {
  return (
    <section className="experience-section" id="experience">
      <Container>
        <div className="experience-heading">
          <h2>Professional Experience</h2>
          <div className="underline-animation" />
        </div>
        <Row className="experience-grid">
          {experience.map((item, index) => (
            <Col lg={6} className="d-flex mt-4" key={item.company}>
              <article
                className="experience-card"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="experience-card-top">
                  <span className="experience-icon" aria-hidden="true">
                    <FaBriefcase />
                  </span>
                  <span className="experience-duration">{item.duration}</span>
                </div>
                <h3>{item.role}</h3>
                <h4>{item.company}</h4>
                <div className="experience-meta">
                  <span>
                    <FaCalendarAlt aria-hidden="true" />
                    {item.period}
                  </span>
                  <span>
                    <FaMapMarkerAlt aria-hidden="true" />
                    {item.location}
                  </span>
                </div>
              </article>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Experience;
