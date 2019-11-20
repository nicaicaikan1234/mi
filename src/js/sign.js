require.config({
    paths: {
        jquery: "../../node_modules/jquery/dist/jquery.min",
        signG: "./lib/signG",
        md5:"./jquery.md5"
    },
    shim: {
        md5:['jquery']
    }
})

require(['jquery', 'signG' , 'md5'], function ($, lg,md5) {

    lg.verification(()=>{
        lg.submitPh();
    });
    
    
    lg.pass(()=>{
        lg.submitPass();
    });

    lg.auth(function(){
        lg.submitAuth();
    });

})