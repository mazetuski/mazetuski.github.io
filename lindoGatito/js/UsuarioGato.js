/**
 * Created by Miguel Ángel Zamora Blanco on 18/11/2016.
 */

{
    let gato;
    let imagenGato;
    let pesoGato;
    let animoGato;
    let estadoGato;

    let cambiarFichaGato = function () {
        pesoGato.innerHTML = "Peso: " + gato.getPeso();
        animoGato.innerHTML = "Animo: " + gato.getAnimo();
        estadoGato.innerHTML = "Estado: " + gato.estado;
    }

    let comprobarGatoMuerto = function () {
        if (gato.estaMuerto())
            setGatoMuerto();
    }

    let setGatoMuerto = function () {
        imagenGato.style = "background: url('Imagenes/caMuerto.png'); background-size: 100% 100%;";
    }

    let gatoComer = function () {
        if (!gato.estaMuerto()) {
            gato.comer();
            cambiarFichaGato();
            imagenGato.style = "background: url('Imagenes/catEating.png'); background-size: 100% 100%;";
        }
        comprobarGatoMuerto();
    }
    let gatoDormir = function () {
        if (!gato.estaMuerto()) {
            gato.dormir();
            cambiarFichaGato();
            imagenGato.style = "background: url('Imagenes/catDurmiendo.png'); background-size: 100% 100%;";
        }
        comprobarGatoMuerto();
    }
    let gatoJugar = function () {
        if (!gato.estaMuerto()) {
            gato.jugar();
            cambiarFichaGato();
            imagenGato.style = "background: url('Imagenes/catPlaying.png'); background-size: 100% 100%;";
        }
        comprobarGatoMuerto();
    }

    mostrarGato = function () {
        gato = window.opener.getGato();
        let comer = document.getElementById("comer");
        let dormir = document.getElementById("dormir");
        let jugar = document.getElementById("jugar");
        imagenGato = document.getElementById("imagenGato");
        comer.addEventListener("click", gatoComer);
        dormir.addEventListener("click", gatoDormir);
        jugar.addEventListener("click", gatoJugar);
        let ficha = document.getElementById("fichaGato");
        let nombre = document.createElement("p");
        let texto = document.createTextNode("Nombre: " + gato.nombre);
        nombre.appendChild(texto);
        ficha.appendChild(nombre);
        let fechaNacimiento = document.createElement("p");
        texto = document.createTextNode("Fecha Nacimiento: " + gato.fechaNacimiento);
        fechaNacimiento.appendChild(texto);
        ficha.appendChild(fechaNacimiento);
        let razaFicha = document.createElement("p");
        texto = document.createTextNode("Raza: " + gato.raza);
        razaFicha.appendChild(texto);
        ficha.appendChild(razaFicha);
        pesoGato = document.createElement("p");
        pesoGato.innerHTML = "Peso: " + gato.getPeso();
        ficha.appendChild(pesoGato);
        animoGato = document.createElement("p");
        animoGato.innerHTML = "Animo: " + gato.getAnimo();
        ficha.appendChild(animoGato);
        estadoGato = document.createElement("p");
        estadoGato.innerHTML = "Estado: " + gato.estado;
        ficha.appendChild(estadoGato);
    }


    let init = function () {
        mostrarGato();
    }

    window.onload = init;
}
