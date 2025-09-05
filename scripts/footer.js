document.addEventListener("DOMContentLoaded", () => {
    const footer = document.querySelector("footer");

    if (footer) {
        footer.innerHTML = `
            <div class="logo" onclick="window.scrollTo({top: 0, behavior: 'smooth'})">
                <img src="images/logo.webp" loading="lazy" alt="logo" width="70" height="60">
                <div class="name">
                    <h2>Credemo</h2>
                </div>
            </div>
            <div class="social">
                <a href="https://www.instagram.com/credemo.cp/">Instagram<img src="images/social/instagram.webp" alt="Youtube Logo" loading="lazy"> </a>
                <a href="https://facebook.com/CredemoConsultoriaPsicologica?locale=es_La">Facebook<img src="images/social/facebook.webp" alt="Youtube Logo" loading="lazy"> </a>
                <a href="tel:+525516906347">Whats App<img src="images/social/WhatsApp.webp" alt="Teléfono Logo" loading="lazy"> </a>
            </div>
        `;
    }
});