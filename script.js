// Animate fade-in sections on scroll
const fadeSections = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });
fadeSections.forEach(section => observer.observe(section));
// Optional enhancements can go here
