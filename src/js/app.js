require.config({
    paths:{
        jquery:"../../node_modules/jquery/dist/jquery.min.js"
    },
    shim:{
    
    }
    })


    require(['jquery','headfoot'],function($,hf){
        hf.getHead();
        hf.getFoot();
    })