/**
 * Created by MIGUEL ÁNGEL ZAMORA BLANCO on 15/12/2016.
 */

{
    /**
     * Función que crea una ventana nueva a partir de ventanaTodoUnPoco.html.
     * @param e
     */
    let crearVentanaDeTodoUnPoco = function (e) {
        e.preventDefault();
        let ventanaNueva = window.open("ventanaTodoUnPoco.html", "");
    }

    /**
     * Función que crea una ventana a partir de formularioEmpleado.html.
     */
    let crearVentanaFormulario = function(){
        let ventanaFormulario = window.open("formularioEmpleado.html", "Empleado");
    }

    /**
     * Función que carga los elementos del arbol dom y añade los eventos.
     */
    let init = function () {
        let enlaceTodoUnPoco = document.getElementById("enlaceTodo");
        let botonEmpleado = document.getElementById("botonEmpleado");

        enlaceTodoUnPoco.addEventListener("click", crearVentanaDeTodoUnPoco);
        botonEmpleado.addEventListener("click", crearVentanaFormulario);

    }

    window.onload = init;
}