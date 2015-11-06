var $ = require('Zepto');
require('../../plugin/event');
require('../../plugin/touch');
require('../../plugin/ajax');
require('../../plugin/frozen');
require('../../plugin/lazyload');



console.log($);
//var s = require('Swiper');
var s = require('../../plugin/idangerous.swiper');
/*$("button").on('swipeLeft',function(){
	console.log(11)
	$.ajax({
		type:'get',
		url:'http://192.168.1.107/swiper/tpl/user/index_do.php',
		success:function(txt){
			console.log('请求成功了 哦也！！');
		}
	})
})*/
var tpl = 'user';

var mySwiper = new s('.swiper-container',{
autoplay : 5000,//可选选项，自动滑动
loop : true,//可选选项，开启循环
})
/* var scroll = new fz.Scroll('.ui-scroller', {
        scrollY: true
    });*/
/*$("button").on('tap',function(){
    var div = '<img src="http://192.168.1.107/swiper/load/load.jpg" class="img-responsive lazy" data-original="http://192.168.1.107/swiper/load/1.jpg" alt="" >';
    $.ajax({
        type:'get',
        url:'http://192.168.1.107/swiper/tpl/user/index_do.php',
        success:function(txt){
            for(var i=0; i<=15;i++){
                $(".container-fluid").append(div);
            }
            setTimeout(function(){
            $(".lazy").lazyload({
                 effect : "fadeIn"
            });
            console.log(111)

            },100);

        }
    })
})*/
$("img.lazy").lazyload({
    effect : "fadeIn"
});
function ok(){
    console.log(2222);
}

/*$("#btn1").tap(function(){
    var dia=$.dialog({
        title:'温馨提示',
        content:'温馨提示内容',
        button:["确认","取消"]
    });

    dia.on("dialog:action",function(e){
        console.log(e.index)
    });
    dia.on("dialog:hide",function(e){
        console.log("dialog hide")
    });

})
$("#btn2").tap(function(){
    var dia2=$(".ui-dialog").dialog("show");
    dia2.on("dialog:action",function(e){
        console.log(e.index)
    });
})

var el;
$("#btn1").tap(function(){
    el=$.tips({
        content:'温馨提示内容',
        stayTime:2000,
        type:"success"
    })
    el.on("tips:hide",function(){
        console.log("tips hide");
    })

});*/