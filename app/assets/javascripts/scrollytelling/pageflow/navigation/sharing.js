$(document).on('click', '#share-fb', function(event) {
  event.preventDefault();
  var fbSharer = window.open(
    "//www.facebook.com/sharer/sharer.php?u="+encodeURIComponent(location.href.replace(location.hash,"")),
    "Facebook",
    "width=600,height=300"
  );
});

$(document).on('click', '#share-tw', function(event) {
  event.preventDefault();
  var summary = $("meta[name='description']").attr('content');
  var twSharer = window.open(
    "//twitter.com/intent/tweet?text="+encodeURIComponent(summary)+"&amp;via=Scrollytellio&amp;url="+encodeURIComponent(location.href.replace(location.hash,"")),
    "Twitter",
    "width=600,height=260"
  )
});
