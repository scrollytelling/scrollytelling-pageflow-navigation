pageflow.Counter = {
  navigation: function() {
    return $('#scrollytelling-pageflow-navigation');
  },

  setActive: function(page) {
    this.navigation().find('a').removeClass('active');
    this.navigation().find('a[href="#'+page.id+'"]').addClass('active');
  },

  updateActive: function(page) {
    this.setActive(page.element[0]);
  },

  init: function() {
    // Init active dot
    this.setActive(pageflow.atmo.slideshow.currentPage()[0]);

    // Listen to page changes
    pageflow.events.on('page:change', this.updateActive.bind(this));

    // Set click handler
    $('a', this.navigation()).on('click', this.onClick);
  },

  onClick: function(event) {
    event.preventDefault();

    var page_id = $(this).attr('data-page-id');

    pageflow.atmo.slideshow.goToById(page_id);
  }
}

pageflow.ready.then(function() {
  pageflow.Counter.init();
});
