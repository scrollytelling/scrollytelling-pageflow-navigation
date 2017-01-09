$.widget('scrollytelling.facebookSharing', {
  _create: function() {
    $('#share-fb', this.element).on('click', this.onClick);
  },

  onClick: function(event) {
    event.preventDefault();
    var fbSharer = window.open(
      "//www.facebook.com/sharer/sharer.php?u="+encodeURIComponent(location.href.replace(location.hash,"")),
      "Facebook",
      "width=600,height=300"
    );
  }
});

$.widget('scrollytelling.twitterSharing', {
  _create: function() {
    $('#share-tw', this.element).on('click', this.onClick);
  },

  onClick: function(event) {
    event.preventDefault();
    var summary = $("meta[name='description']").attr('content');
    window.scrollytelling = window.scrollytelling || {};
    var twitter_via = window.scrollytelling.twitter_via || 'scrollytelling';
    var twSharer = window.open(
      "//twitter.com/intent/tweet?text="+encodeURIComponent(summary)+"&amp;via="+twitter_via+"&amp;url="+encodeURIComponent(location.href.replace(location.hash,"")),
      "Twitter",
      "width=600,height=260"
    )
  }
});
