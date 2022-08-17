const toggle_btn = document.getElementById("toggle_btn");
const pointer_dot = document.getElementById("toggle_dot");
const toggle_body = document.body;
const text = document.getElementById("text");

toggle_btn.addEventListener("click", () => {
  pointer_dot.classList.toggle("active");
  toggle_body.classList.toggle("active");
  toggle_btn.classList.toggle("active");
  text.classList.toggle("active");
});
