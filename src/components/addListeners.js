import home from "./home";
import menu from "./menu";
import about from "./about";

const addListeners = () => {
  const homeBtn = document.querySelector(".homeBtn");
  const menuBtn = document.querySelector(".menuBtn");
  const aboutBtn = document.querySelector(".aboutBtn");

  homeBtn.addEventListener("click", home);
  menuBtn.addEventListener("click", menu);
  aboutBtn.addEventListener("click", about);
};

export default addListeners;
