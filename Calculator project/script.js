const button = document.querySelectorAll(".button");
const display = document.getElementById("addNum");

let operand1 = 0;
let operand2 = null;
let operator = null;

// for (let i = 0; i < button.length; i++) {
//   console.log(button[i]);
//   button[i].addEventListener("click", () => {
//     let value = button[i].dataset.value;
//     console.log(value);
//     if (value == "+") {
//       operator = "+";
//       operand1 = parseFloat(display.textContent);
//     } else if (value == "=") {
//       operand2 = parseFloat(display.textContent);
//       let result = "operand1 operator operand2";
//       console.log(eval(result));
//     } else {
//       display.innerText += value;
//     }
//     console.log(display);
//   });
// }
for (let i = 0; i < button.length; i++) {
  button[i].addEventListener("click", (e) => {
    // console.log(e.target.textContent);
    console.log(button[i].dataset.value);
    let value = button[i].dataset.value;
    console.log(value);
    const result=display.getAttribute(value);
    console.log(result);
  });
}
