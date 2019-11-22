require.config({
    paths: {
        jquery: "../../node_modules/jquery/dist/jquery.min",
        shopcarG:"./lib/shopcarG",
        headfoot:'./headfoot',
        cookie:"./lib/cookie"
    },
    shim: {
    }
})

// 尾部加载
require(['jquery', 'headfoot','cookie'], function ($, hf,cookie) {
    hf.getFoot();
})

// 数据渲染
require(['jquery', 'shopcarG',"cookie"], function ($,car,cookie) {
    car.load();
    car.vray(function(){
        car.shopNum(function(val,name){
            car.addCookie(val,name);
            car.sumMoney();
            car.load();
        });
        car.remove(function(val,name){
            car.addCookie(val,name);
            car.sumMoney();
        });
        car.xuanze(function(){
            car.sumMoney();
            car.countshop();
        });
        car.sumMoney();
        car.countshop();
        car.payment();
    });
})