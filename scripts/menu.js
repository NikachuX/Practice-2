const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');

// overlay
const overlay = document.createElement('div');
overlay.className = 'nav-overlay';
document.body.appendChild(overlay);

function toggleMenu() {
  const expanded = menuToggle.getAttribute('aria-expanded') === 'true';

  menuToggle.classList.toggle('active');
  menuToggle.setAttribute('aria-expanded', !expanded);
  mainNav.classList.toggle('active');
  overlay.classList.toggle('active');

  document.body.style.overflow =
    mainNav.classList.contains('active') ? 'hidden' : '';
}

menuToggle.addEventListener('click', toggleMenu);
overlay.addEventListener('click', toggleMenu);

// Закрытие по ссылке
document.querySelectorAll('.nav__link').forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 768) toggleMenu();
  });
});

// Escape
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && mainNav.classList.contains('active')) {
    toggleMenu();
  }
});

/* Кнопка "Наверх" */
const scrollTopBtn = document.getElementById('scrollTop');

window.addEventListener('scroll', () => {
  scrollTopBtn.classList.toggle('visible', window.scrollY > 300);
});

scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
