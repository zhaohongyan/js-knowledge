// 全局作用域 块级作用域
// let i;
for (let i = 0; i < 10; i++) {
  const element = document.createElement("a");
  element.innerHTML = i;
  element.addEventListener("click", function () {
    alert(i);
  });
  document.body.append(element);
}
