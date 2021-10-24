const images = [
  "chrome-wallpaper1.jpg",
  "chrome-wallpaper2.jpg",
  "chrome-wallpaper3.jpg",
  "chrome-wallpaper4.jpg",
  "chrome-wallpaper5.jpg",
  "chrome-wallpaper6.jpg",
  "chrome-wallpaper7.jpg",
  "chrome-wallpaper8.jpg",
];

const choesenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `images/${choesenImage}`;

document.body.appendChild(bgImage);
