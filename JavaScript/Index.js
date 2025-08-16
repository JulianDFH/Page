

function esperar(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


window.onload = () => {
  document.body.classList.add('fade-in');

};


const btn = document.getElementById('BSesion');


async function backend_Respuesta(Usuario, Contraseña) {
  const response = await fetch(`https://backend-qlrf.onrender.com/Inicio_Sesion?Usuario=${encodeURIComponent(Usuario)}&Contraseña=${encodeURIComponent(Contraseña)}`);
  let respuesta = await response.text();
  return respuesta;
}


btn.onclick = async () => {
  let User = document.getElementById("Usuario").value;
  let Password = document.getElementById("Contraseña").value;

  const Autentificado = await backend_Respuesta(User, Password);

  if (Autentificado === "True") {
    document.body.classList.add('fade-out');
    setTimeout(() => {
      window.location.href = 'Menu.html';
    }, 500);

  } else {
    Swal.fire({
      title: 'Error',
      text: 'El Usuario o la contraseña es incorrecta',
      icon: 'error',
      confirmButtonText: 'Aceptar',
      background: '#050510',
      confirmButtonColor: '#101020',
      color: '#ffffff'
    });
  }
};


let scrollTarget = 0;
let scrollCurrent = 0;
const velocidad = 0.07;

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

