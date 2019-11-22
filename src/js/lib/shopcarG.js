let baseUrl = "http://localhost:8080/199854/mi/";
define(["jquery", "cookie"], function ($, cookie) {
    return {
        load: function () {
            let shop = cookie.get("shop");
            let user = cookie.get("user");

            if(user){
                $(".shop-user-name").html(JSON.parse(cookie.get("user")).name+' <span class="iconfont icon-xiala"></span>')
                $(".shop-zhuce").html("我的订单")
            }


            if (!user) {
                console.log(1)
                return;
            } else if(!shop||shop=="[]"){
                console.log(2)
                $(".car-denglu").addClass("car-none")
                console.log($(".car-denglu"))
            }else{
                console.log(3)
                $(".no-shop").addClass("car-none");
            $(".shops-car").removeClass("car-none");
            }




        },
        vray: function (fn) {
            if (cookie.get("shop")) {
                let val = JSON.parse(cookie.get("shop"));
                let data = ``;
                val.forEach((elm) => {
                    data += `<ul class="clear shops-data">
                <li class="shop-data-li1">
                    <span class="iconfont icon-anonymous-iconfont car-xuanze"> </span>
                </li>
                <li class="shop-data-li2">
                <img src="${elm.img}" alt="">
                </li>
                <li class="shop-data-li3">${elm.Name}</li>
                <li class="shop-data-li4">${elm.price}</li>
                <li class="shop-data-li5">
                    <div>
                            <span class="iconfont icon-jian"></span>
                            <input type="text" class="shop-num" value="${elm.num}">
                            <span class="iconfont icon-jia"></span>
                    </div>
                </li>
                <li class="shop-data-li6">${(elm.num) * parseFloat(elm.price)}元</li>
                <li class="shop-data-li7"><span class="iconfont icon-chushaixuanxiang shanchu"></span></li>
            </ul>`;
                })

                $(".shop-data").append(data);
                if (fn) fn();
            }

        },

        shopNum: function (fn) {
            $(".icon-jia").on("click", function () {
                let inp = $(this).prev(".shop-num");
                let num = parseInt(inp.val());
                let fa = $(this).parents(".shop-data-li5");
                if (num < 50) {
                    inp.val(num + 1);
                    fa.next().text(parseFloat(fa.prev().html()) * (num + 1) + "元");
                    if (fn) fn((num + 1), fa.siblings(".shop-data-li3").html());
                } else {
                    alert("最大数量50");
                    if (fn) fn(num, fa.siblings(".shop-data-li3").html());

                }

            })

            $(".icon-jian").on("click", function () {
                let inp = $(this).next(".shop-num");
                let num = parseInt(inp.val());
                let fa = $(this).parents(".shop-data-li5");
                if (num > 1) {
                    inp.val(num - 1);
                    fa.next().text(parseFloat(fa.prev().html()) * (num - 1) + "元");
                    if (fn) fn((num - 1), fa.siblings(".shop-data-li3").html());
                } else {
                    alert("最小数量1")
                    if (fn) fn(num, fa.siblings(".shop-data-li3").html());
                }

            })

            $(".shop-num").on("blur", function () {
                let num = parseInt($(this).val());
                let fa = $(this).parents(".shop-data-li5");
                if (num > 50) {
                    $(this).val(50);
                    alert("最大数量50")
                    fa.next().text(parseFloat(fa.prev().html()) * 50 + "元");
                } else if (num < 1) {
                    $(this).val(1);
                    alert("最小数量1")
                    fa.next().text(fa.prev().html());
                } else {
                    fa.next().text(parseFloat(fa.prev().html()) * $(this).val() + "元");
                }
                console.log($(this).val(), fa.siblings(".shop-data-li3").html())
                if (fn) fn($(this).val(), fa.siblings(".shop-data-li3").html());

            })



        },

        addCookie: function (val, name) {
            let shop = cookie.get('shop');
            shop = JSON.parse(shop);
            shop.forEach(function (elm, i) {
                if (elm.Name == name && val > 0) {
                    elm.num = val;
                } else if (elm.Name == name && val <= 0) {
                    shop.splice(i, 1);
                }
            })
            cookie.set('shop', JSON.stringify(shop), 1);
        },

        remove: function (fn) {
            $(".shanchu").on("click", function () {
                let fa = $(this).parents(".shop-data-li7");
                fa.parents(".shops-data").addClass("car-none");
                location.reload();
                if (fn) fn(0, fa.siblings(".shop-data-li3").html());
            })
        },

        xuanze: function (fn) {

            $(".car-xuanze").on("click", function () {
                $(this).toggleClass("icon-anonymous-iconfont")
                if (fn) fn();
            })
            $(".car-head-xuanze").on("click", function () {
                let oSpan = $(".icon-anonymous-iconfont").not(".car-head-xuanze");
                let xuan = $(".car-xuanze");
                if (oSpan.length == xuan.length) {
                    $(this).removeClass("icon-anonymous-iconfont")
                    xuan.removeClass("icon-anonymous-iconfont")
                } else {
                    $(this).addClass("icon-anonymous-iconfont")
                    xuan.addClass("icon-anonymous-iconfont")
                }
                if (fn) fn();
            })



        },

        sumMoney: function () {
            let xuan = [].slice.call($(".icon-anonymous-iconfont"));
            xuan.shift();
            let Omoney = 0;
            xuan.forEach((val, i) => {
                let money = parseFloat($(val).parents(".shop-data-li1").siblings(".shop-data-li6").html())
                Omoney += money;
            })
            $(".addUp").html(Omoney);
        },

        countshop: function () {
            let oSpan = $(".icon-anonymous-iconfont").not(".car-head-xuanze").length;
            let xuan = $(".car-xuanze").length;
            $(".allshop").html(xuan)
            $(".selectshop").html(oSpan)
        },

        payment: function () {
            $(".payment").on("click", function () {
                cookie.remove("shop")
                location.href = baseUrl + "src/html/payment.html";
            })
        }














    }
})