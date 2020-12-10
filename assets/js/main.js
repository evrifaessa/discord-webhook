/**
 * BoxBilling
 *
 * @copyright Yağızhan Burak Yakar (https://github.com/evrifaessa)
 * @license   Apache-2.0
 *
 * Copyright, Yağızhan Burak Yakar
 * This source file is subject to the Apache-2.0 License that is bundled
 * with this source code in the file LICENSE
 */

$('#main-form').on('submit', function(e) {
    e.preventDefault();
    var url = $('#url').val();
    var username = $('#username').val();
    var icon = $('#icon-url').val();
    var message = $('#message').val();
    if (!url || !username || !icon || !message)
    {
        return false;
    }

    $.ajax({
        type: "POST",
        url: url,
        data: {
            "content": message,
            "username": username,
            "avatar_url": icon
        },
        success: displayMessage("success", "Successfully passed the message to the webhook."),
        error: function(xhr, status, error) {
            displayMessage("danger", error || "An unexpected error occurred. You might want to check your browser's console output.<br />If you <a href='https://github.com/evrifaessa/discord-webhook/issues'>create an issue</a> about the error, it would be very helpful.");
        }
      });
});

function updatePreview()
{
    if($("#message").val() !== null && $("#message").val() !== '') {
        $("#preview-block").html(discordMarkdown.toHTML($("#message").val()));
    } else {
        $("#preview-block").html('<span class="text-muted" style="color: #ffffff!important"><i class="fas fa-pen"></i> Start writing again to see the preview.</span>');
    }
}

function displayMessage(type, message)
{
    $("#alert-placeholder").html(`<div class="alert alert-${type}" role="alert"><center>${message}</center></div>`);
}