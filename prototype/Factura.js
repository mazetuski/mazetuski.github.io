/**
 * Created by Miguel Ángel Zamora Blanco on 15/11/2016.
 * Para instanciar la clase, se debe utilizar la instrucción Factura(cliente, elementos),
 * donde cliente también es una pseudoclase que guarda los datos del cliente y elementos
 * es un array simple que contiene las pseudoclases de todos los elementos que forman la factura.
 */

function Factura(cliente, elementos) {
    this.cliente = cliente;
    this.elementos = elementos;
    this.total = 0;
}

function Cliente(nombre, direccion, telefono) {
    this.nombre = nombre;
    this.direccion = direccion;
    this.telefono = telefono;
}

function Elemento(descripcion, cantidad, precio) {
    this.descripcion = descripcion;
    this.cantidad = cantidad;
    this.precio = precio;
}

Factura.prototype.calcularTotal = function () {
    for (let i = 0; i < this.elementos.length; i++)
        this.total += this.elementos[i].cantidad * this.elementos[i].precio;
}

{
    let arrayElementos = [];

    let nombreCliente;
    let direccion;
    let telefono;
    let descripcion;
    let cantidad;
    let precio;
    let crearFactura;
    let crearElemento;
    let contenedorElemento;
    let contenedorFactura;
    let reset;
    let error;

    let init = function () {
        nombreCliente = document.getElementById("nombre");
        direccion = document.getElementById("direccion");
        telefono = document.getElementById("telefono");
        descripcion = document.getElementById("descripcion");
        cantidad = document.getElementById("cantidad");
        precio = document.getElementById("precio");
        crearFactura = document.getElementById("crearFactura");
        crearElemento = document.getElementById("crearElemento");
        contenedorElemento = document.getElementById("elemento");
        contenedorFactura = document.getElementById("factura");
        reset = document.getElementById("reset");
        error = document.getElementById("errores");

        crearFactura.addEventListener("click", crearNuevaFacturaYMostrar);
        reset.addEventListener("click", resetear);
        crearElemento.addEventListener("click", annadirElemento);

    }

    let resetear = function () {
        nombreCliente.value = "";
        direccion.value = "";
        telefono.value = "";
        descripcion.value = "";
        cantidad.value = "";
        precio.value = "";
        arrayElementos = [];
        contenedorFactura.innerHTML = "";
        contenedorElemento.innerHTML = "";
    }

    let annadirElemento = function () {
        if (cantidad.value <= 0 || precio.value <= 0)
            error.innerHTML = "El precio y la cantidad deben ser mayores que 0";
        else {
            arrayElementos.push(new Elemento(descripcion.value, cantidad.value, precio.value));
            contenedorElemento.innerHTML += "Descripcion: " + descripcion.value + " <br/>Cantidad: " +
                cantidad.value + "<br/>Precio: " + precio.value + "€<br/>______________________________<br/><br/>";
            error.innerHTML = "";
        }
    }

    let comprobarTelefono = function () {
        let patronTelefono = /^[1-9]{1}[0-9]{8}$/;
        return patronTelefono.test(telefono.value);
    }

    let crearNuevaFacturaYMostrar = function () {
        if (nombreCliente.value.length <= 0 || !comprobarTelefono())
            error.innerHTML = "El nombre no puede estar vacio y el teléfono debe ser válido";
        else {
            let factura = new Factura(new Cliente(nombreCliente.value, direccion.value, telefono.value), arrayElementos);
            factura.calcularTotal();
            contenedorFactura.innerHTML = "Cliente: " + factura.cliente.nombre + ", Total: " + factura.total + "€";
            error.innerHTML = "";
        }
    }

    window.onload = init;
}