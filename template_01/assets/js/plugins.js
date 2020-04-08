(function($) {
  // Random String Generator
  function randomStringGenerate(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    
    return result;
  }

  // Responsible Embeded Iframes
  $.fn.responsiveEmbed = function(options) {
    var selector = this;

    var container = typeof selector.attr('id') == null ? '.' + selector.attr('class') : '#' + selector.attr('id');

    var iframe = $(container + ' > iframe');

    if(typeof options == "undefined")
    {
      options = "";
    }
    else
    {
      options = options;
    }

    if(options.facebook == true)
    {
      if(typeof options.tabs == "undefined")
      {
        var tabs = '&tabs';
      }
      else
      {
        var tabs = options.tabs;
      }

      if(typeof options.height == "undefined")
      {
        var height = 214;
      }
      else
      {
        var height = options.height;
      }

      if(typeof options.small_header == "undefined")
      {
        var small_header = false;
      }
      else
      {
        var small_header = options.small_header;
      }

      if(typeof options.adapt_container_width == "undefined")
      {
        var adapt_container_width = true;
      }
      else
      {
        var adapt_container_width = options.adapt_container_width;
      }

      if(typeof options.hide_cover == "undefined")
      {
        var hide_cover = false;
      }
      else
      {
        var hide_cover = options.hide_cover;
      }

      if(typeof options.show_facepile == "undefined")
      {
        var show_facepile = true;
      }
      else
      {
        var show_facepile = options.show_facepile;
      }

      var template;

      $(window).resize(function() {
        var iframe_src = 'https://www.facebook.com/plugins/page.php?href=' + encodeURI(options.url) + tabs + '&width=' + Math.floor(selector.width()) + '&height=' + height + '&small_header=' + small_header + '&adapt_container_width=' + adapt_container_width + '&hide_cover=' + hide_cover + '&show_facepile=' + show_facepile + '&appId=' + options.appID;

        template = '<iframe src="' + iframe_src + '" width="' + Math.floor(selector.width()) + '" height="' + height + '" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>';

        selector.html(template);
      });

      var iframe_src = 'https://www.facebook.com/plugins/page.php?href=' + encodeURI(options.url) + tabs + '&width=' + Math.floor( selector.width()) + '&height=' + height + '&small_header=' + small_header + '&adapt_container_width=' + adapt_container_width + '&hide_cover=' + hide_cover + '&show_facepile=' + show_facepile + '&appId=' + options.appID;

      template = '<iframe src="' + iframe_src + '" width="' + Math.floor(selector.width()) + '" height="' + height + '" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>';

      selector.html(template);
    }
    else
    {
      $(window).resize(function() {
        iframe.attr('width', selector.width());
      });

      iframe.attr('width', selector.width());
    }
  };

  // Password Toggle
  $.fn.passwordToggle = function(options) {
    var selector = this;
    var id = randomStringGenerate(10);

    var container = typeof selector.attr('id') == null ? '.' + selector.attr('class') : '#' + selector.attr('id');

    if(typeof options == "undefined")
    {
      options = "";
    }

    if(typeof options.text_show == "undefined")
    {
      var text_show = "Show";
    }
    else
    {
      var text_show = options.text_show;
    }

    if(typeof options.text_hide == "undefined")
    {
      var text_hide = "Hide";
    }
    else
    {
      var text_hide = options.text_hide;
    }

    var input = 'pw-toggle-input-' + id;
    var button = 'pw-toggle-btn-' + id;

    $(container + ' > input').attr('id', input);

    $(container + ' > div > button').attr('id', button);

    $('#' + button).click(function() {
      if($('#' + input).attr('type') == "password")
      {
        $('#' + input).attr('type', 'text');
      }
      else if($('#' + input).attr('type') == "text")
      {
        $('#' + input).attr('type', 'password');
      }

      $('#' + button + ' > i').toggleClass('fa-eye fa-eye-slash');

      if($('#' + button).attr('data-original-title') == text_show)
      {
        $('#' + button).attr('data-original-title', text_hide);
      }
      else if($('#' + button).attr('data-original-title') == text_hide)
      {
        $('#' + button).attr('data-original-title', text_show);
      }
    });
  }
}(jQuery));