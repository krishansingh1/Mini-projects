const buttons = document.querySelectorAll(".button");
const result = document.querySelector(".input");
let string = "";

Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      string = eval(string);
      result.value = string;
    } else if (e.target.innerHTML == "AC") {
      string = "";
      result.value = string;
    } else {
      string = string + e.target.innerHTML;
      result.value = string;
    }
  });
});
