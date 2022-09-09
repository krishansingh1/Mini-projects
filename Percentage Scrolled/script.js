let number = document.getElementById("num");
let total_page_height = document.documentElement.scrollHeight;
let viewport_height = window.innerHeight;

window.addEventListener("scroll", (e) => {
  e.preventDefault();
  number.innerText = Math.round(
    (Math.round(this.scrollY) / (total_page_height - viewport_height)) * 100
  );
});
