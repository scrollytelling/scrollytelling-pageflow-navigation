pageflow.widgetTypes.register('scrollytelling_pageflow_navigation', {
  enhance: function(element) {
    element.scrollytellingNavigationCounter();
    element.scrollytellingNavigationInvert();
    element.facebookSharing();
    element.twitterSharing();
    element.audioControl();

    // Enable the parent page globally (Pageflow enables it only in mobile nav).
    $('.parent_page', element).parentPageButton({
      visibleClass: 'is_visible'
    })

    // hacky: if the entry URL matches 'onsite', push onsite class on the navigation.
    // this allows us to hide the sharing widgets for onsite productions.
    if($('head link[href*="onsite"]').length > 0) {
      element.addClass('onsite');
    }
  }
});
