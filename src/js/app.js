require.config({
    paths: {
        jquery: "../../node_modules/jquery/dist/jquery.min",
        appG:"./lib/appG",
        jquerylun:"./jquerylun",
        headfoot:'./headfoot',
        jquerylazyloadmin:'./jquerylazyloadmin'

    },
    shim: {
        jquerylazyloadmin:['jquery'],
        jquerylun:['jquery']
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
    ag.xxk();
})

//图片懒加载
require(['jquery', 'jquerylazyloadmin'], function ($, jl) {
    $("img.lazy").lazyload({effect: "fadeIn"});
})


// 轮播图
require(['jquery', 'jquerylun'], function ($, lb) {
    $(".i-banner-vis").lun();
   
})


