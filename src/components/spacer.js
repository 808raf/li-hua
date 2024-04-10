const spacer = () => {
  const main = document.querySelector("#content");

  const spacer = document.createElement("div");
  spacer.classList.add("spacer");

  main.appendChild(spacer);
};

export default spacer;
