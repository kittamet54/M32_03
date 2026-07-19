const toggleButton = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const yearLabel = document.getElementById('year');

if (toggleButton && navMenu) {
  toggleButton.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('open');
    toggleButton.setAttribute('aria-expanded', String(isOpen));
  });

  navMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
      toggleButton.setAttribute('aria-expanded', 'false');
    });
  });
}

if (yearLabel) {
  yearLabel.textContent = new Date().getFullYear();
}

const revealElements = document.querySelectorAll('.hero-copy, .hero-card, .section-heading, .card, .contact-card');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.animate(
          [
            { opacity: 0, transform: 'translateY(18px)' },
            { opacity: 1, transform: 'translateY(0)' }
          ],
          {
            duration: 700,
            easing: 'ease-out',
            fill: 'forwards'
          }
        );
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

revealElements.forEach((element) => observer.observe(element));
