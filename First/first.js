const toggleBtn = document.querySelector(".navbar_togglebtn");
const menu = document.querySelector(".navbar_menu");
const icons = document.querySelector(".secondicons");
const box = document.querySelector(".header_box");
const section = document.querySelector(".main_sec1");

toggleBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
  icons.classList.toggle("active");
  box.classList.toggle("active");
  section.classList.toggle("active");
});
