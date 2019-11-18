let baseUrl = "http://localhost:8080/199854/mi/";
define(["jquery"], function ($) {
    return {
        getData: function () {
            $.ajax({
                type: "get",
                url: `${baseUrl}lib/getShop.php${location.search}`,
                dataType: "json",
                success: function (val) {
                    let img=JSON.parse(val.shop_image);
                    let edition = '';
                    JSON.parse(val.shop_edition).forEach((v, i) => {
                        edition += ` <li class="edition${i} edition-over${i}">
                        <span class="shop-ed">${v["edition"]}</span>
                        <span class="shop-price">${v["price"]}</span>
                        </li>`
                    });

                    let color = '';
                    JSON.parse(val.shop_color).forEach((v, i) => {
                        color += `<li class="color${i}  color-over${i}">
                        <img src="${baseUrl}src${img[i]["src"]}" alt="" class="color-img">
                        <span class="color-name">${v}</span>
                        </li>`
                        
                    })

                    let ht = `<div class="clear a-n">
                    <nav class="a-nav">
                        <!---------- 需要数据 --------->
                        <h2>${val.shop_name}</h2>
                        <!---------- 需要数据 --------->
                        <div class="a-nav-left">
                            <span>|</span>
                            <a href="javascript:;">${val.shop_name}</a>
                        </div>
                        <div class="a-nav-right">
                            <a href="javascript:;">概述</a>
                            <span>|</span>
                            <a href="javascript:;">参数</a>
                            <span>|</span>
                            <a href="javascript:;">F码通道</a>
                            <span>|</span>
                            <a href="javascript:;">用户评价</a>
                        </div>
                    </nav>
                </div>
        
        
        
        
                <!------------------------------------ 导航栏 结束 ------------------------------------>
        
                <!--------------------------------------- 主要内容部分  开始------------------------------------- -->
        
                <div class="a-shop-main">
                    <main id="a-shop" class="clear">
        
                        <!-- 左边轮播 -->
                        <div class="a-shop-left">
                            <div class="a-shop-vis">
                                <ul>
                                    <li><img src="${baseUrl}src${img[0]["src"]}" alt=""></li>
                                    <li><img src="${baseUrl}src${img[img.length-1]["src"]}" alt=""></li>
                                </ul>
                                <div class="quan">
                                    <span class="cl"></span>
                                    <span></span>
                                </div>
                                <p class="a-banner-vis-p"><span class="iconfont icon-zuo"></span></p>
                                <p class="a-banner-vis-p"><span class="iconfont icon-zuo1"></span></p>
                            </div>
                        </div>
                        <!-- 右边详细信息 -->
                        <div class="a-shop-right">
                            <h2>${val.shop_name}</h2>
                            <p><span>${val.shop_head}</span> ${val.shop_title}</p>
        
                            <div class="R-main">
                                <span>小米自营</span>
                                <p>${val.shop_bPrice}元</p>
        
                                <!------------------------------ 地址 ------------------------------>
                                <div class="shop-address">
                                    <div>
                                        <span class="iconfont icon-didian address-logo"></span>
                                        <span>浙江</span>
                                        <span>杭州</span>
                                        <span>上城区</span>
                                        <span>湖滨街道</span>
                                        <span class="address-x">修改</span>
                                        <p>有现货</p>
                                    </div>
                                </div>
                                <!------------------------------ 版本 ------------------------------>
                                <div class="shop-edition">
                                    <p>选择版本</p>
                                    <ul class="clear">
                                       ${edition}
                                    </ul>
                                </div>
                                <!------------------------------ 颜色 ------------------------------>
                                <div class="shop-color">
                                    <p>选择颜色</p>
                                    <ul class="clear">
                                        ${color}
                                    </ul>
        
                                </div>
                                <!------------------------------ 合计 ------------------------------>
                                <div class="shop-total">
                                    <p>巴巴变巴巴变<span>1099元</span></p>
                                    <span>总计：1999元</span>
                                </div>
                                <!------------------------------ 按钮 ------------------------------>
                                <div class="shop-btn">
                                    <button class="addcar">加入购物车</button>
                                    <button class="like"><span class="iconfont icon-xihuan"></span> 喜欢</button>
                                </div>
        
                                <!------------------------------ 发货 -------------------------------->
        
                                <div class="fahuo">
                                    <img src="../images/fahuo.jpg" alt="">
                                </div>
                            </div>
        
        
                        </div>
        
                    </main>
                </div>
        
                <!------------------------------------------ 价格说明 ---------------------------------------------->
                <div class="jiage">
                    <h2>价格说明</h2>
                    <div class="jiage-img"></div>
        
                </div>`;
                    $('.a-main').html(ht);
                }
            })
        }
    }
})