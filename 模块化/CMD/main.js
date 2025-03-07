// main.js作为入口模块
define(function (require) {
	var moduleA = require("./moduleA");
	moduleA.sayHello();

	// var moduleB = require("./moduleB");
	// moduleB.sayGoodbye();
});
