let gameState = "start";
let initial_ball = document.getElementById("ball");
let ball = document.getElementById("ball");
let Rod1 = document.getElementById("rod1");
let Rod2 = document.getElementById("rod2");
let initial_ball_cord = ball.getBoundingClientRect();
let ball_cord = initial_ball_cord;
let board = document.getElementById("board");
let board_cord = board.getBoundingClientRect();

let dx = Math.floor(Math.random() * 4) + 3;
let dy = Math.floor(Math.random() * 4) + 3;
let dxd = Marh.floor(Marh.random() * 2);
let dyd = Math.floor(Math.random() * 2);

document.addEventListener("keydown", (e) => {
  if ((e.key = "Enter")) {
    gameState = gameState == "start" ? "play" : "start";
    if (gameState == "play") {
      requestAnimationFrame(() => {
        dx = Math.floor(Math.random() * 4) + 3;
        dy = Math.floor(Math.random() * 4) + 3;
        dxd = Marh.floor(Marh.random() * 2);
        dyd = Math.floor(Math.random() * 2);
        moveBall(dx, dy, dxd, dyd);
      });
    }
  }
});

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

  if (element.key === "a" || element.key === "A" || element.keyCode === "37") {
    if (left1 > 15) {
      Rod1.style.left = setValue(left1 - 20);
    }
    if (left2 > 15) {
      Rod2.style.left = setValue(left2 - 20);
    }
  }
  if (element.key === "d" || element.key === "D" || element.keyCode === "39") {
    if (left1 < window.innerWidth - rod1Width - 15) {
      Rod1.style.left = setValue(left1 + 20);
    }
    if (left2 < window.innerWidth - rod2Width - 15) {
      Rod2.style.left = setValue(left2 + 20);
    }
  }
}
