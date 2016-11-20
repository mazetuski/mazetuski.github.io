/**
 * Created by Miguel Ángel Zamora Blanco on 18/11/2016.
 *
 * Crea una clase Gato, y a partir de ella crea tantos gatos como quiera el usuario.
 * Cada gato tendrá un nombre, una fecha de nacimiento, una raza y un peso (1-15).
 * Cada vez que crees un objeto gato aparecerá una ventana nueva con una imagen que cambiará en función de su estado (comiendo, durmiendo y jugando, que es su estado habitual).
 * El usuario podrá averiguar la edad del gato partiendo de un evento.
 * Evita las cajas de texto
 * No puedes usar ni alert ni prompt
 * Hazlo lo más dinámico posible.
 * Utiliza prototype para los métodos
 */

{
    let estado = ["Jugando", "Durmiendo", "Comiendo", "Muerto"];
    let gato;
    let nombreGato;
    let error;
    let dia;
    let mes;
    let anio;
    let raza;
    let peso;
    let fecha;

    Gato.prototype.setPeso = function (peso) {
        if (this.peso >= 1 && this.peso <= 15)
            this.peso = peso;
        if (this.peso < 1 || this.peso > 15)
            this.estado = estado[3];
    }

    Gato.prototype.getPeso = function () {
        return this.peso;
    }

    Gato.prototype.setAnimo = function (animo) {
        if (this.animo >= 1 && this.animo <= 9)
            this.animo = animo;
        if (this.animo < 1 || this.animo > 9)
            this.estado = estado[3];
    }

    Gato.prototype.getAnimo = function () {
        return this.animo;
    }

    Gato.prototype.aumentaAnimo = function () {
        this.setAnimo(this.getAnimo() + 1);
    }

    Gato.prototype.disminuyeAnimo = function () {
        this.setAnimo(this.getAnimo() - 1);
    }

    Gato.prototype.jugar = function () {
        this.estado = estado[0];
        this.aumentaAnimo();
        this.setPeso(this.getPeso() - 1);
    }

    Gato.prototype.dormir = function () {
        this.estado = estado[1];
        this.disminuyeAnimo();
    }

    Gato.prototype.comer = function () {
        this.estado = estado[2];
        this.setPeso(this.getPeso() + 1);
    }

    Gato.prototype.estaMuerto = function () {
        return this.estado == estado[3];
    }

    function Gato(nombre, dia, mes, anio, raza, peso) {
        this.nombre = nombre;
        fecha = new Date(anio, mes, dia);
        this.fechaNacimiento = fecha.getDate()+"/"+fecha.getMonth()+"/"+fecha.getFullYear();
        this.raza = raza;
        this.peso = peso;
        this.estado = estado[0];
        this.animo = 4;
    }


    let ventanaGato = function () {
        if (nombreGato.value.length === 0 || anio.value < 2006 || anio.value > 2016 || mes.value < 1 || dia.value < 1 || raza.value.length === 0 || peso.value < 1 || peso.value > 15)
            error.innerHTML = "El gato debe tener un nombre, una raza, un peso entre 1-15 y como mucho tener 10 años";
        else {
            error.innerHTML = "";
            gato = new Gato(nombreGato.value, dia.value, mes.value, anio.value, raza.value, parseInt(peso.value));
            let nuevaVentana = window.open("NuevoGato.html", "", "height=700, width=900, top=0, left=0");
        }
    }

    var getGato = function(){
        return gato;
    }

    let init = function () {
        let nuevoGato = document.getElementById("crearGato");
        error = document.getElementById("error");
        nombreGato = document.getElementById("nombre");
        dia = document.getElementById("dia");
        mes = document.getElementById("mes");
        anio = document.getElementById("anio");
        raza = document.getElementById("raza");
        peso = document.getElementById("peso");
        nuevoGato.addEventListener("click", ventanaGato);
    }

    window.onload = init;
}