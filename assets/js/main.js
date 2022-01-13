const header = document.querySelector(".header");
const menuBtn = document.querySelector(".menu__btn");
const nav = document.querySelector(".nav");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("show");
});

window.addEventListener("scroll", () => {
  nav.classList.remove("show");
  if (window.scrollY >= 25) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
});

window.addEventListener("load", () => {
  if (window.scrollY == 0) {
    header.classList.remove("sticky");
  }
});
