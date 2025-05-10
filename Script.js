function guardarCarta() {
    const mensaje = document.getElementById('mensaje').value;
    if (mensaje.trim() === "") {
        alert("Por favor, escribe un mensaje antes de guardar.");
    } else {
        alert("Tu carta ha sido guardada: \n\n" + mensaje);
    }
}

function mostrarMensaje() {
    const mensajeEspecial = document.getElementById('mensaje-especial');
    mensajeEspecial.style.display = 'block';
}

function mostrarSorpresa() {
    const mensaje = document.getElementById('mensaje-sorpresa');
    gsap.to(mensaje, {
        opacity: 1,
        scale: 1,
        duration: 1,
        display: "block"
    });
}

function lanzarConfeti() {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });
}

// Lanza confeti al cargar la página
window.onload = lanzarConfeti;

const gatos = document.querySelectorAll('.gato');

gatos.forEach((gato, index) => {
    gsap.to(gato, {
        y: "100vh",
        x: gsap.utils.random(-50, 50),
        opacity: 1,
        duration: gsap.utils.random(4, 6),
        repeat: -1,
        delay: index * 0.5,
        ease: "power1.inOut"
    });
});

const gatosNegros = document.querySelectorAll('.gato-negro');

gatosNegros.forEach((gato, index) => {
    gsap.to(gato, {
        y: "100vh",
        x: gsap.utils.random(-100, 100),
        opacity: 1,
        duration: gsap.utils.random(5, 8),
        repeat: -1,
        delay: index * 0.5,
        ease: "power1.inOut"
    });
});