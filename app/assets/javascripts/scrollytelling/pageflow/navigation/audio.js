$(document).on('click', '#mute-audio', function(event) {
  event.preventDefault();
  pageflow.settings.set('volume', 0);
  $('#mute-audio').css({display: "none"});
  $('#play-audio').css({display: "inline-block"});
});

$(document).on('click', '#play-audio', function(event) {
  event.preventDefault();
  pageflow.settings.set('volume', 1);
  $('#mute-audio').css({display: "inline-block"});
  $('#play-audio').css({display: "none"});
});
