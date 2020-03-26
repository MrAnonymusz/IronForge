$(function() {
  // Tooltip & Popover Triggers
  $('[data-toggle="tooltip"]').tooltip();
  $('[data-toggle="popover"]').popover();

  // Navbar
  var main_navbar = $(".navbar");
  var stciky_class = "navbar-sticky";
  var header = 0;

  $(window).scroll(function() {
    if($(this).scrollTop() > header ) {
      main_navbar.addClass(stciky_class);
    } else {
      main_navbar.removeClass(stciky_class);
    }
  });

  // Navbar Sidebar
  function navSidebarCore(selector) {
    var sidebar = $('.nav-sidebar');
    var navbar = $(".navbar");

    var container = $(selector).attr('id') == "" ? '.' + $(selector).attr('class') : '#' + $(selector).attr('id');

    $(container + ' > i').toggleClass('fa-rotate-180');
    $(container).toggleClass('active');

    $(window).resize(function() {
      sidebar.css('top', navbar.outerHeight());
      sidebar.css('height', $(window).height() - navbar.outerHeight());
    });

    sidebar.css('top', navbar.outerHeight());
    sidebar.css('height', $(window).height() - navbar.outerHeight());

    sidebar.toggle();
  }

  $('#toggle-nav-sidebar').click(function() {
    navSidebarCore(this);
  });

  $(window).resize(function() {
    if($(window).width() <= 990)
    {
      $('.navbar-toggler').click(function() {
        if($('#toggle-nav-sidebar').hasClass('active'))
        {
          $('#toggle-nav-sidebar').removeClass('active');
          $('#toggle-nav-sidebar > i').removeClass('fa-rotate-180');
          $('.nav-sidebar').hide();
        }
      });
    }
  });

  if($(window).width() <= 990)
  {
    $('.navbar-toggler').click(function() {
      if($('#toggle-nav-sidebar').hasClass('active'))
      {
        $('#toggle-nav-sidebar').removeClass('active');
        $('#toggle-nav-sidebar > i').removeClass('fa-rotate-180');
        $('.nav-sidebar').hide();
      }
    });
  }

  // Container Arrows
  var window_width = $(window).width();

  $('.arrow-top-container-left').css('border-left-width', (window_width / 2) + 'px');
  $('.arrow-top-container-right').css('border-left-width', (window_width / 2) + 'px');
  $('.arrow-bottom-container-left').css('border-right-width', (window_width / 2) + 'px');
  $('.arrow-bottom-container-right').css('border-right-width', (window_width / 2) + 'px');

  $(window).resize(function() {
    window_width = $(window).width();

    $('.arrow-top-container-left').css('border-left-width', (window_width / 2) + 'px');
    $('.arrow-top-container-right').css('border-left-width', (window_width / 2) + 'px');
    $('.arrow-bottom-container-left').css('border-right-width', (window_width / 2) + 'px');
    $('.arrow-bottom-container-right').css('border-right-width', (window_width / 2) + 'px');
  });
});