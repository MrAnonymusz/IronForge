$(function() {
  // Tooltip & Popover Triggers
  $('[data-toggle="tooltip"]').tooltip({
    container: 'body'
  });
  $('[data-toggle="popover"]').popover({
    container: 'body'
  });

  // Navigation
  var main_navigation = $(".navbar");
  var sticky_class = "sticky-navbar";
  var header = 0;

  $(window).scroll(function() {
    if( $(this).scrollTop() > header ) {
      main_navigation.addClass(sticky_class);
    } else {
      main_navigation.removeClass(sticky_class);
    }
  });

  if( $(this).scrollTop() > header ) {
    main_navigation.addClass(sticky_class);
  } else {
    main_navigation.removeClass(sticky_class);
  }
});