$(document).ready(function(){
    $("#p1").hide();

    $("#p3").click(function(){
        $("#p1").toggle();
    });

    $("p").hover(
        function() { $(this).css("background-color", "#f8f9fa"); },
        function() { $(this).css("background-color", "white"); }
    );

    $("form").focusin(function () {
        $("label").addClass("bg-light text-primary rounded px-2");
    });

    $("#nom-err").hide();
    
    $("#nom").on('input', function(){
        const nomSaisi = $(this).val().trim();
        if(nomSaisi.length < 2){
            $("#nom-err").show();
        } else {
            $("#nom-err").hide();
        }
    });
});