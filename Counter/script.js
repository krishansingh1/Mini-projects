// const counter_button = document.getElementById("counter_btn");
// let first_number = document.getElementById("updated-number");
// let second_number = document.getElementById("updated-number-2");
// const start_number = document.getElementById("counter_num");
// const current = document.querySelector(".current");
// const next = document.querySelector(".next");
// let num;
// let count = 0;

// start_number.addEventListener("input", (e) => {
//   num = e.target.value;
//   if (num > 9) {
//     alert("Please enter a number 1 to 9");
//   }
// });

// counter_button.addEventListener("click", countInterval);

// var countInterval = setInterval(() => {
//   if (count === num) {
//     clearInterval(countInterval);
//     alert("Counter has stopped");
//     return;
//   }
//   animate();
//   count++;
// }, 1000);

// function animate() {
//   next.classList.add("transition");

//   setTimeout(() => {
//     first_number.textContent = second_number.textContent;
//     next.classList.remove("transition");
//     second_number.textContent = second_number.textContent + 1;
//   }, 1000);
// }

let countInterval;

function startCounter() {
  let number = parseInt(document.getElementById("number").value);
  console.log(number);

  if (isNaN(number)) {
    alert("Please Enter a Number");
    return;
  }

  if (number < 1 || number > 99999) {
    alert("Range out of bounds");
    return;
  }

  let currentNo = document.querySelector(".counter .current_one");
  let nextNo = document.querySelector(".counter .next");
  let count = 0;

  // If user clicks on 'Start Counter' button again - remove this function and below 2 lines if you don't consider this situation
  resetNumbers(currentNo, nextNo);

  // Clears the previous interval that was running
  clearInterval(countInterval);

  countInterval = setInterval(function () {
    if (count === number) {
      clearInterval(countInterval);
      alert("Counter has stopped");
      return;
    }
    increaseCount(currentNo, nextNo);
    count++;
  }, 1500);
}

function resetNumbers(currentNo, nextNo) {
  currentNo.innerText = 0;
  nextNo.innerText = 1;
}

function increaseCount(currentNo, nextNo) {
  nextNo.classList.add("transition");

  setTimeout(function () {
    currentNo.innerText = nextNo.innerText;
    nextNo.classList.remove("transition");
    nextNo.innerText = parseInt(nextNo.innerText) + 1;
  }, 1000);
}
