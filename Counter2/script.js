const button = document.getElementById("btn_counter");
const input = document.getElementById("num_counter_input");
let countInterval;

button.addEventListener("click", () => {
  const number = parseInt(input.value);
  console.log(number);

  if (isNaN(number)) {
    window.alert("Please Enter a Number!");
    return;
  }

  if (number < 1 || number > 99999) {
    window.alert("Range of Bound! Please Enter a number between 1 and 99999");
    return;
  }
  let currentNumber1 = document.querySelector(".counter .current_one");
  let nextNumber1 = document.querySelector(".counter .next_one");
  let currentNumber2 = document.querySelector(".current .current_two");
  let nextNumber2 = document.querySelector("current .next_two");
  let count = 0;

  resetNumber(currentNumber1, nextNumber1);

  clearInterval(countInterval);

  countInterval = setInterval(() => {
    if (count == number) {
      clearInterval(countInterval);
      window.alert("Counter has Stopped");
      return;
    }
    increaseCount(currentNumber1, nextNumber1);
    count++;
  }, 1500);
});

function resetNumber(currentNumber, nextNumber) {
  currentNumber.innerText = 0;
  nextNumber.innerText = 1;
}

function increaseCount(currentNumber, nextNumber, currentNumber2, nextNumber2) {
  nextNumber.classList.add("animate");

  setTimeout(function () {
    currentNumber.innerText = nextNumber.innerText;
    nextNumber.classList.remove("animate");
    nextNumber.innerText = parseInt(nextNumber.innerText) + 1;
    if (currentNumber == 10) {
    }
  }, 1000);
}
