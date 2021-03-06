---
title: HTML
---

# HTML

## 语法

* 缩进使用 soft tab（4个空格）；
* 嵌套的节点应该缩进；
* 在属性上，使用双引号，不要使用单引号；
* 属性名全小写，用中划线做分隔符；
* 不要在自动闭合标签结尾处使用斜线。

```html
<body>
    <img src="images/company_logo.png" alt="Company">

    <h1 class="hello-world">Hello, world!</h1>
</body>
```

自动闭合标签包括：`<meta>`, `<br>`, `<hr>`, `<img>`, `<input>`, `<frame>`, `<link>` 等。


## DOCTYPE

在页面开头使用这个简单地 doctype 来启用标准模式，使其在每个浏览器中尽可能一致的展现；

虽然 doctype 不区分大小写，但是按照惯例，doctype 大写 DOCTYPE。

```html
<!DOCTYPE html>
<html>
	...
</html>
```

## lang 属性

根据 HTML5 规范：

> 应在 html 标签上加上 lang 属性。这会给语音工具和翻译工具帮助，告诉它们应当怎么去发音和翻译。

```html
<!DOCTYPE html>
<html lang="en-us">
    ...
</html>
```

## 字符编码

通过声明一个明确的字符编码，让浏览器轻松、快速的确定适合网页内容的渲染方式，通常指定为 'UTF-8'。

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
    </head>
    ...
</html>
```

## IE 兼容模式

用 `<meta>` 标签可以指定页面应该用什么版本的 IE 来渲染；

不同 doctype 在不同浏览器下会触发不同的渲染模式。

```html
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="X-UA-Compatible" content="IE=Edge">
    </head>
    ...
</html>
```

## 引入 CSS, JS

根据 HTML5 规范, 通常在引入 CSS 和 JS 时不需要指明 type，因为 `text/css` 和 `text/javascript` 分别是他们的默认值。

```html
<!-- External CSS -->
<link rel="stylesheet" href="code_guide.css">

<!-- In-document CSS -->
<style>
    ...
</style>

<!-- External JS -->
<script src="code_guide.js"></script>

<!-- In-document JS -->
<script>
    ...
</script>
```

## 属性顺序

属性应该按照特定的顺序出现以保证**易读性**；

* `class`
* `id`
* `name`
* `data-*`
* `src`, `for`, `type`, `href`, `value` , `max-length`, `max`, `min`, `pattern`
* `placeholder`, `title`, `alt`
* `aria-*`, `role`
* `required`, `readonly`, `disabled`

`class` 是为高可复用组件设计的，所以应处在第一位；

`id` 更加具体且应该尽量少使用，所以将它放在第二位。

## boolean 属性

boolean 属性指**不需要声明取值的属性**，XHTML 需要每个属性声明取值，但是 HTML5 并不需要；

boolean 属性的存在表示取值为 `true`，不存在则表示取值为 `false`。

```html
<input type="text" disabled>

<input type="checkbox" value="1" checked>

<select>
    <option value="1" selected>1</option>
</select>
```

## JS 生成标签

在 JS 文件中生成标签让内容变得更难查找，更难编辑，性能更差。应该尽量避免这种情况的出现。

## 减少标签数量

在编写 HTML 代码时，需要尽量避免多余的父节点；

很多时候，需要通过迭代和重构来使 HTML 变得更少。

```html
<!-- Not well -->
<span class="avatar">
    <img src="...">
</span>

<!-- Better -->
<img class="avatar" src="...">
```

## 实用高于完美

尽量遵循 HTML 标准和语义，但是不应该以浪费实用性作为代价；

任何时候都要用尽量小的复杂度和尽量少的标签来解决问题。

