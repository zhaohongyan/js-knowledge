# js-knowledge
js零碎知识点总结

------

### Console对象
在console.log()或console.debug()中输出时会有%d,%s等符号。
1. %s for a String value 字符类型
2. %d or %i for a Integer value 整型
3. %f for a Floating point number 浮点类型number
4. %o for an Object hyperlink 对象类型超链接
5. %c for style  样式

`console.log("Completed %d of %d items",1,10);`

console.log("同学，祝贺你喜提彩蛋~\n或许你们还在犹豫是否加入，我会坦诚的告诉你我们超酷；\n在这里大家都用无人车代步，AI音箱不仅播放还可以交互；\n人工智能是发展的核心技术，做自己让未来不只领先几步；\n在这里做自己，欢迎来到百度！\n");
console.log("%c百度2019校园招聘简历提交：http://dwz.cn/XpoFdepe （你将有机会直接获得面试资格）","color:red");


{...rest} 扩展符是浅拷贝
