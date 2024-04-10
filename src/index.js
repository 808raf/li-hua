import "./style.css";
import home from "./components/home.js";
import navBar from "./components/navbar.js";
import footer from "./components/footer.js";
import addListeners from "./components/addListeners.js";

const body = document.querySelector("body");
body.prepend(navBar());
body.appendChild(footer());

home();
addListeners();
