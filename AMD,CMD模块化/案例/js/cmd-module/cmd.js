//定义模块
define(function (require, exports, module) {
	var des = require('cd');
	console.log(des.a);

	var add = function (x, y){
		return x + y;
	};
	exports.add = add;
});