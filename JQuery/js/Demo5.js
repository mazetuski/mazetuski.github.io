/**
 * Created by Miguel Ángel Zamora Blanco on 10/01/2017.
 */

$(document).ready(function(){
    $("#mayoria_edad").click(function(evento){
        if ($("#mayoria_edad").prop("checked")){
            $("#formulariomayores").css("display", "block");
        }else{
            $("#formulariomayores").css("display", "none");
        }
    });
});
