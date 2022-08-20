//All Elements to be used for manipluation
let gameState = "start";
let paddle_1 = document.querySelector(".paddle_1");
let paddle_2 = document.querySelector(".paddle_2");
let initial_paddle_1 = document.querySelector(".paddle_1");
let initial_paddle_2 = document.querySelector(".paddle_2");
let initial_paddle_coord_1 = paddle_1.getBoundingClientRect();
let initial_paddle_coord_2 = paddle_2.getBoundingClientRect();
let board = document.querySelector(".board");
let initial_ball = document.querySelector(".ball");
let ball = document.querySelector(".ball");
let score_1 = document.querySelector(".player_1_score");
let score_2 = document.querySelector(".player_2_score");
let message = document.querySelector(".message");
let paddle_1_coord = paddle_1.getBoundingClientRect();
let paddle_2_coord = paddle_2.getBoundingClientRect();
let initial_ball_coord = ball.getBoundingClientRect();
let ball_coord = initial_ball_coord;
let board_coord = board.getBoundingClientRect();
let paddle_common = document.querySelector(".paddle").getBoundingClientRect();

//Elements for Directions of Ball
let dx = Math.floor(Math.random() * 4) + 3;
let dy = Math.floor(Math.random() * 4) + 3;
let dxd = Math.floor(Math.random() * 2);
let dyd = Math.floor(Math.random() * 2);
let score1 = 0;
let score2 = 0;
//Keyboard Event Listener for starting a game
document.addEventListener("keydown", (e) => {
  //press enter to start game
  if (e.key == "Enter") {
    //Storage Logic
    let Player1Score = localStorage.getItem("Score1");
    let Player2Score = localStorage.getItem("Score2");

    if (Player1Score && Player2Score == 0) {
      window.alert("This is you first Time. Use W and S to Play");
    } else if (Player1Score < Player2Score) {
      window.alert("Highest Score is " + Player2Score + " of" + " Player2");
    } else if (Player2Score < Player1Score) {
      window.alert("Highest Score is: " + Player1Score + " of" + " Player1");
    }

    //Game Logic
    gameState = gameState == "start" ? "play" : "start";
    if (gameState == "play") {
      message.innerHTML = "Game Started";
      message.style.left = 44 + "vw";
      requestAnimationFrame(() => {
        dx = Math.floor(Math.random() * 4) + 3;
        dy = Math.floor(Math.random() * 4) + 3;
        dxd = Math.floor(Math.random() * 2);
        dyd = Math.floor(Math.random() * 2);
        moveBall(dx, dy, dxd, dyd);
      });
    }
  }

  //Manipulating Rods using Key event property
  if (gameState == "play") {
    //If w is pressed
    if (e.key == "w" || e.key == "W") {
      //Manipulating Paddle 1
      paddle_1.style.top =
        Math.max(
          board_coord.top,
          paddle_1_coord.top - window.innerHeight * 0.1
        ) + "px";
      paddle_1_coord = paddle_1.getBoundingClientRect();

      //Manipulating Paddle 2
      paddle_2.style.top =
        Math.max(
          board_coord.top,
          paddle_2_coord.top - window.innerHeight * 0.1
        ) + "px";
      paddle_2_coord = paddle_2.getBoundingClientRect();
    }

    //If S is pressed
    if (e.key == "s" || e.key == "S") {
      //Manipulating Paddle 1
      paddle_1.style.top =
        Math.min(
          board_coord.bottom - paddle_common.height,
          paddle_1_coord.top + window.innerHeight * 0.1
        ) + "px";
      paddle_1_coord = paddle_1.getBoundingClientRect();

      //Manipulating Paddle 2
      paddle_2.style.top =
        Math.min(
          board_coord.bottom - paddle_common.height,
          paddle_2_coord.top + window.innerHeight * 0.1
        ) + "px";
      paddle_2_coord = paddle_2.getBoundingClientRect();
    }
  }
});

//Function for Ball moving
function moveBall(dx, dy, dxd, dyd) {
  if (ball_coord.top <= board_coord.top) {
    dyd = 1;
  }
  if (ball_coord.bottom >= board_coord.bottom) {
    dyd = 0;
  }
  if (
    ball_coord.left <= paddle_1_coord.right &&
    ball_coord.top >= paddle_1_coord.top &&
    ball_coord.bottom <= paddle_1_coord.bottom
  ) {
    dxd = 1;
    dx = Math.floor(Math.random() * 4) + 3;
    dy = Math.floor(Math.random() * 4) + 3;
  }
  if (
    ball_coord.right >= paddle_2_coord.left &&
    ball_coord.top >= paddle_2_coord.top &&
    ball_coord.bottom <= paddle_2_coord.bottom
  ) {
    dxd = 0;
    dx = Math.floor(Math.random() * 4) + 3;
    dy = Math.floor(Math.random() * 4) + 3;
  }
  if (
    ball_coord.left <= board_coord.left ||
    ball_coord.right >= board_coord.right
  ) {
    if (ball_coord.left <= board_coord.left) {
      score2 = parseInt((score_2.innerHTML = +score_2.innerHTML + 1));
      localStorage.setItem("Score2", JSON.stringify(score2));
    } else {
      score1 = parseInt((score_1.innerHTML = +score_1.innerHTML + 1));
      localStorage.setItem("Score1", JSON.stringify(score1));
    }
    gameState = "start";

    ball_coord = initial_ball_coord;
    ball.style = initial_ball.style;
    paddle_1_coord = initial_paddle_coord_1;
    paddle_1.style = initial_paddle_1.style;
    paddle_2_coord = initial_paddle_coord_2;
    paddle_2.style = initial_paddle_2.style;
    message.innerHTML = "Press Enter to Play Pong";
    message.style.left = 38 + "vw";
    return;
  }
  ball.style.top = ball_coord.top + dy * (dyd == 0 ? -1 : 1) + "px";
  ball.style.left = ball_coord.left + dx * (dxd == 0 ? -1 : 1) + "px";
  ball_coord = ball.getBoundingClientRect();
  requestAnimationFrame(() => {
    moveBall(dx, dy, dxd, dyd);
  });
}
