let gameState = "start";
let Rod1 = document.getElementById("rod1");
let Rod2 = document.getElementById("rod2");
let board = document.getElementById("board");
let initial_ball = document.getElementById("ball");
let ball = document.getElementById("ball");
let score_1 = document.getElementById("player_1_score");
let score_2 = document.getElementById("player_2_score");
let Rod1_coord = Rod1.getBoundingClientRect();
let Rod2_coord = Rod2.getBoundingClientRect();
let initial_ball_cord = ball.getBoundingClientRect();
let ball_cord = initial_ball_cord;
let board_cord = board.getBoundingClientRect();
let Rod_common = document.querySelector(".rod").getBoundingClientRect();

let dx = Math.floor(Math.random() * 4) + 3;
let dy = Math.floor(Math.random() * 4) + 3;
let dxd = Math.floor(Math.random() * 2);
let dyd = Math.floor(Math.random() * 2);

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
    if (e.key == "w" || e.key == "W") {
      Rod1.style.top =
        Math.max(board_cord.top, Rod1_coord.top - window.innerHeight * 0.06) +
        "px";
      Rod1_coord = Rod1.getBoundingClientRect();

      Rod2.style.top =
        Math.max(board_cord.top, Rod2_coord.top - window.innerHeight * 0.06) +
        "px";
      Rod2_coord = Rod2.getBoundingClientRect();
    }

    if (e.key == "s" || e.key == "S") {
      Rod1.style.top =
        Math.min(
          board_cord.bottom - Rod_common.height,
          Rod1_coord.top + window.innerHeight * 0.06
        ) + "px";
      Rod1_coord = Rod1.getBoundingClientRect();

      Rod2.style.top =
        Math.min(
          board_cord.bottom - Rod_common.height,
          Rod2_coord.top + window.innerHeight * 0.06
        ) + "px";
      Rod2_coord = Rod2.getBoundingClientRect();
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
