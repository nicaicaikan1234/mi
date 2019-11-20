require.config({
    paths: {
        jquery: "../../node_modules/jquery/dist/jquery.min",
        loginG: "./lib/loginG",
        md5: "./jquery.md5",
        cookie:"./lib/cookie"
    },
    shim: {
        md5: ['jquery']
    }
})

require(['jquery', 'loginG', 'md5',"cookie"], function ($, lg, md5) {
    lg.Validation();
    lg.cutLogin();
    lg.verify();
})