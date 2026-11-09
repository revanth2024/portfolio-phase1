import React from "react";
import ScrollToTop from "react-scroll-to-top";
import { FiArrowUp } from "react-icons/fi";
import "./ScrollToTop.scss";

function ScrollToTopButton() {
  return (
    <>
      <div className="scroll-top">
        <ScrollToTop smooth component={<FiArrowUp />} />
      </div>
    </>
  );
}

export default ScrollToTopButton;
