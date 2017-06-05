---
---

$( document ).ready(function() {
    $("h2,h3,h4").filter("[id]").each(function () {
        var linkText = '<a href="#' + $(this).attr("id") + '">'
        $(this).append(linkText + '<i class="fa fa-link"></i></a>');
    });
});
