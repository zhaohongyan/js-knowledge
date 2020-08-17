// 闭包隐藏数据，只提供API
function createCache() {
  const data = {};
  return {
    set: function (key, value) {
      data[key] = value;
    },
    get: function (key) {
      return data[key];
    },
  };
}

const cache = createCache();
cache.set("a", 100);
console.log(cache.get("a"));
