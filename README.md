# tooltpl

这是一个简单的基于字符串的模板引擎，可以用来生成任意文本文件。

## 引入

```javascript
// 前端
var gen = window.tpl.generate;
var parse = window.tpl.parse;

// 后端
var gen = require('tooltpl').generate;
var parse = require('tooltpl').parse;
```

## 使用

```javascript
// 用法一
var html = gen('<div>${content|concatFilter:\'01\'}</div>', {
  content: 'june'
}, {
  concatFilter: function(str1, str2) {
    return str1 + str2;
  }
});

// 用法二
var htmlFunc = parse('<div>${content|concatFilter:\'01\'}</div>');
var html = htmlFunc({
  content: 'june'
}, {
  concatFilter: function(str1, str2) {
    return str1 + str2;
  }
});
```

## 语法

### 条件判断

```
{if condition1}
  // code1
{elseif condition2}
  // code2
{else}
  // code3
{/if}
```

### 数组遍历

```
{list array as item}
  // code
  // PS：里面注入了一个变量item_index，指向item在遍历过程中的序号
{/list}
```

### 变量定义

```
{var var1 = 1}
```

### 插值

```
// 直接插值
${var1}

// 使用过滤器插值的方式
${var1|filter1|filter2:var2, var3}

// 使用内置过滤器escape转义html的特殊符号
${var1|escape}
```