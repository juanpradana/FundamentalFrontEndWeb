import "regenerator-runtime";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/style.css";
import "./scripts/components/application-bar.js";
import "./scripts/components/main-window.js";
import main from "./scripts/view/main.js";

document.addEventListener("DOMContentLoaded", main);
