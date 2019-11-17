require.config({
    paths: {
        jquery: "../../node_modules/jquery/dist/jquery.min",
        headfoot:'./headfoot'
    },
    shim: {

    }
})

// 头部尾部加载
require(['jquery', 'headfoot'], function ($, hf) {
    hf.getHead(".head-b-nav-c-banner");
    hf.getFoot();
    hf.downList();
    hf.searchBox();
})

