import BlurBackground from "../components/shared/blur-background/BlurBackground";
import ColorTheme from "../components/shared/color-theme/ColorTheme";
import ScrollToTop from "../components/shared/scroll-to-top/ScrollToTop";
import About from "../components/sections/About/About";
import Contact from "../components/sections/Contact/Contact";
import Education from "../components/sections/Education/Education";
import Experience from "../components/sections/Experience/Experience";
import Footer from "../components/sections/Footer/Footer";
import Header from "../components/sections/Header/Header";
import Home from "../components/sections/Home/Home";
import Projects from "../components/sections/Projects/Projects";
import Recognition from "../components/sections/Recognition/Recognition";
import Skills from "../components/sections/Skills/Skills";

function Main() {
  return (
    <>
      <BlurBackground />
      <ScrollToTop />
      <ColorTheme />
      <Header />
      <Home />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Projects />
      <Recognition />
      <Contact />
      <Footer />
    </>
  );
}

export default Main;
