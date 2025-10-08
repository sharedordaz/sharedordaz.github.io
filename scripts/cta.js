// cta.js — hides poster when CTA is clicked and focuses content
const ctaBtn = document.getElementById('ctaBtn');
const poster = document.getElementById('poster');
const contenido = document.getElementById('contenido');

if (ctaBtn) {
  ctaBtn.addEventListener('click', () => {
    poster.classList.add('leaving');
    // Esperar el desvanecido para retirar del flujo y mover foco
    setTimeout(() => {
      poster.style.display = 'none';
      if (contenido) {
        contenido.focus({ preventScroll: false });
        contenido.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 520);
  });
}
