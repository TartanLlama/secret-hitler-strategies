---
---

$( document ).ready(function() {

    $("hr").first().after('<h2>Table of Contents</h2><ul id="table-of-contents"></ul><hr/>')
    
    $("h2").filter("[id]").each(function () {
        var linkText = '<a href="#' + $(this).attr("id") + '">'
        $(this).append(linkText + '<i class="fa fa-link"></i></a>');
        $('#table-of-contents').append('<li>' + linkText + $(this).contents().text() + '</a></li>');
    });

});
