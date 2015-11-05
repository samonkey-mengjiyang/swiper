var $ = require('Zepto');
require('../../plugin/event');
require('../../plugin/touch');
require('../../plugin/ajax');

console.log($);
//var s = require('Swiper');
var s = require('../../plugin/idangerous.swiper');
$("button").on('swipeLeft',function(){
	console.log(11)
	$.ajax({
		type:'get',
		url:'http://192.168.1.107/swiper/tpl/user/index_do.php',
		success:function(txt){
			console.log('请求成功了 哦也！！');
		}
	})
})
var tpl = 'user';
if(tpl  == 'user'){
require.async('./c');
}
var mySwiper = new s('.swiper-container',{
autoplay : 5000,//可选选项，自动滑动
loop : true,//可选选项，开启循环
})