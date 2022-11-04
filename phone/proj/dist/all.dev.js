"use strict";

$(".i5").click(function () {
  $(".type").text($(this).text());
  $(".phone").css("width", "");
  $(".mid").css("height", "");
});
$(".i5s").click(function () {
  $(".type").text($(this).text());
  $(".phone").css("width", "250px");
  $(".mid").css("height", "420px");
});
$(".i6").click(function () {
  $(".type").text($(this).text());
  $(".phone").css("width", "270px");
  $(".mid").css("height", "440px");
});
$(".i6s").click(function () {
  $(".type").text($(this).text());
  $(".phone").css("width", "300px");
  $(".mid").css("height", "480px");
});
var roo = 0;
$(".rotat").click(function () {
  roo++;
  $(".phone").css("transform", "rotate(" + roo * 360 + "deg)");
});
var timeplus = 20;
setInterval(function () {
  if (timeplus < 20) {
    timeplus++;
    console.log(timeplus);

    if (timeplus % 2 == 0) {
      $(".phone").css("left", "30px");
    } else {
      $(".phone").css("left", "-30px");
    }

    if (timeplus == 20) {
      $(".phone").css("left", "");
    }
  }
}, 50);
$(".wiggle").click(function () {
  timeplus = 0;
});
var next = 0;
$(".page").click(function () {
  next++;
  $(".page").css("transform", "translateX(-" + next * 100 + "%)");

  if (next > 2) {
    next = 0;
    $(".page").css("transform", "translateX(0px)");
  }
});
$(".button").click(function () {
  next = 0;
  $(".page").css("transform", "translateX(0px)");
});