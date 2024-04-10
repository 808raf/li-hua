import home from "./home";
import menu from "./menu";
import about from "./about";

const listener = () => {
  const homeBtn = document.querySelector(".homeBtn");
  const menuBtn = document.querySelector(".menuBtn");
  const locationBtn = document.querySelector(".locationBtn");

  homeBtn.addEventListener("click", home);
  menuBtn.addEventListener("click", menu);
  locationBtn.addEventListener("click", about);
};

export default listener;
