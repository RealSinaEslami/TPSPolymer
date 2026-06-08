// --- menu.js ---
document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (!menuBtn || !mobileMenu) return;

  menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('mobile-menu-open');
    mobileMenu.classList.toggle('mobile-menu-closed');
    menuBtn.classList.toggle('active');
  });

  // بستن منو بعد از کلیک روی لینک‌ها
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('mobile-menu-open');
      mobileMenu.classList.add('mobile-menu-closed');
      menuBtn.classList.remove('active');
    });
  });
});
