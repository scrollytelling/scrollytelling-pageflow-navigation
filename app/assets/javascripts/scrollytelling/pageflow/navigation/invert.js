// Set class .page-invert on widget element if the active page has the
// class .invert
$.widget('scrollytelling.scrollytellingNavigationInvert', {
  changeInvert: function(page) {
    this.setInvert(page.element);
  },

  setInvert: function(pageElement) {
    this.element.toggleClass('page-invert', pageElement.hasClass('invert'));
    $('.navigation_mobile').toggleClass('page-invert', pageElement.hasClass('invert'));
  },

  _create: function() {
    // Set inverted class on first load
    this.setInvert(pageflow.slides.currentPage());

    // Listen to page changes
    pageflow.events.on('page:change', this.changeInvert.bind(this));

  }
});
