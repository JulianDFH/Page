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
