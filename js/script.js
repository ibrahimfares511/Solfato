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

document.addEventListener("scroll", function () {
  const sections = document.querySelectorAll("section");
  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight + 300 && rect.bottom > 0) {
      section.classList.add("visible");
    } else {
      section.classList.remove("visible");
    }
  });
});
