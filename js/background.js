const images = [
  "chrome-wallpaper1.jpg",
  "chrome-wallpaper5.jpg",
  "chrome-wallpaper6.jpg",
  "chrome-wallpaper7.jpg",
];

const background = "background";
const choesenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.className = background;

bgImage.src = `images/${choesenImage}`;

document.body.appendChild(bgImage);
