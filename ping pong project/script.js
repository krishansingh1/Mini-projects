const Rod1 = document.getElementById("rod1");
const Rod2 = document.getElementById("rod2");

Rod1.style.left = Rod1.offsetLeft + "px";
Rod2.style.left = Rod2.offsetLeft + "px";

let rod1Height = Rod1.offsetHeight;
let rod1Width = Rod1.offsetWidth;
let rod2Height = Rod2.offsetHeight;
let rod2Width = Rod2.offsetWidth;

window.addEventListener("keypress", (e) => {
  e.preventDefault();
  moveHorizontally(e);
});

function setValue(value) {
  return value + "px";
}

function moveHorizontally(element) {
  let left1 = parseInt(Rod1.style.left);
  let left2 = parseInt(Rod2.style.left);

  if (
    element.key === "d" ||
    element.key === "D" ||
    element.code === "37" ||
    element.code === "39"
  ) {
    if (left1 < window.innerWidth - rod1Width - 15) {
      rod1Height.style.left = setValue(left1 + 5);
    }
  }
}
