// Revela secciones y tarjetas de proyecto al hacer scroll
const targets = document.querySelectorAll('.reveal-target');

const io = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('reveal');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

targets.forEach((t) => io.observe(t));

// Escalona la aparición de las tarjetas de proyecto
document.querySelectorAll('.proc').forEach((el, i) => {
  el.style.transitionDelay = `${i * 70}ms`;
});