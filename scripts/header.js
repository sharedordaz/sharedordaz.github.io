document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("header");

    if (header) {
        header.innerHTML = `
            <div class="logo" onclick="window.scrollTo({top: 0, behavior: 'smooth'})">
                <img src="images/logo.webp" loading="lazy" alt="logo" width="70" height="70">
                <div class="name">
                    <h2>Credemo</h2>
                </div>
            </div>
            <div class="hamburguer" onclick="toggleMenu()">☰</div>
            <nav class="navbar" id="navbar">
                <a href="index.html">Inicio</a>
                <a href="our_terapies.html">Tipos de terapias</a>
                <a href="TerapiaEnLinea.html">Cita en linea</a>
                <a href="aboutUs.html">Acerca de nosotros</a>
            </nav>
        `;
    }
});

//<a href="appointment.html">Haz una cita</a>