// ===========================
// Prodesk IT — script.js
// ===========================

// Mobile navbar toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('active');
  navToggle.setAttribute('aria-expanded', isOpen);
});

// More JS functionality (e.g. dark mode toggle) will go here

// Dark/Light mode toggle
const themeToggle = document.getElementById('themeToggle');

themeToggle.addEventListener('click', () => {
  const isDark = document.body.classList.toggle('dark-mode');
  themeToggle.textContent = isDark ? '☀️' : '🌙';
});
