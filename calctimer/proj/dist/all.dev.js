"use strict";

var num = 15;

function calc(wordgg) {
  num = num + wordgg;
}

function check() {
  if (num < 10) {
    $(".text").text("我要沒了....");
    $(".text").css("color", "red");
    $(".block").removeClass("blockcloss");
  } else if (num < 20) {
    $(".text").text("還有還有....");
    $(".text").css("color", "yellow");
    $(".block").addClass("blockcloss");
  } else {
    $(".text").text("滿滿der!!!");
    $(".text").css("color", "white");
  }
}

$(".minus").click(function () {
  calc(-1);
  $(".num").text(num);
  check();
});
$(".plus").click(function () {
  calc(1);
  $(".num").text(num);
  check();
});
var ontw = 0;
$(".block").click(function () {
  setInterval(function () {
    ontw++;
    $(".block").text("☎ 聯絡中..." + ontw);
  }, 1000);
});