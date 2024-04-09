import logo from "./logo.png";

const navBar = () => {
  const header = document.createElement("header");

  const nav = document.createElement("nav");
  nav.setAttribute("id", "nav-bar");

  const imgDiv = document.createElement("div");

  const img = document.createElement("img");
  img.src = logo;
  img.alt = "Li Hua Logo";
  img.setAttribute("id", "logo");

  const navLinks = document.createElement("div");
  navLinks.classList.add("nav-links");

  const home = document.createElement("button");
  home.textContent = "Home";

  const menu = document.createElement("button");
  menu.textContent = "Menu";

  const contact = document.createElement("button");
  contact.textContent = "Contact Us";

  header.appendChild(nav);
  nav.append(imgDiv, navLinks);
  imgDiv.appendChild(img);
  navLinks.append(home, menu, contact);

  return header;
};

export default navBar;
