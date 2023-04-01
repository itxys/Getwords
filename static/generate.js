function generateTags() {
    var positivePrompts = [];
    var negativePrompts = [];

    $("#positive-prompts-list .list-group-item").each(function() {
        positivePrompts.push($(this).text().trim());
    });

    $("#negative-prompts-list .list-group-item").each(function() {
        negativePrompts.push($(this).text().trim());
    });

    $.ajax({
        type: "POST",
        url: "/generate",
        contentType: "application/json;charset=UTF-8",
        data: JSON.stringify({
            positivePrompts: positivePrompts,
            negativePrompts: negativePrompts
        }),
        success: function(response) {
            $("#tags-modal .modal-body").html(response);
            $("#tags-modal").modal("show");
        },
        error: function(error) {
            console.log(error);
        }
    });
}
