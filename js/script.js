"use strict";
// ============ All Variables ============
const menuToggleBtn = document.querySelector("#menu__toggle__btn");
const menuBtn = document.querySelector("#menu__links");
const mainNavbar = document.querySelector("#main__navbar");
const myBarIndicator = document.querySelector("#myBar");

// ============ All Variables ============

// ============ All Functions ============
// Toggle Navbar Menu For Mobile
const toggleNavbarMenu = (e) => {
  const thisBtn = e.target.closest("button");

  thisBtn.classList.toggle("opened");
  thisBtn.setAttribute("aria-expanded", thisBtn.classList.contains("opened"));
  menuBtn.classList.toggle("opened");
};

// Scroll Window
const scrollWindow = (e) => {
  if (document.documentElement.scrollTop >= 100) {
    mainNavbar.classList.add("scrolling");
  } else {
    mainNavbar.classList.remove("scrolling");
  }
};

// ============ Handel All Function ============
menuToggleBtn.addEventListener("click", toggleNavbarMenu);
window.addEventListener("scroll", () => {
  scrollWindow();
});
