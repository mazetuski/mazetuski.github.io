/**
 * Created by Miguel Ángel Zamora Blanco on 18/01/2017.
 */

$(function(){
    $("#imagenes img").mouseover(function(){
       $(this).css({
           "opacity": "1",
           "cursor" : "pointer"

       });
    });

    $("#imagenes img").mouseout(function(){
        $(this).css("opacity", ".5");
    });

    $("#imagenes img").click(function(){
        let url = $(this).attr("src");
        $("#principalImagenes img").fadeOut(300, function(){
            $("#principalImagenes img").attr("src", url);
           $("#principalImagenes img").fadeIn(200);
        });
    });

    $(".zoom").fancybox();
});