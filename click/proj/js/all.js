$(".button").click(function(){
    $(".button").text("已經購買");
    $(".button").addClass("buybuy");
});



$(".setitem").click(function(){
    $(".showchoose").text("已經選擇:"+$(this).text());
    
    var data=$(this).attr("data");
    $(".show_cata").text(data);
    if(data == "flower"){
        $(".show_cata").append(":恭喜是花花");
    }else{
        $(".show_cata").append(":可憐阿魯蛇");
    }
});

$(".moveinout").mouseenter(function () { 
    $(this).text("點擊進來吧...");
});
$(".moveinout").mouseleave(function () { 
    $(this).text("遲早都要的...確定餒");
});

setTimeout(function(){
    $(".timeover").css("background-color","red");
    $(".timeover").css("color","white");
    $(".timeover").css("border","solid 2px black");
},5000);

var num=1;
setInterval(function(){  
    if(num>5){
        num=1;
    }
    $(".timeokay").text("經過了"+num+"秒");
    num++;
},1000);
