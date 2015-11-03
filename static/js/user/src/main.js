var $ = require('Zepto');
console.log($);
require('Swiper');
var mySwiper = new Swiper('.swiper-container',{
autoplay : 5000,//可选选项，自动滑动
loop : true,//可选选项，开启循环
})