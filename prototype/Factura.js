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

    let init = function () {
        let nombreCliente = document.getElementById("nombre");
        let direccion = document.getElementById("direccion");
        let telefono = document.getElementById("telefono");
        let descripcion = document.getElementById("descripcion");
        let cantidad = document.getElementById("cantidad");
        let precio = document.getElementById("precio");
        let crearFactura = document.getElementById("crearFactura");
        let crearElemento = document.getElementById("crearElemento");
        let contenedorElemento = document.getElementById("elemento");
        let contenedorFactura = document.getElementById("factura");
        let reset = document.getElementById("reset");
        let error = document.getElementById("errores");

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
            if (nombreCliente.length <= 0 || !comprobarTelefono())
                error.innerHTML = "El nombre no puede estar vacio y el teléfono debe ser válido";
            else {
                let factura = new Factura(new Cliente(nombreCliente.value, direccion.value, telefono.value), arrayElementos);
                factura.calcularTotal();
                contenedorFactura.innerHTML = "Cliente: " + factura.cliente.nombre + ", Total: " + factura.total + "€";
                error.innerHTML = "";
            }
        }

        crearFactura.addEventListener("click", crearNuevaFacturaYMostrar);
        reset.addEventListener("click", resetear);
        crearElemento.addEventListener("click", annadirElemento);


    }

    window.onload = init;
}