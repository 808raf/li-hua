import clearView from "./clearView";
import spacer from "./spacer";

const about = () => {
  clearView();
  spacer();

  const content = document.querySelector("#content");

  const aboutCard = document.createElement("div");
  aboutCard.classList.add("about-card");

  const h4 = document.createElement("h4");
  h4.textContent = "About Us";
  aboutCard.appendChild(h4);

  const par1 = document.createElement("p");
  par1.textContent =
    "Li Hua Tea Shop is a fictional creation, woven from imagination and inspired by the rich tapestry of tea culture. While it may not exist in the physical realm, its essence lies in the stories we share and the appreciation we hold for the art of tea-making. Through Li Hua Tea, we embark on a journey of creativity and exploration, inviting others to join in the celebration of tradition and innovation.";
  aboutCard.appendChild(par1);

  content.appendChild(aboutCard);
};

export default about;
