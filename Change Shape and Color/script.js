const color = document.getElementById("circle");
const shape = document.getElementById("shape");

const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");

const hexDecimal = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

function randomHex() {
  return Math.floor(Math.random() * hexDecimal.length);
}

btn1.addEventListener("click", () => {
  let hexNum = "#";

  for (let i = 0; i < 6; i++) {
    hexNum += hexDecimal[randomHex()];
  }
  color.style.backgroundColor = hexNum;
});

let i = 0;
btn2.addEventListener("click", () => {
  switch (i++) {
    case 0:
      shape.classList.toggle("active");
      break;
    case 1:
      shape.classList.toggle("active2");
      break;
    case 2:
      shape.classList.toggle("active3");
      break;
    default:
      shape.classList.toggle("active");
      break;
  }
});
