$.widget('scrollytelling.audioControl', {
  _create: function() {
    $('#scrollytelling-audio', this.element).on('click', this.toggleAudio);
  },

  toggleAudio: function(event) {
    event.preventDefault();
    var target = $(event.target);

    if(pageflow.settings.get('volume') > 0) {
      pageflow.settings.set('volume', 0);
      target.removeClass('audio-playing').addClass('audio-muted');
    } else {
      pageflow.settings.set('volume', 1);
      target.removeClass('audio-muted').addClass('audio-playing');
    }
  }
});
