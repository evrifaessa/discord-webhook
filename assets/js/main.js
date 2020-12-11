/**
 * discord-webhook
 *
 * @copyright Yağızhan Burak Yakar (https://github.com/evrifaessa)
 * @license   Apache-2.0
 *
 * Copyright, Yağızhan Burak Yakar
 * This source file is subject to the Apache-2.0 License that is bundled
 * with this source code in the file LICENSE
 */

$(document).ready(function() {
    function updateDarkColorScheme() {
      if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
        $("body").removeClass('bg-light').addClass("bg-dark");
      } else {
        $("body").addClass('bg-light').removeClass("bg-dark");
      }
    }
    // Let's update it on the very first load.
    updateDarkColorScheme();
    // and also every time it changes
    if (window.matchMedia) window.matchMedia("(prefers-color-scheme: dark)").addListener( updateDarkColorScheme );
  });

$(window).on('load', function() {
    $('.preloader').fadeOut('slow');
});

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
        url: "https://discord.com/api/webhooks/" + url,
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

function clearURL()
{
  const hostnameRegex = /(.*\/\/|)(canary\.|)discord(app|)\.com\/api\/webhooks\//gm;
    if($("#url").val() !== null && $("#url").val() !== '') {
        $("#url").val($("#url").val().replace(hostnameRegex, ''));
    }
}

function displayMessage(type, message)
{
    $("#alert-placeholder").html(`<div class="alert alert-${type}" role="alert"><center>${message}</center></div>`);
}

$("#preview-label").click(function() {
  $('html, body').animate({
      scrollTop: $("#message").offset().top
  }, 2000);
  $("#message").focus();
});