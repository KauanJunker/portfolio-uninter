const navbar = document.querySelector(".navbar");
const navToggle = document.getElementById("navToggle");

function handleScroll() {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
}

function toggleMobileMenu() {
  navbar.classList.toggle("menu-open");
  document.body.classList.toggle("menu-open");
}

function setupNavLinks() {
  const navLinks = document.querySelectorAll(".nav-links a");

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (navbar.classList.contains("menu-open")) {
        toggleMobileMenu();
      }
    });
  });
}

function initAnimations() {
  const animatedElements = document.querySelectorAll(".fade-in, .slide-up");

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.visibility = "visible";
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    animatedElements.forEach((el) => {
      el.style.visibility = "hidden";
      el.style.opacity = "0";
      if (el.classList.contains("slide-up")) {
        el.style.transform = "translateY(20px)";
      }
      observer.observe(el);
    });
  } else {
    animatedElements.forEach((el) => {
      el.style.visibility = "visible";
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    });
  }
}

window.addEventListener("scroll", handleScroll);
navToggle.addEventListener("click", toggleMobileMenu);
window.addEventListener("load", () => {
  handleScroll(); // Check initial scroll position
  setupNavLinks();
  initAnimations();
});

window.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("loaded");
});
