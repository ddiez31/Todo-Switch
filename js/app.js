$(document).ready(function() {
    $(".send").click(function() {
        var task = $("#tache").val();
        $("ul").append("<li><input id='checkbox' type='checkbox'>" + task + "</li>")

        $("#checkbox").click(function() {
            if (this.checked) {
                $($(this).parent()).css('text-decoration', 'line-through')
            }
        })
    })
});