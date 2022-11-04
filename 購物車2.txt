"use strict";
// 檢查購物車資料是否存在
document.addEventListener("DOMContentLoaded", function () {
    if (localStorage.carts == null) {
        localStorage.carts = '[]';
        console.log("[[[]]]]");
    }
});


var cart_count_el = JSON.parse(localStorage.getItem("carts"));
// console.log(cart_count_el.length);

/*
// 購物車的數字和即時更新
var nav_cart_el = document.getElementsByClassName("cart_count")[0];
// console.log(nav_cart_el.innerText);
function cart_count_renew() {
    cart_count_el = JSON.parse(localStorage.getItem("carts"));
    if (cart_count_el !== null) {
        nav_cart_el.innerText = cart_count_el.length;
        // console.log("aaa");
    }
}
*/

// 讀入localS購物車
function get_takes() {
    let carts = JSON.parse(localStorage.getItem("carts"));
    // console.log(tasks);
    if (carts != null) {
        for (let i = 0; i < carts.length; i++) {
            let list_html = `
            <ul class="cart-content">
            <li class="cart-content-flex" prd_id="${carts[i].prd_id}" prd_index="${i}">
            <div class="img">
                <img src="./source/product/ring/${carts[i].prd_id}.jpg" alt="">
            </div>
            <div class="info">
                <p>${carts[i].prd_name}</p>
                <p>${carts[i].prd_size}</p>
                <p>${carts[i].prd_type}</p>
            </div>
        </li>
        <li class="price">
            <p>${carts[i].prd_price}</p>
        </li>
        <li class="count">
            <div><span class="num-jian">-</span></div>
            <div><input type="text" class="input-num" value="${carts[i].prd_count}" /></div>
            <div><span class="num-jia">+</span></div>
        </li>
        <li class="operate">
            <a href="#" class="del">
                <i class="fas fa-trash-alt"></i>
            </a>
            <a href="#">
                <i class="far fa-heart"></i>
            </a>
        </li>
        </ul>
        `
            //定義 ul_task_list 
            let ul_task_list = document.getElementsByClassName("sp-cart-header")[0];
            ul_task_list.insertAdjacentHTML("afterend", list_html);
        }

    }
}

//   商品頁的加入購物車
let add_cart_btn = document.getElementsByClassName("prd-btn")[0];
let prd_wrp = document.getElementsByClassName("top")[0];
if (add_cart_btn != null && prd_wrp != null) {
    add_cart_btn.addEventListener("click", function (e) {
        e.preventDefault();

        //判斷商品數量
        let count_nub = document.getElementsByClassName("prd_nub")[0];
        let prd_name = document.getElementsByTagName("h2")[0];
        let prd_id = prd_name.getAttribute("prd_id");
        let prd_conut = document.getElementById("num").value;
        let price = document.getElementsByClassName("price")[0];
        let size = document.getElementById("size").value;
        // console.log(size);
        let type = document.getElementById("type").value;
        // console.log(type);
        // 存入localStorage
        let task = {
            "prd_id": prd_id,
            "prd_name": prd_name.innerText,
            "prd_price": price.innerText,
            "prd_size": size,
            "prd_type": type,
            "prd_count": prd_conut,
            "prd_text": ''
        };

        let carts = JSON.parse(localStorage.getItem("carts"));
        if (prd_conut !== 0 || prd_conut !== "") {
            // console.log(carts);
            // console.log(prd_conut.value);
            if (carts) { // 若存在
                carts.unshift(task); // [{}, {}]
            } else { // 若不存在
                carts = [task];
            }
            localStorage.setItem("carts", JSON.stringify(carts));
            alert("已加入購物車！");
            // cart_count_renew();
        };
    });

};

//切到購物車頁面
document.addEventListener("DOMContentLoaded", function (e) {
    // console.log(document.title);
    if (document.title == "購物車 | 留憶金工") {
        get_takes();

        // let cart_list = document.getElementsByClassName("cart_prd");
        // console.log(cart_list.length);

        let del = document.getElementsByClassName("fa-trash-alt");

        // 刪除一項商品
        document.addEventListener("click", function (e) {
            if (e.target.classList.contains("fa-trash-alt")) {
                // console.log(e);
                e.preventDefault();
                // console.log(e.target.parentElement.parentElement.parentElement);
                let ul_task_list = e.target.parentElement.parentElement.parentElement;
                let ul_task_list_index = ul_task_list.getAttribute("prd_index");
                let carts = JSON.parse(localStorage.getItem("carts"));
                let updata = carts;
                updata.splice(ul_task_list_index, 1);
                localStorage.setItem("carts", JSON.stringify(updata));
                cart_total_renew();
                ul_task_list.classList.add("fade_out");
                setTimeout(function () {
                    ul_task_list.remove();
                }, 500);
                if (localStorage.carts == "[]") {
                    time_to_shop();
                }
            }

            //按下+號
            if ((e.target.querySelector(".num-jia") && e.target.closest(".count")) || e.target.classList.contains("num-jia")) {
                let prd_countel = e.target.parentElement.closest(".count");
                let cart_content = e.target.parentElement.closest(".cart-content");
                prd_countel = prd_countel.querySelector("input");
                prd_countel.value++;

                //更新購物車
                let prd_index = cart_content.querySelector(".cart-content-flex").getAttribute("prd_index");
                let carts = JSON.parse(localStorage.getItem("carts"));
                carts[prd_index].prd_count = prd_countel.value;
                localStorage.setItem("carts", JSON.stringify(carts));

                cart_total_renew();
            }

            // 按下-號
            if ((e.target.querySelector(".num-jian") && e.target.closest(".count")) || e.target.classList.contains("num-jian")) {
                let prd_countel = e.target.parentElement.closest(".count");
                let cart_content = e.target.parentElement.closest(".cart-content");
                prd_countel = prd_countel.querySelector("input");
                if (prd_countel.value > 1) {
                    prd_countel.value--;
                }

                //更新購物車
                let prd_index = cart_content.querySelector(".cart-content-flex").getAttribute("prd_index");
                let carts = JSON.parse(localStorage.getItem("carts"));
                carts[prd_index].prd_count = prd_countel.value;
                localStorage.setItem("carts", JSON.stringify(carts));

                cart_total_renew();
            }
        });

        // 購物車內的總結金額
        if (cart_count_el.length != 0) {
            cart_total_renew();
        }


    }
});


// 計算商品總價
function cart_total_renew() {
    // console.log("a")
    let cart_total_el = document.getElementsByClassName("cart-total-price")[0];
    let cart_total_price = cart_total_el.querySelector(" li:first-child > span:nth-child(2)");
    let cart_total_price2 = cart_total_el.querySelector(" li:nth-child(4) > span:nth-child(2)");
    // console.log(cart_total_price);
    let task = JSON.parse(localStorage.getItem("carts"));
    let local_total_price = 0;
    for (let i = 0; i < task.length; i++) {
        // console.log("商品數量" + task[i].prd_count + ";商品價錢" + task[i].prd_price + ";商品金額" + task[i].prd_count *task[i].prd_price);
        local_total_price += (parseInt(task[i].prd_price) * parseInt(task[i].prd_count));
    }
    // console.log(local_total_price);
    cart_total_price.innerText = local_total_price;
    cart_total_price2.innerText = local_total_price + 80;

}