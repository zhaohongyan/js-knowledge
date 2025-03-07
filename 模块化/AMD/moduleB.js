// 定义一个模块 moduleB.js
define(function () {
	function sayGoodbye() {
		console.log("Goodbye from moduleB");
	}
	return {
		sayGoodbye,
	};
});
