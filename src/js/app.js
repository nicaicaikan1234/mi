require.config({
    paths: {
        jquery: "../../node_modules/jquery/dist/jquery.min",
        appG:"./index/appG",
        jquerylun:"./jquerylun",
        headfoot:'./headfoot'
    },
    shim: {

    }
})

// 头部尾部加载
require(['jquery', 'headfoot'], function ($, hf) {
    hf.getHead();
    hf.getFoot();
    hf.downList();
    hf.searchBox();
})


//  商品加载
require(['jquery', 'appG'], function ($, ag) {
    ag.getShop();
})

// 轮播图
require(['jquery', 'jquerylun'], function ($, lb) {
    $(".i-banner-vis").lb.lun();
   
})


