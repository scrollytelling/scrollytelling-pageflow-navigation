pageflow.widgetTypes.register('scrollytelling_pageflow_navigation', {
  enhance: function(element) {
    element.scrollytellingNavigationCounter();
    element.scrollytellingNavigationInvert();
    element.facebookSharing();
    element.twitterSharing();
  }
});
