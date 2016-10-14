/**
 * Created by Miguel Ángel Zamora Blanco on 14/10/2016.
 *
 * Implementa ComprobacionFecha que solicite el día, el mes y el año e indique si la
 * fecha es correcta. Si lo fuera, ha de mostrar el día después.
 */

{
    let pedirFecha = function () {
        let dia = prompt("Introduce el dia");
        let mes = prompt("Introduce el mes");
        let anio = prompt("Introduce el año");
        return dia + "/" + mes + "/" + anio;
    }

    let comprobarFecha = function (fecha) {
        let fechaUsuario = fecha.split("/");
        let dia = fechaUsuario[0];
        let mes = fechaUsuario[1];
        let anio = fechaUsuario[2];
        if ((mes > 0 && mes < 13) && (anio >= 0 && anio < 4000) && (dia > 0 && dia <= (new Date(anio, mes, 0).getDate())))
            return "La Fecha " +dia+"/"+mes+"/"+anio+" es correcta";
        return "La Fecha " +dia+"/"+mes+"/"+anio+" es incorrecta";
    }

    console.log(comprobarFecha(pedirFecha()));
}
