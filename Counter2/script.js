const button = document.getElementById("btn_counter");
const input = document.getElementById("num_counter_input");

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
});
