/**
 * Created by Miguel Ángel Zamora Blanco on 09/01/2017.
 */

{
    $(document).ready(function(){
        $("a").click(function(evento){
            //alert("Has pulsado el enlace, redireccionando a google.es");
            alert("Has pulsado el enlace pero no vas a ser redireccionado");
            evento.preventDefault();
        })
    });
}