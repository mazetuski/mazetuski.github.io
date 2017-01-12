/**
 * Created by maze on 12/01/2017.
 */

$(document).ready(function(){
    $("#capa").data("dato", "valor");
    alert($("#capa").data("dato"));
    $("#capa").removeData("dato");
});