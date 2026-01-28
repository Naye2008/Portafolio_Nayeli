// ===== FORMULARIO CONTACTO =====
const form = document.querySelector('.contacto-form-card form');
const boton = form.querySelector('button');

form.addEventListener('submit', () => {
    boton.disabled = true;
    boton.innerHTML = '<i class="bi bi-hourglass-split"></i> Enviando...';
});

// ===== VOLVER ARRIBA =====
const volverArriba = document.querySelector('.volver-arriba');

volverArriba.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
const chips = document.querySelectorAll('.contacto-chip');

chips.forEach(chip => {
    chip.addEventListener('mouseenter', () => {
        chip.style.boxShadow = '0 10px 25px rgba(217,167,199,0.4)';
    });

    chip.addEventListener('mouseleave', () => {
        chip.style.boxShadow = '0 5px 15px rgba(0,0,0,0.06)';
    });
});
// ===== ANIMACIÓN AL SCROLL =====
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
    });
});

document.querySelectorAll('section').forEach(sec => observer.observe(sec));
const elementos = document.querySelectorAll(".animar");

const mostrarElementos = () => {
    elementos.forEach(el => {
        const posicion = el.getBoundingClientRect().top;
        const alturaPantalla = window.innerHeight - 100;

        if (posicion < alturaPantalla) {
            el.classList.add("visible");
        }
    });
};

window.addEventListener("scroll", mostrarElementos);
mostrarElementos();
