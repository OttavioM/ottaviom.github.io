jQuery(document).ready(function() {
    "use strict";
    jQuery('.menu > ul > li:has( > ul)').addClass('menu-dropdown-icon');
    jQuery('.menu > ul > li > ul:not(:has(ul))').addClass('normal-sub');
    jQuery(".menu > ul").before("<a href=\"#\" class=\"menu-mobile\">&nbsp;</a>");
    jQuery(".menu > ul > li").hover(function(e) {
      if (jQuery(window).width() > 943) {
        jQuery(this).children("ul").stop(true, false).fadeToggle(150);
        e.preventDefault();
      }
    });
    jQuery(".menu > ul > li").click(function() {
      if (jQuery(window).width() <= 943) {
        jQuery(this).children("ul").fadeToggle(150);
      }
    });
    jQuery(".menu-mobile").click(function(e) {
      jQuery(".menu > ul").toggleClass('show-on-mobile');
      e.preventDefault();
    });
  });
  
  jQuery(window).resize(function() {
    jQuery(".menu > ul > li").children("ul").hide();
    jQuery(".menu > ul").removeClass('show-on-mobile');
  });
  