// Navegación fluida
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }

    // Cierra menú móvil y overlay
    if (window.innerWidth < 768 && navLinks && overlay) {
      navLinks.classList.add("hidden");
      overlay.classList.remove("active");
    }
  });
});

const toggleMenu = document.getElementById('toggleMenu');
const navLinks = document.getElementById('navLinks');
const overlay = document.getElementById('menuOverlay');
const darkToggle = document.getElementById('darkModeToggle');

if (toggleMenu && navLinks && overlay) {
  toggleMenu.addEventListener('click', () => {
    navLinks.classList.toggle('hidden');
    navLinks.classList.toggle('animate-fade-in');
    overlay.classList.toggle('active');
  });

  overlay.addEventListener('click', () => {
    navLinks.classList.add('hidden');
    overlay.classList.remove('active');
  });
}

// Modo oscuro
if (darkToggle) {
  darkToggle.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
  });
}
