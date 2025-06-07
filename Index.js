window.onload = () => {
  document.body.classList.add('fade-in');
};


const btn = document.getElementById('BSesion');


async function backend_Respuesta(Usuario, Contraseña) {
  const response = await fetch(`http://127.0.0.1:5000/Inicio_Sesion?Usuario=${encodeURIComponent(Usuario)}&Contraseña=${encodeURIComponent(Contraseña)}`);
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
