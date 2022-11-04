"use strict";

var tododata = "https://awiclass.monoame.com/api/command.php?type=get&name=tododata";
var itemlist = "<li id='list' class='{{list}}'>{{num}}.<div class='name'>{{object}}</div><div class='date'>-{{time}}</div></li>";
$.ajax({
  url: "https://awiclass.monoame.com/api/command.php?type=get&name=tododata",
  success: function success(response) {
    var item = JSON.parse(response);
    var check = item.done;

    for (var i = 0; i < item.length; i++) {
      var itemall = item[i];
      var check = itemall.done;

      if (check == true) {
        var checkyes = "gogo";
      } else {
        var checkyes = "";
      } // console.log(itemall);


      var new_itemlist = itemlist.replace("{{num}}", i + 1).replace("{{object}}", itemall.name).replace("{{time}}", itemall.date).replace("{{list}}", checkyes);
      $("#papago").append(new_itemlist);
    }
  }
});