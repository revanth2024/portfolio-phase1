import { Col, Container, Row } from "react-bootstrap";
import { FaAward, FaMapMarkerAlt } from "react-icons/fa";
import gsusAwardImage from "./Images/gsus-award.jpeg";
import "./Recognition.scss";

const awards = [
  {
    title: "Star Developer Award",
    organization: "GSUS Star Software Solutions Private Limited",
    description:
      "Recognized for exceptional development skills, creative problem-solving, continuous improvement, and a strong commitment to delivering impactful solutions through teamwork and innovation.",
    location: "Rajapalayam, Tamil Nadu",
    image: gsusAwardImage,
    imageAlt: "Revanth at the GSUS Star Software Solutions award ceremony",
  },
  {
    title: "Technical Excellence Award",
    organization: "Andril Web Technologies",
    description:
      "Honored for demonstrating technical excellence, innovative thinking, strong problem-solving skills, and a commitment to building efficient and reliable software solutions.",
    location: "Chennai, Tamil Nadu",
  },
];

function Recognition() {
  return (
    <section className="recognition-section" id="recognition">
      <Container>
        <Row>
          <Col>
            <div className="recognition-heading">
              <h2>Recognition</h2>
              <div className="underline-animation" />
              <p>
                A proud achievement built on hard work, collaboration, and
                continuous learning.
              </p>
            </div>
          </Col>
        </Row>
        <Row className="recognition-layout">
          {awards.map((award, index) => (
            <Col md={6} className="d-flex mt-4" key={award.organization}>
              <article
                className="award-card"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="award-media">
                  {award.image ? (
                    <img
                      className="award-photo"
                      src={award.image}
                      alt={award.imageAlt}
                      loading="lazy"
                    />
                  ) : (
                    <div className="award-photo-placeholder" aria-hidden="true">
                      <div className="award-icon">
                        <FaAward />
                      </div>
                    </div>
                  )}
                </div>
                <h3>{award.title}</h3>
                <p className="award-organization">{award.organization}</p>
                <p className="award-description">{award.description}</p>
                <p className="award-location">
                  <FaMapMarkerAlt aria-hidden="true" />
                  {award.location}
                </p>
              </article>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Recognition;
