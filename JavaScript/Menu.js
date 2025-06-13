function esperar(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

let Texto = "Bienvenido al Menu"

window.onload = async () => {
    document.body.classList.add('fade-in');
    await esperar(500);
    for (const letra of Texto) {
        document.getElementById("Bienvenida").textContent = document.getElementById("Bienvenida").textContent + letra

        console.log(letra);
        await esperar(100);
    }
    await esperar(2000)
    const gato = document.getElementById('GatoIMG');
    gato.classList.add('entrada');  // agrega clase a la imagen para que aparezca
    await esperar(500)
    Texto = "XD"
    document.getElementById("Bienvenida").textContent = ""
    for (const letra of Texto) {
        document.getElementById("Bienvenida").textContent = document.getElementById("Bienvenida").textContent + letra

        console.log(letra);
        await esperar(500);
    }

  
};


let scrollTarget = 0;
let scrollCurrent = 0;
const velocidad = 0.05;

const contenedor = document.getElementById("Pagina");

function animarScroll() {
  scrollCurrent += (scrollTarget - scrollCurrent) * velocidad;
  contenedor.style.transform = `translateY(-${scrollCurrent}px)`;
  requestAnimationFrame(animarScroll);
}

window.addEventListener("wheel", (e) => {
  scrollTarget += e.deltaY;
  const maxScroll = contenedor.scrollHeight - window.innerHeight;
  scrollTarget = Math.max(0, Math.min(scrollTarget, maxScroll));
});

animarScroll();
