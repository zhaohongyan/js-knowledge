// 定义一个模块 moduleA.js
define(function () {
	function sayHello() {
		console.log("Hello from moduleA");
	}
	return {
		sayHello,
	};
});
