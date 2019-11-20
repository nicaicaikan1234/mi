let baseUrl = "http://localhost:8080/199854/mi/";
define(["jquery", "md5"], function ($, md5) {
    return {


        submitPh: function () {
            $(".zhuce").on("click", function () {
                $(".s-list-b").addClass("s-list-none");
                $(".list-phone").removeClass("s-list-none");
            });
           
        },


        submitAuth: function () {
            $(".phone-next").on("click", function () {
                $(".list-phone").addClass("s-list-none");
                $(".list-pass").removeClass("s-list-none");
            })
          
        },


        submitPass: function () {
            $(".password-next").on("click", function () {
                $.ajax({
                    type: "post",
                    url: `${baseUrl}lib/setUser.php`,
                    data: {
                        phone:$(".phoneNum").val(),
                        pass:$.md5($("#passT").val())
                    },
                    dataType: "json",
                    success: function (elm) {
                        // console.log(elm);
                        $(".list-alert").removeClass("s-list-none");
                        $(".list-pass").addClass("s-list-none");
                        $(".tishi").html(elm[0]);
                        $(".tishi").addClass("h3color");
                        $(".login-btn").on("click",function(){
                            location.href=elm[1];
                        })
                        $(".sign-btn").on("click",function(){
                            location.href="http://localhost:8080/199854/mi/src/html/sign.html";
                        })
                        if(elm[0]=="注册成功,立即前往登录"){
                            $(".sign-btn").addClass("s-list-none");
                        }

                    }
                });
            })
            
        },


        auth: function (fn) {

            let aut = ``;
            for (let i = 0; i < 4; i++) {
                aut += parseInt(Math.random() * 10)
            }
            $(".verification").val(aut);

            $(".verification").on("blur", function () {
                if ($(this).val() != aut) {
                    $(".errs").removeClass("s-list-none")
                    $(".phone-next").off();
                } else {
                    $(".errs").addClass("s-list-none")
                    if (fn) fn();
                }
            })

        },


        verification: function (fn) {
            $(".phoneNum").on("blur", function () {
                let reg = /^1[3-9]\d{9}$/
                if (reg.test($(this).val())) {
                    $(".errPhone").addClass("s-list-none")
                    if (fn) fn();
                } else {
                    $(".errPhone").removeClass("s-list-none")
                }
            })

            $(".phone-pre").on("click",function(){
                $(".phoneNum").val("");
                $(".s-list-b").removeClass("s-list-none");
                $(".list-phone").addClass("s-list-none");
            })
        },


        pass: function (fn) {

            
            let poss1 = false;
            let poss2 = false;


            $("#pass").on("blur", function () {
                let reg = [
                    /^.{6,16}$/,
                    /[A-Z]+/,
                    /[a-z]+/,
                    /\d+/,
                    /\W+/
                ]

                let check = reg.map(function (val) {
                    return val.test($(this).val());
                }.bind(this));
                var strength = check.reduce(function (current, next) {
                    if (next) {
                        current.count++;
                    }
                    return current;
                }, {
                    count: 0
                });

                switch (strength.count) {
                    case 1:
                    case 2:
                        $(".errp").removeClass("s-list-none");
                        poss1 = false;
                        break;
                    case 3:
                    case 4:
                    case 5: if (check[0]) {
                        $(".errp").addClass("s-list-none");
                        poss1 = true;
                        console.log(poss2)
                        if (fn && poss2) fn();
                    };
                        break;
                }


            })


            $("#passT").on("blur", function () {
                if ($("#pass").val() == $(this).val()) {
                    $(".errpT").addClass("s-list-none");

                    if (fn && poss1) fn();
                    poss2 = true;
                } else {
                    $(".errpT").removeClass("s-list-none");
                    poss2 = false;
                }
            })
            $(".password-pre").on("click",function(){
                $("#pass").val("");
                $("#passT").val("");
                $(".verification").val('');
                $(".list-phone").removeClass("s-list-none");
                $(".list-pass").addClass("s-list-none");
            })


        }






    };
})
