import React from "react";
import ReactDOM from "react-dom/client";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/global.scss";
import App from "./app/App";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error('The application root element with id "root" was not found.');
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
