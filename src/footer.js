const footer = () => {
  const footerContainer = document.createElement("div");
  footerContainer.classList.add("footer-container");

  const footerEl = document.createElement("footer");
  footerEl.classList.add("footer");

  const p = document.createElement("p");
  p.innerHTML = "&copy; 2024 ";
  footerEl.appendChild(p);

  const a = document.createElement("a");
  a.href = "https://github.com/808raf";
  a.textContent = "808raf";
  p.appendChild(a);

  footerContainer.appendChild(footerEl);

  return footerContainer;
};

export default footer;
