import React, { useMemo, useState } from "react";
import { Container } from "react-bootstrap";
import "./Projects.scss";

import { GiStarShuriken } from "react-icons/gi";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Modal, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { projects } from "./projectData";

import { Autoplay, Navigation, Pagination } from "swiper/modules";

const projectTabs = [
  { id: "web-app", label: "Web Applications" },
  { id: "website", label: "Websites" },
];

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: "800px",
  width: "min(92vw, 800px)",
  height: "min(85vh, 900px)",
  overflowY: "auto",
  bgcolor: "background.paper",
  boxShadow: 10,
  background:
    "linear-gradient(90deg, rgb(1, 32, 68) 0%, rgb(0, 79, 125) 50%, rgba(0, 30, 63, 1) 100%)",
  borderRadius: "8px",
  outline: "0",
  padding: "clamp(20px, 5vw, 37px)",
};

const Projects = () => {
  const [open, setOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);
  const [activeCategory, setActiveCategory] = useState(projectTabs[0].id);
  const visibleProjects = useMemo(
    () => projects.filter((project) => project.category === activeCategory),
    [activeCategory],
  );

  const handleTabKeyDown = (event, currentIndex) => {
    let nextIndex = currentIndex;

    if (event.key === "ArrowRight") {
      nextIndex = (currentIndex + 1) % projectTabs.length;
    } else if (event.key === "ArrowLeft") {
      nextIndex = (currentIndex - 1 + projectTabs.length) % projectTabs.length;
    } else if (event.key === "Home") {
      nextIndex = 0;
    } else if (event.key === "End") {
      nextIndex = projectTabs.length - 1;
    } else {
      return;
    }

    event.preventDefault();
    const nextTab = projectTabs[nextIndex];
    setActiveCategory(nextTab.id);
    document.getElementById(`project-tab-${nextTab.id}`)?.focus();
  };

  const handleOpen = (project) => {
    setCurrentProject(project);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setCurrentProject(null);
  };

  return (
    <>
      <section className="project-section" id="project">
        <Container>
          <div className="project-heading">
            <h2>Selected Projects & Applications</h2>
            <div className="underline-animation" />
            <p>
              Explore my web development projects, featuring responsive websites
              and functional web applications.
            </p>
          </div>
          <div
            className="projects-tabs"
            role="tablist"
            aria-label="Project categories"
          >
            {projectTabs.map((tab, index) => (
              <button
                type="button"
                role="tab"
                id={`project-tab-${tab.id}`}
                aria-selected={activeCategory === tab.id}
                tabIndex={activeCategory === tab.id ? 0 : -1}
                aria-controls="project-panel"
                className={`projects-tab${activeCategory === tab.id ? " is-active" : ""}`}
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                onKeyDown={(event) => handleTabKeyDown(event, index)}
              >
                {tab.label}
                {/* <span>
                  {
                    projects.filter((project) => project.category === tab.id)
                      .length
                  }
                </span> */}
              </button>
            ))}
          </div>
          <div
            role="tabpanel"
            id="project-panel"
            aria-labelledby={`project-tab-${activeCategory}`}
          >
            <Swiper
              key={activeCategory}
              className="projects-swiper"
              modules={[Autoplay, Navigation, Pagination]}
              slidesPerView={1}
              spaceBetween={20}
              grabCursor
              navigation
              pagination={{ clickable: true }}
              autoplay={{
                delay: 50000000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              breakpoints={{
                768: { slidesPerView: 2, spaceBetween: 24 },
              }}
            >
              {visibleProjects.map((data) => (
                <SwiperSlide key={data.name}>
                  <article className="project-card">
                    <button
                      type="button"
                      className="project-image-button"
                      onClick={() => handleOpen(data)}
                      aria-label={`View ${data.name} screenshots`}
                    >
                      <img src={data.img} alt="" className="project-img" />
                    </button>
                    <div className="project-card-content">
                      <h3>{data.name}</h3>
                      <div
                        className="tools-section"
                        aria-label="Technologies used"
                      >
                        {data.tools.map((tool) => (
                          <img
                            key={tool.name}
                            src={tool.icon}
                            alt={tool.name}
                            title={tool.name}
                            loading="lazy"
                          />
                        ))}
                      </div>
                      <div className="details-section">
                        <button
                          type="button"
                          className="description"
                          onClick={() => handleOpen(data)}
                        >
                          {data.url ? "Project Details" : "View UI Preview"}
                        </button>
                        {data.url && (
                          <a
                            href={data.url}
                            className="live-url"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            View Live
                          </a>
                        )}
                      </div>
                    </div>
                  </article>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </Container>

        {/* POPUP  */}
        {currentProject && (
          <Modal open={open} onClose={handleClose}>
            <Box
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-modal-title"
              sx={modalStyle}
            >
              <Typography
                component="div"
                id="modal-modal-title"
                sx={{ position: "relative", top: 10 }}
              >
                <h4 className="des-heading">{currentProject.name}</h4>
              </Typography>

              <IconButton
                aria-label="close"
                onClick={handleClose}
                sx={{
                  position: "absolute",
                  right: 10,
                  top: 10,
                  color: "white",
                }}
              >
                <CloseIcon />
              </IconButton>

              <Swiper
                key={currentProject.name}
                slidesPerView={1}
                navigation
                // pagination={{ clickable: true }}
                modules={[Navigation, Pagination]}
                className="project-preview-swiper"
              >
                {currentProject.sliderImg.map((swipeimg, index) => (
                  <SwiperSlide key={index} className="popup-img">
                    <img
                      src={swipeimg}
                      width={"100%"}
                      alt={currentProject.name}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
              <Typography component="div" id="modal-description-title">
                <h5 className="des-title">Description :</h5>
              </Typography>

              {currentProject.description.map((content, Index) => (
                <Typography
                  className="modal-description"
                  sx={{ mt: 2 }}
                  key={Index}
                >
                  <GiStarShuriken />
                  <span className="des-content">{content}</span>
                </Typography>
              ))}
              {currentProject.url && (
                <a
                  href={currentProject.url}
                  className="live-url-modal"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Live
                </a>
              )}
            </Box>
          </Modal>
        )}
      </section>
    </>
  );
};

export default Projects;
