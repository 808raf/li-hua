import "./style.css";
import home from "./components/home.js";
import navBar from "./components/navbar.js";
import footer from "./components/footer.js";
import listener from "./components/listener.js";

const body = document.querySelector("body");
body.prepend(navBar());
body.appendChild(footer());

home();
listener();
