---
---

$( document ).ready(function() {

    $("h2").filter("[id]").each(function () {
        $(this).append('<a href="#' + $(this).attr("id") + '"><i class="fa fa-link"></i></a>');
    });

});
