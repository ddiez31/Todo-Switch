$(document).ready(function() {
    // alert("Bienvenue");
    console.log("Bienvenue");
    $("ul").append("<li><input id='checkbox' type='checkbox'/> " + "ANALYSER LE CODE AVANT DE COMMENCER" + "</li>");

    $(".send").click(function() {
        var task = $("#tache").val();
        if (task !== "") {
            $("ul").append("<li><input id='checkbox' type='checkbox'/> " + task + "</li>");
            localStorage.setItem("#tache", task);
        };
    });


    if ($("#checkbox").is(':checked')) {
        $(this).parent().css('text-decoration', 'line-through');
    }


    // function removeFinished() {
    //     var checkboxes = $("#checkbox").attr();
    //     for (var i = 0; i < checkboxes.length; i++) {
    //         if (checkboxes[i].checked) {
    //             //checkboxes[i].parentElement.remove();
    //             checkboxes[i].parentElement.style.display = "none";
    //         }
    //     }
    // }



    $('#remove').click(function() {
        $().css("display", "none");
    });



});