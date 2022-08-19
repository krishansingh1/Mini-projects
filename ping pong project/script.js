let gameState = "start";
let initial_ball = document.getElementById("ball");
let ball = document.getElementById("ball");
let Rod1 = document.getElementById("rod1");
let Rod2 = document.getElementById("rod2");
let Rod1_coord = Rod1.getBoundingClientRect();
let Rod2_coord = Rod2.getBoundingClientRect();
let initial_ball_cord = ball.getBoundingClientRect();
let ball_cord = initial_ball_cord;
let board = document.getElementById("board");
let board_cord = board.getBoundingClientRect();

let dx = Math.floor(Math.random() * 4) + 3;
let dy = Math.floor(Math.random() * 4) + 3;
let dxd = Math.floor(Math.random() * 2);
let dyd = Math.floor(Math.random() * 2);

let score1 = 0;
let score2 = 0;
localStorage.setItem("Score1", score1);
localStorage.setItem("Score2", score2);
const latestScore1 = localStorage.getItem("Score1");
const latestScore2 = localStorage.getItem("Score2");

document.addEventListener("keydown", (e) => {
  if ((e.key = "Enter")) {
    gameState = gameState == "start" ? "play" : "start";
    if (gameState == "play") {
      requestAnimationFrame(() => {
        dx = Math.floor(Math.random() * 4) + 3;
        dy = Math.floor(Math.random() * 4) + 3;
        dxd = Math.floor(Math.random() * 2);
        dyd = Math.floor(Math.random() * 2);
        moveBall(dx, dy, dxd, dyd);
      });
    }
  }

  if (gameState == "play") {
    Rod1.style.left = Rod1.offsetLeft + "px";
    Rod2.style.left = Rod2.offsetLeft + "px";

    let rod1Width = Rod1.offsetWidth;
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
        element.key === "a" ||
        element.key === "A" ||
        element.keyCode === "37"
      ) {
        if (left1 > 15) {
          Rod1.style.left = setValue(left1 - 10);
        }
        if (left2 > 15) {
          Rod2.style.left = setValue(left2 - 10);
        }
      }
      if (
        element.key === "d" ||
        element.key === "D" ||
        element.keyCode === "39"
      ) {
        if (left1 < window.innerWidth - rod1Width - 15) {
          Rod1.style.left = setValue(left1 + 10);
        }
        if (left2 < window.innerWidth - rod2Width - 15) {
          Rod2.style.left = setValue(left2 + 10);
        }
      }
    }
  }
});

function moveBall(dx, dy, dxd, dyd) {
  if (ball_cord.top <= board_cord.top) {
    dyd = 1;
  }
  if (ball_cord.bottom >= board_cord.bottom) {
    dyd = 0;
  }
  if (
    ball_cord.left <= Rod1_coord.right &&
    ball_cord.top >= Rod1_coord.top &&
    ball_cord.bottom <= Rod1_coord.bottom
  ) {
    dxd = 1;
    dx = Math.floor(Math.random() * 4) + 3;
    dy = Math.floor(Math.random() * 4) + 3;
  }

  if (
    ball_cord.right >= Rod2_coord.left &&
    ball_cord.top >= Rod2_coord.top &&
    ball_cord.bottom <= Rod2_coord.bottom
  ) {
    dxd = 0;
    dx = Math.floor(Math.random() * 4) + 3;
    dy = Math.floor(Math.random() * 4) + 3;
  }

  if (ball_cord <= board_cord.left || ball_cord.right >= board_cord.right) {
    if (ball_cord.left <= board_cord.left) {
      score1 += 100;
    } else {
      score2 += 100;
    }
    gameState = "start";

    ball_cord = initial_ball_cord;
    ball.style = initial_ball.style;
    return;
  }
  ball.style.top = ball_cord.top + dy * (dyd == 0 ? -1 : 1) + "px";
  ball.style.left = ball_cord.left + dx * (dxd == 0 ? -1 : 1) + "px";
  ball_cord = ball.getBoundingClientRect();
  requestAnimationFrame(() => {
    moveBall(dx, dy, dxd, dyd);
  });
}
