import { useEffect } from "react";
import AOS from "aos";
import Main from "./Main";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-out-cubic",
      delay: 0,
    });
  }, []);

  return <Main />;
}

export default App;
