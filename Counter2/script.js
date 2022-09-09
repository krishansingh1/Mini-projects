const button = document.getElementById("btn_counter");
const input = document.getElementById("num_counter_input");
const currentNumber = document.querySelectorAll(".counter .current_one");
const nextNumber = document.querySelectorAll(".counter .next_one");
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
  }

  let count = 0;

  resetNumber(currentNumber, nextNumber);

  clearInterval(countInterval);

  countInterval = setInterval(() => {
    if (count == number) {
      clearInterval(countInterval);
      window.alert("Counter has Stopped");
    }
    increaseCount(currentNumber, nextNumber);
    count++;
  }, 1500);
});

function resetNumber(currentNumber, nextNumber) {
  currentNumber.innerText = 0;
  nextNumber.innerText = 1;
}

function increaseCount() {
  nextNo.classList.add("animate");

  setTimeout(function () {
    currentNumber.innerText = nextNo.innerText;
    nextNumber.classList.remove("animate");
    nextNumber.innerText = parseInt(nextNumber.innerText) + 1;
  }, 1000);
}
