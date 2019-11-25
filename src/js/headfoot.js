define(["jquery","cookie"], function ($,cookie) {
    return {
        // 获取页面头部内容
        getHead: function (val,fn) {

            $.ajax({
                type: "get",
                url: "http://localhost:8080/199854/mi/src/html/header.html",
                success: function (response) {
                    $("#head")[0].innerHTML = response;
                    val&&$(val).css("display","none");
                    if(fn)fn();
                }
            });
           
            
        },
        // 获取页面尾部内容
        getFoot: function () {
            $.ajax({
                type: "get",
                url: "./foot.html",
                success: function (response) {
                    $("#foot")[0].innerHTML = response
                }
            });
        },
        // 下拉菜单
        downList: function () {

            $("#head").on("mouseenter", ".head-b-nav-c-li", function () {

                $(".head-b-navbtn").stop(true, false)
                let shu = '.' + $(this).attr("class").slice(-2) + ">.disn>.head-b-nav-li-img"
                $(shu).each(function (index, value) {
                    $(".head-b-navbtn .head-b-nav-li-img")[$(shu).index(this)].innerHTML = value.innerHTML;
                })
            }).on("mouseenter", ".head-b-nav-c-li", function () {
                let att = $(this).attr("class").slice(-2);
                if (att.slice(0, 1) == "a" || att.slice(0, 1) == "n") {
                    $(".head-b-navbtn").delay(300).animate({
                        height: "200px",
                    }, 200, () => {
                        $(".head-b-navbtn").css("borderTop", "1px solid #ccc")
                    })
                } else {
                    $(".head-b-navbtn").stop(true, true);
                    $(".head-b-navbtn").animate({
                        height: "0",
                    }, 200, function () {
                        $(".head-b-navbtn").css("borderTop", "0")
                    })
                }

            })
            $("#head").on("mouseleave", ".head-b-nav-c-li,.head-b-navbtn", function () {
                $(".head-b-navbtn").stop(true, true)
                $(".head-b-navbtn").animate({
                    height: "0",
                }, 200, function () {
                    $(".head-b-navbtn").css("borderTop", "0")
                })
            })

            $("#head").on("mouseenter", ".head-b-navbtn", function () {
                console.log(1)
                $(".head-b-navbtn").stop(false, false)
                $(".head-b-navbtn").css("borderTop", "1px solid #ccc");
                $(".head-b-navbtn").css("height", "200px")
            })
        },


        // 搜索框
        searchBox: function () {
            $("#head").on("click",".seekbox", function () {
                $(".head-seek-btn,.seekbox").addClass('bor');
                $(".head-seek-ul").removeClass('disn');
                $(".head-seek-a").fadeOut(200);
            })
            $("#head").on("focusout",".seekbox", function () {
                $(".head-seek-btn,.seekbox").removeClass('bor');
                $(".head-seek-ul").addClass('disn');
                $(".head-seek-a").fadeIn(50);
            })
        },

        //用户显示

        user:function(){
            var val = cookie.get("user");
            if (val) {
                val = JSON.parse(val);
                $.ajax({
                    type: "post",
                    url: "http://localhost:8080/199854/mi/lib/verify.php",
                    data: {
                        phone: val.name,
                        pass: val.pass
                    },
                    dataType: "json",
                    success: function (elm) {
                        if (elm.herf) {
                            $("#userName").html(elm.name+'<span class="iconfont icon-xiala"></span>')
                            $(".denglu").attr("href","javascript:;").html("消息通知");
                            $(".zhuce").attr("href","javascript:;").html("我的订单");
                            $(".xiaoxi").addClass("xiaoxi-none");
                        } else {
                            $("#userName").html("")
                            $(".denglu").arrt("href","http://localhost:8080/199854/mi/src/html/login.html").html("登录");
                            $(".zhuce").arrt("href","http://localhost:8080/199854/mi/src/html/sign.html").html("注册");
                            $(".xiaoxi").removeClass("xiaoxi-none");
                        }
                    }
                });
            }
        },

        //购物车显示

        shopshow:function(){
            if(cookie.get("shop")){
                let shop = JSON.parse(cookie.get("shop"));
                if(cookie.get("user")){
                    $(".header-shop-num").text(shop.length);
                    if(shop.length){
                        $(".shopcar").css({
                            background:"#ff6700",
                            color:"#fff"
                        })
                    }else{
                        $(".shopcar").css({
                            background:"#424242",
                            color:"#b0b0b0"
                        })
                    }
                }
            }
           
            
        }

    }
})