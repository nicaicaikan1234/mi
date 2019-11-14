define(["jquery"],function($){
    return{
        getHead:function(){
            $.ajax({
                type: "get",
                url: "./header.html",
                success: function (response) {
                  $("#head")[0].innerHTML=response
                }
              });
        },
        getFoot:function(){
            $.ajax({
                type: "get",
                url: "./foot.html",
                success: function (response) {
                  $("#foot")[0].innerHTML=response
                }
              });
        }
    }
})