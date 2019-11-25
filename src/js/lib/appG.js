let baseUrl = "http://localhost:8080/199854/mi/";
define(["jquery"], function ($) {
  return {
    getShop: function () {
      $.ajax({
        type: "get",
        url: `${baseUrl}lib/getList.php`,
        dataType: "json",
        success: function (response) {
          let val = "";
          response.forEach(elm => {
            let img = JSON.parse(elm.shop_image);
            val += ` <li>
                        <a href="${baseUrl}src/html/article.html?id=${elm.id}">
                          <img src="${baseUrl}/src/${img[0]["src"]}" alt="${img[0]["title"]}">
                          <h3>${elm.shop_name}</h3>
                          <p>${elm.shop_about}</p>
                          <p>
                            <span>${elm.shop_bPrice}元起</span>
                          </p>
                        </a>
                      </li>`
          });
          $("#i-box2-phone").html(val);
        }
      });
    },

    xxk: function () {
      $('.jiadian-btn>span').on("mouseenter", function () {

        let name = $(this).siblings("span").attr("id");
        if (name) {
          console.log(1)
          $(this).addClass("btn-over");
          $(this).attr("id", name)
          $(this).siblings("span").removeClass("btn-over");
          $(this).siblings("span").removeAttr("id")
          img = $(this).parents(".i-box2-m-r").find("img[class$=" + name + "]");
          if ($(img).attr("src") == "../images/shuihu.png") {
            $(img).attr("src", "../images/dianshi.jpg");
          } else {
            $(img).attr("src", "../images/shuihu.png");
          }
        }

      })
    },

    huiding: function () {
      function hui() {
        if ($(document).scrollTop() > $("#i-main").offset().top) {
          $(".huiding").removeClass("val-none");
        } else {
          $(".huiding").addClass("val-none");
        }
      }
      $(window).on("scroll", function () {
        hui();
      })
      hui();
      $(".huiding").on("click", function () {
        $(document).scrollTop(0);
      })
    },

    shan: function () {

      let time = setInterval(function () {
        let val = $(".i-box1-m-ul").position().left
        if (val < -2480) {
          $(".i-box1-m-ul").animate({
            left: 0
          }, 600)
        } else {
          if (val >= -1984) {
            $(".i-box1-m-ul").animate({
              left: val - 992
            }, 600)
          } else if (val >= -2480) {
            $(".i-box1-m-ul").animate({
              left: val - 496
            }, 600)
          }
        }
      }, 3600)


      $(".i-main-box1").on("mouseenter",function(){
        clearInterval(time);
        clearInterval(this.time)
      }).on("mouseleave",function(){
       this.time = setInterval(function () {
              let val = $(".i-box1-m-ul").position().left
              if (val < -2480) {
                $(".i-box1-m-ul").animate({
                  left: 0
                }, 600)
              } else {
                if (val >= -1984) {
                  $(".i-box1-m-ul").animate({
                    left: val - 992
                  }, 600)
                } else if (val >= -2480) {
                  $(".i-box1-m-ul").animate({
                    left: val - 496
                  }, 600)
                }
              }
            }, 3600)
      })




      jl = function (cb, timer) {
        var old = null;
        return function () {
          var newT = Date.now();
          var ar = arguments;
          if (newT - old > timer) {
            cb.apply(this, ar);
            old = newT;
          }
        }
      }





      $(".i-box1-m-left").on("click", jl(function () {
        $(".i-box1-m-ul").stop(true,true)
        let val = $(".i-box1-m-ul").position().left
        if (val < -2480) {
          $(".i-box1-m-ul").animate({
            left: val + 496
          }, 600)
        } else if (val < 0) {
          $(".i-box1-m-ul").animate({
            left: val + 992
          }, 600)
        }
      }, 600))


      $(".i-box1-m-right").on("click", jl(function () {
        $(".i-box1-m-ul").stop(true,true)
        let val = $(".i-box1-m-ul").position().left
        if (val >= -1984) {
          $(".i-box1-m-ul").animate({
            left: val - 992
          }, 600)
        } else if (val >= -2480) {
          $(".i-box1-m-ul").animate({
            left: val - 496
          }, 600)
        }
      }, 600))







    },

    shanTime: function (val) {

      let time0 = 86400;
      let time10 = 36000;
      let time14 = 50400;
      let time20 = 72000;
      let time22 = 79200;
      let stop = 1200;

      function stopshan(val,elm) {
        let newTime = new Date().getTime() + 28800000;
        let time = (newTime % 86400000) / 1000;
        let shi = parseInt((val - time - stop) / 3600);
        let fen = Math.floor((val - time - stop) % 3600 / 60);
        let miao = Math.floor((val - time - stop) % 60);
        if (shi < 10) {
          shi = "0" + shi
        }
        if (fen < 10) {
          fen = "0" + fen
        }
        if (miao < 10) {
          miao = "0" + miao
        }
        $(".i-box1-m-p2").html("距离结束还有");
        $(".i-box1-m-p1").html(elm);
        $(".xiaoshi").html(shi);
        $(".fenzhong").html(fen);
        $(".miao").html(miao);
      }



      function start(val,elm){
        let newTime = new Date().getTime() + 28800000;
        let time = (newTime % 86400000) / 1000;
        let fen = Math.floor((val - time) % 3600 / 60);
        let miao = Math.floor((val - time) % 60);
        if (fen < 10) {
          fen = "0" + fen
        }
        if (miao < 10) {
          miao = "0" + miao
        }
        $(".i-box1-m-p2").html("距离开始还有");
        $(".i-box1-m-p1").html(elm);
        $(".xiaoshi").html("00");
        $(".fenzhong").html(fen);
        $(".miao").html(miao);
      }


      let jishi1 = setInterval(function () {
        let newTime = new Date().getTime() + 28800000;
        let time = (newTime % 86400000) / 1000;
        if(time > 85200){
          start(time0,"00:00场");
        }else if (time > time22 && time < 85200) {
          stopshan(time0,"22:00场");
        }else if(time < time22&& time > time22 - stop){
          start(time22,"22:00场");
        } else if (time > time20 && time < time22 - stop) {
          stopshan(time22,"20:00场");
        }else if(time < time20&& time > time20 - stop){
          start(time22,"20:00场");
        } else if (time > time14 && time < time20 - stop) {
          stopshan(time20,"14:00场");
        }else if(time < time14&& time > time14 - stop){
          start(time14,"14:00场");
        } else if (time > time10 && time < time14 - stop) {
          stopshan(time14,"10:00场");
        }else if(time < time10&& time > time10 - stop){
          start(time10,"10:00场");
        } else if (time > 0 && time < time10 - stop) {
          stopshan(time10,"00:00场");
        }
      }, 1000)

    }

  }
})