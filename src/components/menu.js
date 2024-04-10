import clearView from "./clearView";

const menu = () => {
  clearView();
  const main = document.querySelector("#content");

  const spacer = document.createElement("div");
  spacer.classList.add("spacer");

  main.appendChild(spacer);
};

export default menu;
