const btn = document.querySelector(".hamburger");
const sideBar = document.querySelector(".menu");
btn.addEventListener("click", () => {
  btn.classList.toggle("active");
  sideBar.classList.toggle("menuActive");
});
