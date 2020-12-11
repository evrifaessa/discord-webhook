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

/* Lazy loading images */
let imgs = $("img");
for(let a=0;a<imgs.length;a++){
  if ($(a).attr("ref-src")) loadImage(imgs[a]);
}

function loadImage(elem){
  let url = $(elem).attr("ref-src");
  let newImg = new Image();
  newImg.onload = function(){
    $(elem).attr("src", url);
  }
  newImg.src = url;
}

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

function updateImagePreview(url)
{
    if($("#preview-image").val() !== null && $("#preview-image") !== '') {
      $("#preview-image").attr("src", "./assets/images/spinner.gif");
      $("#preview-image").attr("ref-src", url);
      loadImage($("#preview-image"));
    }
}

function updateMarkdownPreview()
{
    if($("#message").val() !== null && $("#message").val() !== '') {
        $("#preview-block").html(discordMarkdown.toHTML($("#message").val()));
    } else {
        $("#preview-block").html('<span class="text-muted" style="color: #ffffff!important"><i class="fas fa-pen"></i> Start writing again to see the preview.</span>');
    }
}

/**
  * This function will fetch the predefined values from Discord's API.
  * We'll get the default username, the default icon, and fill in the values of inputs with those information.
 */
function fetchPredefined(url)
{
  if (!url) return displayMessage("danger", "In order to fetch values from Discord, you first need to enter the URL.");

  $.ajax({
    url: url,
    cache: false,
    success: function(data){
      if (data["name"]) $("#username").val(data["name"]);
      if (data["avatar"]) $("#icon-url").val(`https://cdn.discordapp.com/avatars/${data["id"]}/${data["avatar"]}.png`) && updateImagePreview(`https://cdn.discordapp.com/avatars/${data["id"]}/${data["avatar"]}.png`);
    }
  });
}

function clearURL()
{
  const hostnameRegex = /(.*\/\/|)(canary\.|)discord(app|)\.com\/api\/webhooks\//gm;
    if($("#url").val() !== null && $("#url").val() !== '') {
        $("#url").val($("#url").val().replace(hostnameRegex, ''));
    }
}

function handleIconChange()
{
  if($("#icon-url").val() !== null && $("#icon-url").val() !== '') {
    updateImagePreview($("#icon-url").val());
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

$("#retreive").click(function() {
  fetchPredefined("https://discord.com/api/webhooks/" + $('#url').val())
});