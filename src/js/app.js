require.config({
    paths: {
        jquery: "../../node_modules/jquery/dist/jquery.min"
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

// 轮播图
require(['jquery', 'jquerylun'], function ($, lun) {
    $("").lun();
})
