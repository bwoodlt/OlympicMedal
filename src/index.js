import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { App } from "./components";
import "./styles/main.css";
import "./styles/animation.css";
import "./styles/toggle.css";
import "./styles/root.css";

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
