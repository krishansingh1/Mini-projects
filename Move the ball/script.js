let ball = document.getElementById("ball");
// let smoothScroll;

//1st Approach
// var x = 0;
// let moveInterval = 0;
// window.addEventListener("keypress", (e) => {
//   moveHorizontally(e);
// });

// window.addEventListener("keyup", (e) => {
//   stopHorizontally(e);
// });

// function moveHorizontally(element) {
//   if (element.key === "d") {
//     element.preventDefault();
//     moveInterval = setInterval(() => {
//       x++;
//       ball.style.left = x + "px";
//     }, 10);`
//   }

//   if (element.key === "s") {
//     element.preventDefault();
//     moveInterval = setInterval(() => {
//       x++;
//       ball.style.top = x + "px";
//     }, 10);
//   }

//   if (element.key === "a") {
//     element.preventDefault();
//     moveInterval = setInterval(() => {
//       x--;
//       ball.style.left = x + "px";
//     }, 10);
//   }

//   if (element.key === "w") {
//     element.preventDefault();
//     moveInterval = setInterval(() => {
//       x--;
//       ball.style.top = x + "px";
//     }, 10);
//   }
// }

// function stopHorizontally(element) {
//   if (element.key === "d") {
//     clearInterval(moveInterval);
//   }

//   if (element.key === "s") {
//     clearInterval(moveInterval);
//   }

//   if (element.key === "a") {
//     clearInterval(moveInterval);
//   }

//   if (element.key === "w") {
//     clearInterval(moveInterval);
//   }
// }

//2nd Approach
ball.style.left = ball.offsetLeft + "px";
ball.style.top = ball.offsetTop + "px";

let ballHeight = ball.offsetHeight;
let ballWidth = ball.offsetWidth;

window.addEventListener("keypress", (e) => {
  keyPress(e);
});

function setValue(value) {
  return value + "px";
}

function keyPress(element) {
  let topPosition = parseInt(ball.style.top);
  let leftPosition = parseInt(ball.style.left);
  console.log(ball.style.top, ball.style.left);
  console.log(topPosition, leftPosition);
  console.log(window.innerHeight, window.innerWidth);
  if (element.key === "w" || element.key === "W") {
    if (topPosition > 15) {
      ball.style.top = setValue(topPosition - 5);
    }
  } else if (element.key === "s" || element.key === "S") {
    if (topPosition < window.innerHeight - ballHeight - 15) {
      ball.style.top = setValue(topPosition + 5);
    }
  } else if (element.key === "a" || element.key === "A") {
    if (leftPosition > 15) {
      ball.style.left = setValue(leftPosition - 5);
    }
  } else if (element.key === "d" || element.key === "D") {
    if (leftPosition < window.innerWidth - ballWidth - 15) {
      ball.style.left = setValue(leftPosition + 5);
    }
  }
}
