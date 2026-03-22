// Scroll animation
const elements = document.querySelectorAll(".fade-in");

window.addEventListener("scroll", () => {
/* el instand object */
  elements.forEach(el => {
    const position = el.getBoundingClientRect().top;
    if (position < window.innerHeight - 100) {
      el.classList.add("show");
    }
  });
});