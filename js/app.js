$(document).ready(function() {
    // alert("Bienvenue");
    console.log("Bienvenue");
    $("ul").append("<li><input id='checkbox' type='checkbox' name='checkbox'/> " + "ANALYSER LE CODE AVANT DE COMMENCER" + "</li>");

    $(".send").click(function() {
        var task = $("#tache").val();
        if (task !== "") {
            $("ul").append("<li><input id='checkbox' type='checkbox' name='checkbox'/> " + task + "</li>");
            localStorage.setItem("#tache", task);
            $("#tache").val("");
        };
    });

    $("#remove").click(function() {
        var checkboxes = $("[name=checkbox]");
        for (var i = 0; i < checkboxes.length; i++) {
            if (checkboxes[i].checked) {
                checkboxes[i].parentElement.remove();
            }
        };
    });

    $("input").on("click", function() {
        var checkboxes = $("[name=checkbox]");
        for (var i = 0; i < checkboxes.length; i++) {
            if (checkboxes[i].checked) {
                $(this).parent().css('text-decoration', 'line-through');
            }
        }
    });







});