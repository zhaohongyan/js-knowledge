// main.js作为入口模块
require(["moduleA", "moduleB"], function (moduleA, moduleB) {
	moduleA.sayHello();
	moduleB.sayGoodbye();
});

// require(["moduleA"], function (moduleA, moduleB) {
// 	moduleA.sayHello();
// });
