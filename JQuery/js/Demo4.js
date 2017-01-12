/**
 * Created by Miguel Ángel Zamora Blanco on 09/01/2017.
 */

{
    $(document).ready(function(){
        $("a").mouseover(function(evento){
           $("#capa").addClass("clasecss");
        });
        $("a").mouseout(function(evento){
           $("#capa").removeClass("clasecss");
        });
    });
}