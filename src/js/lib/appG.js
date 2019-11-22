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
        if(name){
          console.log(1)
          $(this).addClass("btn-over");
          $(this).attr("id",name)
          $(this).siblings("span").removeClass("btn-over");
          $(this).siblings("span").removeAttr("id")
          img=$(this).parents(".i-box2-m-r").find("img[class$="+name+"]");
          if($(img).attr("src")=="../images/shuihu.png"){
            $(img).attr("src","../images/dianshi.jpg");
          }else{
            $(img).attr("src","../images/shuihu.png");
          }
        }

      })
    },

    huiding:function(){
      function hui(){
        if($(document).scrollTop()>$("#i-main").offset().top){
          $(".huiding").removeClass("val-none");
          console.log(1)
        }else{
          $(".huiding").addClass("val-none");
          console.log(2)
        }
      }
      $(window).on("scroll",function(){
        hui();
      })
      hui();
      $(".huiding").on("click",function(){
        $(document).scrollTop(0);
      })
    }
  }
})