define(["jquery"], function ($) {
    return {
        // 获取页面头部内容
        getHead: function (val) {

            $.ajax({
                type: "get",
                url: "http://localhost:8080/199854/mi/src/html/header.html",
                success: function (response) {
                    $("#head")[0].innerHTML = response;
                    val&&$(val).css("display","none");
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
        }

    }
})