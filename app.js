const textPurple = 0xcf3da4;
const textOrange = 0xf27611;
const textGreen = 0x25b303;

let root = document.documentElement;

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
    scaleMobile: 1.0,
    color: themeColor,
    backgroundColor: 0x242322,
  });
};

function getRandColor() {
  let num = Math.floor(Math.random() * 3);
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

    default:
      startNet(textGreen);

      break;
  }
}

getRandColor();

$(".mac-icon").click((event) => {
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

    default:
      break;
  }

  root.style.setProperty("--main-text-color", `var(--text-${themeColor})`);
});
