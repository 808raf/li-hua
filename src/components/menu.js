import clearView from "./clearView";
import spacer from "./spacer";
import tea from "../assests/tea.jpg";
import traditional from "../assests/traditional.jpg";
import saltyCream from "../assests/salty-cream.jpg";
import brownSugar from "../assests/brown-sugar.jpg";

const menu = () => {
  clearView();
  spacer();

  const content = document.querySelector("#content");

  const menuTitleWrapper = document.createElement("div");
  menuTitleWrapper.classList.add("menu-title-wrapper");

  const h2 = document.createElement("h2");
  h2.classList.add("menu-title");
  h2.textContent = "Full Menu";

  menuTitleWrapper.append(h2);

  const menuWrapper = document.createElement("div");
  menuWrapper.classList.add("menu-wrapper");

  // Card 1
  const menuCard1 = document.createElement("div");
  menuCard1.classList.add("menu-card");

  const menuImage1 = document.createElement("div");
  menuImage1.classList.add("menu-image");

  const menuImage1Asset = document.createElement("img");
  menuImage1Asset.src = tea;

  const menuContent1 = document.createElement("div");
  menuContent1.classList.add("menu-content");

  const h31 = document.createElement("h3");
  h31.textContent = "Tea";

  const p1a = document.createElement("p");
  p1a.textContent = "Li Hua Black Tea";

  const p2a = document.createElement("p");
  p2a.textContent = "Li Hua Mountain Tea";

  const p3a = document.createElement("p");
  p3a.textContent = "Dong Ding Oolong Tea";

  const p4a = document.createElement("p");
  p4a.textContent = "Earl Grey Black Tea";

  // Card 2
  const menuCard2 = document.createElement("div");
  menuCard2.classList.add("menu-card");

  const menuImage2 = document.createElement("div");
  menuImage2.classList.add("menu-image");

  const menuImage2Asset = document.createElement("img");
  menuImage2Asset.src = brownSugar;

  const menuContent2 = document.createElement("div");
  menuContent2.classList.add("menu-content");

  const h32 = document.createElement("h3");
  h32.textContent = "Brown Sugar";

  const p1b = document.createElement("p");
  p1b.textContent = "Brown Sugar Pearl Latte";

  const p2b = document.createElement("p");
  p2b.textContent = "Brown Sugar Pearl Black Tea Latte";

  const p3b = document.createElement("p");
  p3b.textContent = "Brown Sugar Pearl Oolong Tea Latte";

  const p4b = document.createElement("p");
  p4b.textContent = "Brown Sugar Pearl Cocoa Latte";

  // Card 3
  const menuCard3 = document.createElement("div");
  menuCard3.classList.add("menu-card");

  const menuImage3 = document.createElement("div");
  menuImage3.classList.add("menu-image");

  const menuImage3Asset = document.createElement("img");
  menuImage3Asset.src = saltyCream;

  const menuContent3 = document.createElement("div");
  menuContent3.classList.add("menu-content");

  const h33 = document.createElement("h3");
  h33.textContent = "Salty Cream";

  const p1c = document.createElement("p");
  p1c.textContent = "Salty Cream Black Tea";

  const p2c = document.createElement("p");
  p2c.textContent = "Salty Cream Green Tea";

  const p3c = document.createElement("p");
  p3c.textContent = "Salty Cream Oolong Tea";

  const p4c = document.createElement("p");
  p4c.textContent = "Salty Cream Mountain Tea";

  // Card 4
  const menuCard4 = document.createElement("div");
  menuCard4.classList.add("menu-card");

  const menuImage4 = document.createElement("div");
  menuImage4.classList.add("menu-image");

  const menuImage4Asset = document.createElement("img");
  menuImage4Asset.src = traditional;

  const menuContent4 = document.createElement("div");
  menuContent4.classList.add("menu-content");

  const h34 = document.createElement("h3");
  h34.textContent = "Traditional Taste";

  const p1d = document.createElement("p");
  p1d.textContent = "Grass Tea";

  const p2d = document.createElement("p");
  p2d.textContent = "Winter Melon Tea";

  const p3d = document.createElement("p");
  p3d.textContent = "Taro Sago Latte";

  const p4d = document.createElement("p");
  p4d.textContent = "Red Bean Sago Latte";

  menuWrapper.append(menuCard1, menuCard2, menuCard3, menuCard4);
  menuCard1.append(menuImage1, menuContent1);
  menuCard2.append(menuImage2, menuContent2);
  menuCard3.append(menuImage3, menuContent3);
  menuCard4.append(menuImage4, menuContent4);
  menuImage1.append(menuImage1Asset);
  menuImage2.append(menuImage2Asset);
  menuImage3.append(menuImage3Asset);
  menuImage4.append(menuImage4Asset);
  menuContent1.append(h31, p1a, p2a, p3a, p4a);
  menuContent2.append(h32, p1b, p2b, p3b, p4b);
  menuContent3.append(h33, p1c, p2c, p3c, p4c);
  menuContent4.append(h34, p1d, p2d, p3d, p4d);

  content.append(menuTitleWrapper, menuWrapper);
};

export default menu;
