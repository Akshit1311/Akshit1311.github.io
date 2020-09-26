const textPurple = 0xcf3da4;
const textOrange = 0xf27611;
const textBlue = 0x1e73e8;
const textGreen = 0x25b303;

let root = document.documentElement;

console.log($(window).width(), "width");

const screenWidth = $(window).width();

isMob = screenWidth < 600 ? true : false;

console.log(isMob);

let vantaPoints = 10.0;
// let vantaPoints = 10.0;
let vantaMaxDistance = 21.0;
// let vantaMaxDistance = 21.0;
let vantaSpacing = isMob ? 18.0 : 16.0;
// let vantaSpacing = 16.0;

const startNet = (themeColor) => {
  $("canvas").remove(".vanta-canvas");

  VANTA.NET({
    el: "#vanta-net",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.0,
    minWidth: 200.0,
    scale: 1.0,
    scaleMobile: 1,
    color: themeColor,
    backgroundColor: 0x242322,
    points: vantaPoints,
    maxDistance: vantaMaxDistance,
    spacing: vantaSpacing,
  });
};

function getRandColor() {
  let num = Math.floor(Math.random() * 4);
  console.log(num);
  switch (num) {
    case 0:
      startNet(textOrange);
      root.style.setProperty("--main-text-color", `var(--text-orange)`);

      break;
    case 1:
      startNet(textGreen);
      root.style.setProperty("--main-text-color", `var(--text-green)`);

      break;
    case 2:
      startNet(textPurple);
      root.style.setProperty("--main-text-color", `var(--text-purple)`);

      break;
    case 3:
      startNet(textBlue);
      root.style.setProperty("--main-text-color", `var(--text-blue)`);

      break;

    default:
      startNet(textGreen);

      break;
  }
}

getRandColor();

$(".theme-circ").click((event) => {
  themeColor = event.target.id;
  $("canvas").remove(".vanta-canvas");

  switch (themeColor) {
    case "green":
      startNet(textGreen);
      break;
    case "purple":
      startNet(textPurple);
      break;
    case "orange":
      startNet(textOrange);
      break;
    case "blue":
      startNet(textBlue);
      break;
    default:
      break;
  }

  root.style.setProperty("--main-text-color", `var(--text-${themeColor})`);
});

$(document).ready(() => {
  $(".preload").addClass("d-none");
  // setTimeout(() => {
  // }, 10000);
});
