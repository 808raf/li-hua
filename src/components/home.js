import main2image from "../assests/main2.jpg";
import main3image from "../assests/main3.jpg";
import clearView from "./clearView";

const home = () => {
  clearView();

  const main = document.querySelector("#content");

  const main2 = document.createElement("div");
  main2.classList.add("main-2");

  const main2img = document.createElement("img");
  main2img.alt = "fresh milk tea";
  main2img.setAttribute("id", "main-2");
  main2img.src = main2image;
  main2.appendChild(main2img);

  const div = document.createElement("div");
  div.classList.add("centered");
  main.appendChild(div);

  const h2 = document.createElement("h2");
  h2.classList.add("title");
  h2.textContent = "Li Hua Milk Tea";
  div.appendChild(h2);

  const contentWrapper = document.createElement("div");
  contentWrapper.classList.add("content-wrapper");

  const hr = document.createElement("hr");
  contentWrapper.appendChild(hr);

  const storyContent = document.createElement("div");
  storyContent.classList.add("story-content");
  contentWrapper.appendChild(storyContent);

  const main3img = document.createElement("img");
  main3img.alt = "pouring hot tea into a cup";
  main3img.setAttribute("id", "main-3");
  main3img.src = main3image;
  storyContent.appendChild(main3img);

  const storyCard = document.createElement("story-card");
  storyCard.classList.add("story-card");
  storyContent.appendChild(storyCard);

  const h4 = document.createElement("h4");
  h4.textContent = "Li Hua's Story";
  storyCard.appendChild(h4);

  const par1 = document.createElement("p");
  par1.textContent =
    "In the tranquil depths of a mountain village in rural China, Li Hua cultivated a profound connection with the art of tea-making, guided by the wisdom passed down through generations. Her family's legacy of tending to the sprawling tea fields infused her craft with a deep reverence for nature and tradition. Inspired by the delicate wildflowers she discovered amidst the foliage, Li Hua embarked on a journey of experimentation, infusing her brews with fragrant floral notes that captivated the senses and stirred the soul.";
  storyCard.appendChild(par1);

  const par2 = document.createElement("p");
  par2.textContent =
    "Word of Li Hua's extraordinary teas soon spread far and wide, drawing travelers and enthusiasts from distant lands to experience the essence of her mountain-grown leaves. Each cup of Li Hua Tea became a testament to the timeless traditions and artisanal craftsmanship that defined her legacy, inviting drinkers to savor not just the taste of tea, but the spirit of a culture steeped in reverence for nature and the art of tea-making.";
  storyCard.appendChild(par2);

  main.append(main2, div, contentWrapper);
};

export default home;
