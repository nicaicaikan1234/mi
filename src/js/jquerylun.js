(function () {
    $.fn.extend({
        lun: function (options) {
            var main = null, //主函数
                init = null, //初始化
                start = null, //开始
                stop = null, //结束
                prev = null, //上一张
                next = null, //下一张
                timer = null, //计时器
                elms = {}, // 命名空间  存储元素
                defaults = {
                    speed: 500, // 动画速度
                    delay: 3000 // 延迟
                };

            //函数节流
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

            init = function () {
                elms._index = 0;
                elms.btn = $(this).children("p").children("span");
                elms.k = $(this).children("ul");
                elms.li = $(elms.k).children("li")
                elms.img = $(elms.li).children("img");
                elms.k.append(elms.li.first().clone());
                elms.q = $(this).children("div").children("span")
                elms.btn.on("click", jl(function () {
                    if (elms.btn.index(this)) prev();
                    else next();
                },500))

                elms.k.hover(function () {
                    stop();
                }, function () {
                    timer = setInterval(start.bind(null, 1), defaults.delay + defaults.speed)
                })


                elms.q.on("click", function () {
                    stop();
                    elms._index = elms.q.index(this);
                    var lf = '-' + (elms.img.width() * elms._index);
                    elms.k.animate({
                        left: lf + "px"
                    }, defaults.speed, function () {
                        $(elms.q[elms._index]).addClass("cl").siblings().removeClass("cl");
                    })

                })
            }.bind(this)

            start = function (boo) {
                if (boo) {
                    var lf = '-=' + elms.img.width();
                }
                else {
                    var lf = '+=' + elms.img.width();
                    if (!elms._index) {
                        elms.k.css("left", "-" + elms.li.length * elms.img.width() + "px")
                        elms._index = elms.li.length;

                    }
                }

                elms.k.animate({
                    left: lf
                }, defaults.speed, function () {
                    if (boo) elms._index++;
                    else elms._index--;
                    if (elms._index === elms.li.length) {
                        elms._index = 0;
                        elms.k.css("left", 0)
                    }
                    $(elms.q[elms._index]).addClass("cl").siblings().removeClass("cl");

                })

            }.bind(this)



            timer = setInterval(function () {
                start(1);
            }, defaults.speed + defaults.delay)


            stop = function () {
                clearInterval(timer);
            }

            next = function () {
                stop();
                start(1);
            }

            prev = function () {
                stop();
                start(0);
            }

            main = function () {
                $.extend(defaults, options);
                init();
            }

            main();
        }
    })
})();