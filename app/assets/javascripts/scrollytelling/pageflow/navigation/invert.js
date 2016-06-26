// Set class .page-invert on body if the active page has the class .invert
pageflow.Invert = {

  container: $('body'),

  changeInvert: function(page) {
    this.setInvert(page.element[0]);
  },

  setInvert: function(page_element) {
    $(page_element).hasClass('invert') ? this.container.addClass('page-invert') : this.container.removeClass('page-invert');
  },

  init: function() {

    // Set inverted class on first load
    this.setInvert(pageflow.slides.currentPage()[0]);

    // Listen to page changes
    pageflow.events.on('page:change', this.changeInvert.bind(this));

  }
}

pageflow.ready.then(function() {
  pageflow.Invert.init();
});
