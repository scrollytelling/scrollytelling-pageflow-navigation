$.widget('scrollytelling.scrollytellingNavigationCounter', {
  // Active
  setActive: function(page) {
    this.element.find('a').removeClass('active');
    this.element.find('a[href="#' + page.attr('id') + '"]').addClass('active');
  },

  // Show dots per chapter
  showDotsForThisChapter: function(page) {
    // hide others
    this.element.find('li').removeClass('currentChapter');

    // show only dots for this chapter
    this.element.find('li[data-page-chapter-id="' + page[0].dataset.chapterId + '"]').addClass('currentChapter');
  },

  // Page change
  pageChange: function(page) {
        this.setActive(page.element);
        this.showDotsForThisChapter(page.element);
  },

  _create: function() {
    // Listen to page changes
    pageflow.events.on('page:change', this.pageChange.bind(this));

    // Set click handler
    $('a', this.element).on('click', this.onClick);
  },

  onClick: function(event) {
    event.preventDefault();

    var page_id = $(this).attr('data-page-id');

    pageflow.slides.goToById(page_id);
  }
});
