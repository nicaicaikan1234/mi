let baseUrl = "http://localhost:8080/199854/mi/";
define(["jquery"], function ($) {
    return {
        getShop:function(){
            $.ajax({
                type: "get",
                url: `${baseUrl}lib/getList.php`,
                dataType: "json",
                success: function (response) {
                    let val="";
                    response.forEach(elm => {
                        let img=JSON.parse(elm.shop_image);
                        val+=` <li>
                        <a href="javascript:;">
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
        }
    }
})