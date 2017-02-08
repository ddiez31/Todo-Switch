$(document).ready(function() {
    var task;
    var tabTask = [];
    var count = 0;
    var form = $("form").attr("value");
    // alert("Bienvenue");
    console.log("Bienvenue");
    $("ul").append("<li><input id='notchecked' type='checkbox' name='checkbox'/> " + "ANALYSER LE CODE AVANT DE COMMENCER" + "</li>");

    $("form").each(function() {
        $(".send").click(function() {
            task = $("#tache").val();
            tabTask.push(task);
            localStorage.setItem("tache", tabTask);
            if (task !== "") {
                $("ul").append("<li><input id='notchecked' type='checkbox' name='checkbox'/> " + task + "</li>");
                $("#tache").val("");
            };
        });

        $('#todoList').on("change", ":checkbox", function() {
            if (this.checked) {
                $($(this).parent()).css("text-decoration", "line-through")
                $($(this).attr("id", "checked"));
            } else {
                $($(this).parent()).css("text-decoration", "none")
                $($(this).attr("id", "notchecked"));
            }
        });

        $("button").click(function() {
            if (this.value == "doing") {
                +$("li #checked").parent().hide();
                $("li #notchecked").parent().show();
            } else if (this.value == "done") {
                $("li #checked").parent().show();
                $("li #notchecked").parent().hide();
            } else if (this.value == "all") {
                $("li #checked").parent().show();
                $("li #notchecked").parent().show();
            } else if (this.value == "remove") {
                $("li #checked").parent().remove();
            }
        });
    });

    $("#new").click(function() {
        count++;
        $("body").append("<form method='post' action='' value='" + count + "'><div class='submit'><label for='tache'>Tâche à faire </label><input type='text' id='tache' name='tache' /> <button type='button' class='send'>Envoyer</button></form><ul id='todoList'></ul><div class='btn'><button type='button' id='doing' value='doing'>Filtrer tâches à faire</button> <button type='button' id='done' value='done'>Filtrer tâches effectuées</button> <button type='button' id='all' value='all'>Afficher toutes les tâches</button> <button type='button' id='remove' value='remove'>Supprimer tâches effectuées</button></div>");


    });






});