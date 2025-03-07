// 定义一个模块 moduleA.js
define(function (require, exports, module) {
	function sayHello() {
		console.log("Hello from moduleA");
	}
	exports.sayHello = sayHello;
});
