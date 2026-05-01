// Scroll-in fade animations
const observer = new IntersectionObserver(
  (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
  { threshold: 0.12 }
);

document.querySelectorAll(
  '.feature-card, .provider-card, .step, .shortcut-row, .stat'
).forEach((el, i) => {
  el.classList.add('fade-in');
  el.style.transitionDelay = `${(i % 4) * 80}ms`;
  observer.observe(el);
});

// Smooth nav highlight
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('nav ul a[href^="#"]');

const secObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        navLinks.forEach(a => a.classList.remove('active'));
        const active = document.querySelector(`nav a[href="#${e.target.id}"]`);
        if (active) active.classList.add('active');
      }
    });
  },
  { rootMargin: '-40% 0px -55% 0px' }
);
sections.forEach(s => secObserver.observe(s));

// Add active nav style
const style = document.createElement('style');
style.textContent = 'nav ul a.active { color: var(--text) !important; }';
document.head.appendChild(style);
