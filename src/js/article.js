require.config({
    paths: {
        jquery: "../../node_modules/jquery/dist/jquery.min",
        headfoot: './headfoot',
        ariticleG: "./lib/articleG"
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

// 产品加载

require(["jquery", "ariticleG"], function ($, aG) {
    aG.getData();
})

