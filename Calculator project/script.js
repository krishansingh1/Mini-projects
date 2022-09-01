const buttons = document.querySelectorAll(".button");

let string = "";

console.log(buttons);

Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    console.log(e.target.innerHTML);
  });
});
