const year = document.getElementById("year");
year.textContent = new Date().getFullYear();

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".section, .project-feature, .project-card, .stack-card, .terminal-card").forEach(el => {
  el.classList.add("reveal");
  observer.observe(el);
});
