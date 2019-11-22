require.config({
    paths: {
        jquery: "../../node_modules/jquery/dist/jquery.min",
        headfoot: './headfoot',
        ariticleG: "./lib/articleG",
        jquerylun:'./jquerylun',
        cookie:"./lib/cookie"
    },
    shim: {
        jquerylun:["jquery"]
    }
})

// 头部尾部加载
require(['jquery', 'headfoot'], function ($, hf) {
    hf.getHead(".head-b-nav-c-banner",function(){
        hf.shopshow();
    });
    hf.getFoot();
    hf.downList();
    hf.searchBox();
    hf.user();
})

// 产品加载

require(["jquery", "ariticleG","jquerylun"], function ($, aG,jl) {
    aG.getData(function(){
        $(".a-shop-vis").lun();
        aG.like();
        aG.cut(".edition","edition-over0",function(){
            aG.total();
        });
        aG.cut(".color","color-over0",function(){
            aG.total();
        });
        aG.total();
        aG.addCar();
    });
})

