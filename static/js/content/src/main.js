require('Zepto');
require('../plugin/event');
/*require('tAjax');*/
require('../plugin/touch');
var a = require('./b.js');
var c =require('./c.js');
console.log(c.aj());
console.log(a.aj());
console.log($.fn.tap())
/*$("button").tap(function(){
	console.log(111)
})*/

/*$("button").longTap(function(){
	console.log(444)
});*/