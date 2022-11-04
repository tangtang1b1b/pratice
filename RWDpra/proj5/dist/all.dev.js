"use strict";

var s = skrollr.init();
$(window).scroll(function (evt) {
  if ($(window).scrollTop() > 0) {
    $(".totop").css("right", "20px");
    $(".totop").css("opacity", "1");
    $(".navbar").removeClass("navbar-top");
  } else {
    $(".totop").css("right", "-120px");
    $(".totop").css("opacity", "0");
    $(".navbar").addClass("navbar-top");
  }
});