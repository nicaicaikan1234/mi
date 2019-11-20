define(["jquery", "md5", "cookie"], function ($, md5, cookie) {
    return {
        cutLogin: function () {

            $(".ewm").on("click", () => {
                $(".account").removeClass("l-list-over");
                $(".ewm").addClass("l-list-over");
                $(".l-ma").removeClass("login-none");
                $(".l-int").addClass("login-none");
            })
            $(".account").on("click", () => {
                $(".ewm").removeClass("l-list-over");
                $(".account").addClass("l-list-over");
                $(".l-int").removeClass("login-none");
                $(".l-ma").addClass("login-none");
            })
        },

        verify: function (fn) {
            $(".l-submit").on("click", function () {
                $.ajax({
                    type: "post",
                    url: "http://localhost:8080/199854/mi/lib/verify.php",
                    data: {
                        phone: $("#user_name").val(),
                        pass: $.md5($("#user_pass").val())
                    },
                    dataType: "json",
                    success: function (elm) {
                        if (elm.herf) {
                            let val = {
                                name: elm.name,
                                pass: elm.pass
                            }
                            cookie.set('user', JSON.stringify(val));
                            location.href = "http://localhost:8080/199854/mi/src/html/index.html";
                        } else {
                            $(".err").removeClass("err-none")
                        }
                    }
                });
            })


        },

        Validation: function () {
            var val = cookie.get("user");
            
            if (val) {
                val = JSON.parse(val);
                console.log(val)
                $.ajax({
                    type: "post",
                    url: "http://localhost:8080/199854/mi/lib/verify.php",
                    data: {
                        phone: val.name,
                        pass: val.pass
                    },
                    dataType: "json",
                    success: function (elm) {
                        console.log(elm)
                        if (elm.herf) {
                            location.href = "http://localhost:8080/199854/mi/src/html/index.html";
                        } else {
                            location.href = "http://localhost:8080/199854/mi/src/html/loginG.html";
                        }
                    }
                });
            }
        }
    };
})
