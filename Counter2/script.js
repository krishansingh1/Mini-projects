const button = document.getElementById("btn_counter");

button.addEventListener("click", () => {
  const number = parseInt(document.getElementById("num_counter_input"));
  console.log(number);

  if (isNaN(number)) {
    window.alert("Please Enter a Number!");
    return;
  }
});
