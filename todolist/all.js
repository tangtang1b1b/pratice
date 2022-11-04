var shoplist={};
shoplist.name="MyBuylist 購物清單";
shoplist.time="2022/08/04";
shoplist.list=[
    {name: "吹風機",price: 300},
    {name: "麥克筆",price: 9000},
    {name: "筆記型電腦",price: 54555},
    {name: "Iphone 9",price: 32000},
    {name: "神奇海螺",price: 5000}
];

var item_list="<li id= {{id}} class='buyitem'>{{1}} . {{吹風機}}<div class='price'>{{300}}</div><div id={{deid}} data-delid={{del_item_id}} class='delbtn'>X</div></li>";
var total_item_price="<li class='buyitem delbuyitem'>總價<div class='price price_1'>{{money}}</div></li>";

var cheak=$(".newprice").val();

$(".addbtn").click(function(){
    if(parseInt(cheak).toString()=="NaN"){
        $(".newprice").val("0");
    }
    shoplist.list.push({name:$(".newname").val(),
                        price: $(".newprice").val()});
    showlist();
    $(".newname").val("");
    $(".newprice").val("");
});

/* 外部ajax導入 */

$.ajax({
    url: "https://awiclass.monoame.com/api/command.php?type=get&name=itemdata",
    success: function(res){
        shoplist.list=JSON.parse(res);
        showlist();
    }
});

/* --------------------------------------- */
function showlist(){
    $("#itemlist").html("");
    var total_price=0;
    for(var i=0;i<shoplist.list.length;i++){
        
        var item=shoplist.list[i];
        var item_id="buyitem_"+i;
        var del_item_id="del_buyitem_"+i;
        total_price+=parseInt(item.price);
        var new_item_list=item_list.replace("{{1}}",i+1)
                                   .replace("{{吹風機}}",item.name)
                                   .replace("{{300}}",item.price)
                                   .replace("{{deid}}",del_item_id)
                                   .replace("{{del_item_id}}",i)
                                   .replace("{{id}}",item_id);

        $("#itemlist").append(new_item_list);
        $("#"+del_item_id).click(function(){
            remove_item($(this).attr("data-delid"));
        });
    }
    var new_total_item_price=
        total_item_price.replace("{{money}}",total_price);
    $("#itemlist").append(new_total_item_price);
}
showlist();

function remove_item(id){
    shoplist.list.splice(id,1);
    showlist();
}