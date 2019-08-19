/*
属性的特征
  数据属性：
    [[Configurable]]:默认值true
      能否用delete删除从而重新定义属性
      能否修改属性的特性
      能否把属性修改为访问器属性

    [[Enumerable]]:默认值true
      能否通过for-in循环
    
    [[Writable]]:默认值true
      能否修改属性的值

    [[Value]]:默认值undefined
      这个属性的数据值


  访问器属性：
    [[Configurable]]:默认值true
      能否用delete删除从而重新定义属性
      能否修改属性的特性
      能否把属性修改为数据属性

    [[Enumerable]]:默认值true
      能否通过for-in循环

    [[Get]]：默认值undefined，读取属性函数

    [[Set]]：默认值undefined，写入属性函数

*/
