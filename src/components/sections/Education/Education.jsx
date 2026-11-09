import { Container } from "react-bootstrap";
import {
  FaCalendarAlt,
  FaGraduationCap,
  FaMapMarkerAlt,
} from "react-icons/fa";
import "./Education.scss";

const education = [
  {
    program: "Master of Computer Applications (MCA)",
    institution: "Alagappa University",
    period: "2026 · Expected 2028 (Distance Education)",
    location: "Karaikudi, Tamil Nadu",
    // mode: "Distance education",
    current: true,
  },
  {
    program: "B.Sc. Mathematics",
    institution: "Sacred Heart College of Arts and Science",
    period: "2017 – 2020",
    location: "Dindigul, Tamil Nadu",
    // mode: "Undergraduate",
  },
  {
    program: "Higher Secondary Certificate (HSC)",
    institution: "ICI Govt Boys Hr. Sec. School",
    period: "2015 – 2017",
    location: "Tenkasi, Tamil Nadu",
    // mode: "School education",
  },
  {
    program: "Secondary School Leaving Certificate (SSLC)",
    institution: "ICI Govt Boys Hr. Sec. School",
    period: "2013 – 2015",
    location: "Tenkasi, Tamil Nadu",
    // mode: "School education",
  },
];

function Education() {
  return (
    <section className="education-section" id="education">
      <Container>
        <div className="education-heading">
          <h2>Education</h2>
          <div className="underline-animation" />
          <p className="education-intro">
            The academic milestones that have contributed to my knowledge and growth.
          </p>
        </div>
        <ol className="education-timeline">
          {education.map((item, index) => (
            <li
              className={`education-step${item.current ? " is-current" : ""}`}
              key={item.program}
              data-aos="fade-up"
              data-aos-delay={index * 80}
            >
              <span className="education-step-number" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <article
                className="education-card"
                aria-current={item.current ? "step" : undefined}
              >
                <div className="education-card-icon" aria-hidden="true">
                  <FaGraduationCap />
                </div>
                <div className="education-card-content">
                  <div className="education-card-heading">
                    {/* <span className="education-mode">{item.mode}</span> */}
                    {/* {item.current && (
                      <span className="education-current-label">
                        Currently pursuing
                      </span>
                    )} */}
                  </div>
                  <h3>{item.program}</h3>
                  <h4>{item.institution}</h4>
                  <p>
                    <FaCalendarAlt aria-hidden="true" />
                    <span>{item.period}</span>
                  </p>
                  <p>
                    <FaMapMarkerAlt aria-hidden="true" />
                    <span>{item.location}</span>
                  </p>
                </div>
              </article>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}

export default Education;
