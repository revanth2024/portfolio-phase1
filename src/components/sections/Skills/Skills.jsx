import { Col, Container, Row } from "react-bootstrap";
import { technology } from "../../../utils/technologyIcons";
import "./Skills.scss";

const skillGroups = [
  {
    name: "Frontend",
    skills: [
      technology("HTML5", "html5", "E34F26"),
      technology("CSS3", "css", "1572B6"),
      technology("SCSS", "sass", "CC6699"),
      technology("Tailwind CSS", "tailwindcss", "06B6D4"),
      technology("Bootstrap", "bootstrap", "7952B3"),
      technology("jquery", "jquery", "0769AD"),
      technology("JavaScript", "javascript", "F7DF1E"),
      technology("React.js", "react", "61DAFB"),
      technology("Next.js", "nextdotjs", "000000"),
    ],
  },
  {
    name: "Backend & APIs",
    skills: [
      technology("Node.js", "nodedotjs", "339933"),
      technology("Express.js", "express", "000000"),
      technology("REST APIs", "swagger", "85EA2D"),
      technology("JWT Authentication", "jsonwebtokens", "000000"),
      technology("Firebase", "firebase", "DD2C00"),
    ],
  },
  {
    name: "Database & State",
    skills: [
      technology("MongoDB", "mongodb", "47A248"),
      technology("Mongoose", "mongoose", "880000"),
      technology("Redux Toolkit", "redux", "764ABC"),
      technology("Firebase Realtime Database", "firebase", "DD2C00"),
    ],
  },
  {
    name: "Integrations & Tools",
    skills: [
      technology("Razorpay", "razorpay", "0C2451"),
      technology("Strapi CMS", "strapi", "4945FF"),
      technology("Git", "git", "F05032"),
      technology("GitHub", "github", "181717"),
      technology("Postman", "postman", "FF6C37"),
      technology("Figma", "figma", "F24E1E"),
    ],
  },
  {
    name: "Deployment",
    skills: [
      technology("Vercel", "vercel", "000000"),
      technology("Firebase", "firebase", "DD2C00"),
      technology("Hostinger", "hostinger", "673DE6"),
      technology("AWS", "amazonaws", "FF9900"),
    ],
  },
];

function Skills() {
  return (
    <section className="skills-section" id="skills">
      <Container>
        <Row>
          <Col xxl={12}>
            <div className="skills-heading" data-aos="zoom-in-up">
              <h2>Technical Skills</h2>
              <div className="underline-animation" />
              <p>
                Core technologies I use to build and support production-ready
                full-stack applications.
              </p>
            </div>
          </Col>
        </Row>
        <div className="skills-grid">
          {skillGroups.map((group) => (
            <article
              className="skill-category"
              data-aos="fade-up"
              key={group.name}
            >
              <h3>{group.name}</h3>
              <ul className="skill-tags">
                {group.skills.map((skill) => (
                  <li className="skill-chip" key={skill.name}>
                    <img
                      src={skill.icon}
                      alt=""
                      loading="lazy"
                      aria-hidden="true"
                    />
                    <span>{skill.name}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Skills;
