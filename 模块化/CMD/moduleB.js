// 定义一个模块 moduleB.js
define(function (require, exports, module) {
	function sayGoodbye() {
		console.log("Goodbye from moduleB");
	}
	exports.sayGoodbye = sayGoodbye;
});
