import home from "./home";
import menu from "./menu";
import location from "./location";

const listener = () => {
  const homeBtn = document.querySelector(".homeBtn");
  const menuBtn = document.querySelector(".menuBtn");
  const locationBtn = document.querySelector(".locationBtn");

  homeBtn.addEventListener("click", home);
  menuBtn.addEventListener("click", menu);
  locationBtn.addEventListener("click", location);
};

export default listener;
