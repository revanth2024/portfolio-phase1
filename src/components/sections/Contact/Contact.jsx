import React, { useRef, useState } from "react";
import "./Contact.scss";
import { Col, Container, Row } from "react-bootstrap";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { FaArrowRight, FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import emailjs from "@emailjs/browser";

function Contact() {
  const formRef = useRef();
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    emailjs
      .sendForm(
        "service_5w2eg9h",
        "template_4o66foh",
        formRef.current,
        "0rDS12dou2aLUaPK-"
      )
      .then(
        () => {
          toast.success("Thanks for reaching out. I’ll be in touch soon.");
          formRef.current?.reset();
        },
        () => toast.error("Your message could not be sent. Please try again."),
      )
      .finally(() => setIsSending(false));
  };

  return (
    <>
      <section className="contact-section" id="contact">
        <Container>
          <div className="contact-heading">
            <h2>Get in Touch</h2>
            <div className="underline-animation" />
            <p className="contact-intro">
              Have a project in mind or a role you think I’d be a good fit for?
              Send me a message.
            </p>
          </div>
          <Row className="contact-layout align-items-stretch">
            <Col lg={5} className="d-flex">
              <aside className="contact-info">
                <h3>Let’s start a conversation</h3>
                <p>
                  I’m open to discussing full-stack opportunities, product
                  ideas, and collaborations.
                </p>
                <a href="mailto:revanth2899@gmail.com" className="contact-method">
                  <span className="contact-method-icon" aria-hidden="true">
                    <FaEnvelope />
                  </span>
                  <span>
                    <small>Email</small>
                    revanth2899@gmail.com
                  </span>
                  <FaArrowRight className="contact-method-arrow" aria-hidden="true" />
                </a>
                <a href="tel:+918056812955" className="contact-method">
                  <span className="contact-method-icon" aria-hidden="true">
                    <FaPhone />
                  </span>
                  <span>
                    <small>Phone</small>
                    +91 80568 12955
                  </span>
                  <FaArrowRight className="contact-method-arrow" aria-hidden="true" />
                </a>
                <div className="contact-method">
                  <span className="contact-method-icon" aria-hidden="true">
                    <FaMapMarkerAlt />
                  </span>
                  <span>
                    <small>Location</small>
                    Chennai, Tamil Nadu
                  </span>
                </div>
              </aside>
            </Col>
            <Col lg={7} className="d-flex">
              <Box
                ref={formRef}
                onSubmit={sendEmail}
                className="contact-form"
                component="form"
                autoComplete="on"
                sx={{
                  "& .MuiTextField-root": {
                    width: "100%",
                  },
                  "& .MuiOutlinedInput-root": {
                    color: "var(--text-color)",
                    backgroundColor: "var(--surface-color)",
                    borderRadius: "10px",
                    "& fieldset": {
                      borderColor: "var(--surface-border)",
                    },
                    "&:hover fieldset": {
                      borderColor: "var(--heading-color)",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "var(--heading-color)",
                    },
                  },
                  "& .MuiInputLabel-root": {
                    color: "var(--muted-color)",
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "var(--heading-color)",
                  },
                }}
              >
                <div className="contact-form-heading">
                  <h3>Send a message</h3>
                </div>
                <div className="form-flex">
                  <TextField
                    id="contact-name"
                    label="Your Name"
                    variant="outlined"
                    name="from_name"
                    autoComplete="name"
                    required
                  />
                  <TextField
                    id="contact-email"
                    label="Your Email"
                    variant="outlined"
                    name="from_email"
                    type="email"
                    autoComplete="email"
                    required
                  />
                </div>
                <div className="form-flex">
                  <TextField
                    id="contact-mobile"
                    label="Mobile Number"
                    variant="outlined"
                    name="mobile_number"
                    type="tel"
                    autoComplete="tel"
                    required
                  />
                  <TextField
                    id="contact-subject"
                    label="Subject"
                    variant="outlined"
                    name="your_subject"
                    required
                  />
                </div>
                <TextField
                  id="contact-message"
                  label="Your Message"
                  multiline
                  minRows={5}
                  variant="outlined"
                  name="message"
                  required
                />
                <button
                  type="submit"
                  className="submit-btn"
                  disabled={isSending}
                >
                  <span>{isSending ? "Sending..." : "Send Message"}</span>
                  {!isSending && <FaArrowRight aria-hidden="true" />}
                </button>
              </Box>
            </Col>
          </Row>
          <ToastContainer
            position="bottom-left"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop
            closeOnClick
            rtl={false}
            pauseOnFocusLoss={false}
            draggable
            pauseOnHover={false}
            theme="light"
          />
        </Container>
      </section>
    </>
  );
}

export default Contact;
