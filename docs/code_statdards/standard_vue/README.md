---
title: Vue 风格指南
---

# Vue 风格指南

## 组件名

组件名应该始终是**多个单词的**，根组件 App 以及 `<transition>`、`<component>` 之类的 Vue 内置组件除外。

这样做可以避免跟现有的以及未来的 HTML 元素相冲突，因为所有的 HTML 元素名称都是单个单词的。

```js
// bad
Vue.component('todo', {
  // ...
})
// bad
export default {
  name: 'Todo',
  // ...
}
```

```js
// good
Vue.component('todo-item', {
  // ...
})
// good
export default {
  name: 'TodoItem',
  // ...
}
```

### 单文件组件的文件名

单文件组件的文件名应该要么始终是**单词大写开头** (PascalCase)，要么始终是**横线连接** (kebab-case)。

```
<!-- bad -->
components/
|- mycomponent.vue

components/
|- myComponent.vue
```

```
<!-- good -->
components/
|- MyComponent.vue

components/
|- my-component.vue
```

### 基础组件名

用特定样式和约定的基础组件 (也就是展示类的、无逻辑的或无状态的组件) 应该全部以一个特定的前缀开头，比如 Base、App 或 V。

```
<!-- bad -->
components/
|- MyButton.vue
|- VueTable.vue
|- Icon.vue
```

```
<!-- good -->
components/
|- BaseButton.vue
|- BaseTable.vue
|- BaseIcon.vue

components/
|- AppButton.vue
|- AppTable.vue
|- AppIcon.vue

components/
|- VButton.vue
|- VTable.vue
|- VIcon.vue
```

### 单例组件名

只应该拥有单个活跃实例的组件应该以 `The` 前缀命名，以示其唯一性。

这不意味着组件只可用于一个单页面，而是每个页面只使用一次。这些组件永远不接受任何 prop，因为它们是为你的应用定制的，而不是它们在你的应用中的上下文。如果你发现有必要添加 prop，那就表明这实际上是一个可复用的组件，只是目前在每个页面里只使用一次。

```
<!-- bad -->
components/
|- Heading.vue
|- MySidebar.vue
```

```
<!-- good -->
components/
|- TheHeading.vue
|- TheSidebar.vue
```

### 紧密耦合的组件名

**和父组件紧密耦合的子组件应该以父组件名作为前缀命名。**

如果一个组件只在某个父组件的场景下有意义，这层关系应该体现在其名字上。因为编辑器通常会按字母顺序组织文件，所以这样做可以把相关联的文件排在一起。

```
<!-- bad -->
components/
|- TodoList.vue
|- TodoItem.vue
|- TodoButton.vue

components/
|- SearchSidebar.vue
|- NavigationForSearchSidebar.vue
```

```
<!-- good -->
components/
|- TodoList.vue
|- TodoListItem.vue
|- TodoListItemButton.vue

components/
|- SearchSidebar.vue
|- SearchSidebarNavigation.vue
```

### 组件名中的单词顺序

组件名应该以高级别的 (通常是一般化描述的) 单词开头，以描述性的修饰词结尾。

```
<!-- bad -->
components/
|- ClearSearchButton.vue
|- ExcludeFromSearchInput.vue
|- LaunchOnStartupCheckbox.vue
|- RunSearchButton.vue
|- SearchInput.vue
|- TermsCheckbox.vue
```

```
<!-- good -->
components/
|- SearchButtonClear.vue
|- SearchButtonRun.vue
|- SearchInputQuery.vue
|- SearchInputExcludeGlob.vue
|- SettingsCheckboxTerms.vue
|- SettingsCheckboxLaunchOnStartup.vue
```

## 自闭合组件

在单文件组件、字符串模板和 JSX 中没有内容的组件应该是自闭合的——但在 DOM 模板里永远不要这样做。

```html
<!-- bad -->
<!-- 在单文件组件、字符串模板和 JSX 中 -->
<MyComponent></MyComponent>
<!-- 在 DOM 模板中 -->
<my-component/>
```

```html
<!-- good -->
<!-- 在单文件组件、字符串模板和 JSX 中 -->
<MyComponent/>
<!-- 在 DOM 模板中 -->
<my-component></my-component>
```

## 组件名大小写

### 模板中的组件名大小写

对于绝大多数项目来说，在单文件组件和字符串模板中组件名应该总是 PascalCase 的——但是在 DOM 模板中总是 kebab-case 的。

```html
<!-- bad -->
<!-- 在单文件组件和字符串模板中 -->
<mycomponent/>

<!-- 在单文件组件和字符串模板中 -->
<myComponent/>

<!-- 在 DOM 模板中 -->
<MyComponent></MyComponent>
```

```html
<!-- good -->
<!-- 在单文件组件和字符串模板中 -->
<MyComponent/>

<!-- 在 DOM 模板中 -->
<my-component></my-component>

<!-- 在所有地方 -->
<my-component></my-component>
```

### JS/JSX 中的组件名大小写

JS/JSX 中的组件名应该始终是 PascalCase 的，尽管在较为简单的应用中只使用 Vue.component 进行全局组件注册时，可以使用 kebab-case 字符串。

```js
// bad
Vue.component('myComponent', {
  // ...
})

import myComponent from './MyComponent.vue'

export default {
  name: 'myComponent',
  // ...
}

export default {
  name: 'my-component',
  // ...
}
```

```js
// good
Vue.component('MyComponent', {
  // ...
})

Vue.component('my-component', {
  // ...
})

import MyComponent from './MyComponent.vue'

export default {
  name: 'MyComponent',
  // ...
}
```

### 完整单词的组件名

**组件名应该倾向于完整单词而不是缩写。**

```
<!-- bad -->
components/
|- SdSettings.vue
|- UProfOpts.vue
```

```
<!-- good -->
components/
|- StudentDashboardSettings.vue
|- UserProfileOptions.vue
```

## 为组件样式设置作用域

对于应用来说，顶级 App 组件和布局组件中的样式可以是全局的，但是其它所有组件都应该是有作用域的。

这条规则只和单文件组件有关。你不一定要使用 `scoped` 特性。设置作用域也可以通过 CSS Modules，那是一个基于 class 的类似 BEM 的策略，当然你也可以使用其它的库或约定。

对于组件库，我们应该更倾向于选用基于 class 的策略而不是 `scoped` 特性。

```html
<!-- good -->
<template>
  <button class="button button-close">X</button>
</template>

<!-- 使用 `scoped` 特性 -->
<style scoped>
.button {
  border: none;
  border-radius: 2px;
}

.button-close {
  background-color: red;
}
</style>
```

```html
<!-- good -->
<template>
  <button :class="[$style.button, $style.buttonClose]">X</button>
</template>

<!-- 使用 CSS Modules -->
<style module>
.button {
  border: none;
  border-radius: 2px;
}

.buttonClose {
  background-color: red;
}
</style>
```

```html
<!-- good -->
<template>
  <button class="c-Button c-Button--close">X</button>
</template>

<!-- 使用 BEM 约定 -->
<style>
.c-Button {
  border: none;
  border-radius: 2px;
}

.c-Button--close {
  background-color: red;
}
</style>
```

## 私有属性名

使用模块作用域保持不允许外部访问的函数的私有性。如果无法做到这一点，就始终为插件、混入等不考虑作为对外公共 API 的自定义私有属性使用 `$_` 前缀。

```js
// good
var myGreatMixin = {
  // ...
  methods: {
    $_myGreatMixin_update: function () {
      // ...
    }
  }
}
// 甚至更好！
var myGreatMixin = {
  // ...
  methods: {
    publicMethod() {
      // ...
      myPrivateFunction()
    }
  }
}

function myPrivateFunction() {
  // ...
}

export default myGreatMixin
```

## 组件文件

只要有能够拼接文件的构建系统，就**把每个组件单独分成文件**。当你需要编辑一个组件或查阅一个组件的用法时，可以更快速的找到它。

```js
// bad
Vue.component('TodoList', {
  // ...
})

Vue.component('TodoItem', {
  // ...
})
```

```
components/
|- TodoList.js
|- TodoItem.js

components/
|- TodoList.vue
|- TodoItem.vue
```

## 组件数据

**组件的 data 必须是一个函数。**

当在组件中使用 data 属性的时候 (除了 new Vue 外的任何地方)，它的值必须是**返回一个对象的函数**。

```js
// good
Vue.component('some-comp', {
  data: function () {
    return {
      foo: 'bar'
    }
  }
})
// In a .vue file
export default {
  data () {
    return {
      foo: 'bar'
    }
  }
}
```

```js
// 在一个 Vue 的根实例上直接使用对象是可以的，
// 因为只存在一个这样的实例。
new Vue({
  data: {
    foo: 'bar'
  }
})
```

## Prop 定义

**Prop 定义应该尽量详细**，至少需要指定其类型。

```js
// bad
// 这样做只有开发原型系统时可以接受
props: ['status']

// good
props: {
  status: String
}
// 更好的做法！
props: {
  status: {
    type: String,
    required: true,
    validator: function (value) {
      return [
        'syncing',
        'synced',
        'version-conflict',
        'error'
      ].indexOf(value) !== -1
    }
  }
}
```

## Prop 名大小写

在声明 prop 的时候，其命名应该始终使用 camelCase，而在模板和 JSX 中应该始终使用 kebab-case。

```js
// bad
props: {
  'greeting-text': String
}

// good
props: {
  greetingText: String
}
```

```html
<!-- bad -->
<WelcomeMessage greetingText="hi"/>

<!-- good -->
<WelcomeMessage greeting-text="hi"/>
```

## 多个特性的元素换行

多个特性的元素应该分多行撰写，**每个特性一行**。

在 JavaScript 中，用多行分隔对象的多个属性是很常见的最佳实践，因为这样更易读。模板和 JSX 值得我们做相同的考虑。

```html
<!-- bad -->
<img src="https://vuejs.org/images/logo.png" alt="Vue Logo">

<MyComponent foo="a" bar="b" baz="c"/>
```

```html
<!-- good -->
<img
  src="https://vuejs.org/images/logo.png"
  alt="Vue Logo"
>

<MyComponent
  foo="a"
  bar="b"
  baz="c"
/>
```

## 模板中简单的表达式

组件模板应该只包含简单的表达式，复杂的表达式则应该重构为计算属性或方法。

复杂表达式会让你的模板变得不那么声明式。我们应该尽量描述应该出现的是什么，而非如何计算那个值。而且计算属性和方法使得代码可以重用。

```js
// bad
{{
  fullName.split(' ').map(function (word) {
    return word[0].toUpperCase() + word.slice(1)
  }).join(' ')
}}
```

```js
// good
// 复杂表达式已经移入一个计算属性
computed: {
  normalizedFullName: function () {
    return this.fullName.split(' ').map(function (word) {
      return word[0].toUpperCase() + word.slice(1)
    }).join(' ')
  }
}
```

## 简单的计算属性

应该把复杂计算属性分割为尽可能多的更简单的属性。

```js
// bad
computed: {
  price: function () {
    var basePrice = this.manufactureCost / (1 - this.profitMargin)
    return (
      basePrice -
      basePrice * (this.discountPercent || 0)
    )
  }
}
```

```js
// good
computed: {
  basePrice: function () {
    return this.manufactureCost / (1 - this.profitMargin)
  },
  discount: function () {
    return this.basePrice * (this.discountPercent || 0)
  },
  finalPrice: function () {
    return this.basePrice - this.discount
  }
}
```

## 为 v-for 设置键值

总是用 `key` 配合 `v-for`。

在组件上总是必须用 key 配合 v-for，以便维护内部组件及其子树的状态。甚至在元素上维护可预测的行为。

```html
<ul>
  <li
    v-for="todo in todos"
    :key="todo.id"
  >
    {{ todo.text }}
  </li>
</ul>
```

## 避免 `v-if` 和 `v-for` 用在一起

永远不要把 v-if 和 v-for 同时用在同一个元素上。

两种常见的情况下：

* 为了过滤一个列表中的项目 (比如 `v-for="user in users" v-if="user.isActive"`)。在这种情形下，请将 `users` 替换为一个**计算属性** (比如 `activeUsers`)，让其返回过滤后的列表；
* 为了避免渲染本应该被隐藏的列表 (比如 `v-for="user in users" v-if="shouldShowUsers"`)。这种情形下，请将` v-if` 移动至容器元素上 (比如 `ul`, `ol`)。


```html
<!-- bad -->
<ul>
  <li
    v-for="user in users"
    v-if="user.isActive"
    :key="user.id"
  >
    {{ user.name }}
  </li>
</ul>

<ul>
  <li
    v-for="user in users"
    v-if="shouldShowUsers"
    :key="user.id"
  >
    {{ user.name }}
  </li>
</ul>

<!-- good -->
<ul>
  <li
    v-for="user in activeUsers"
    :key="user.id"
  >
    {{ user.name }}
  </li>
</ul>

<ul v-if="shouldShowUsers">
  <li
    v-for="user in users"
    :key="user.id"
  >
    {{ user.name }}
  </li>
</ul>
```

## 指令缩写

指令缩写 (用 `:` 表示 `v-bind:` 、用 `@` 表示 `v-on:` 和用 `#` 表示 `v-slot:`) 应该要么都用要么都不用。

```html
<!-- bad -->
<input
  v-bind:value="newTodoText"
  :placeholder="newTodoInstructions"
>

<input
  v-on:input="onInput"
  @focus="onFocus"
>

<template v-slot:header>
  <h1>Here might be a page title</h1> 
</template>

<template #footer>
  <p>Here's some contact info</p>
</template>
```

```html
<!-- good -->
<input
  :value="newTodoText"
  :placeholder="newTodoInstructions"
>

<input
  v-bind:value="newTodoText"
  v-bind:placeholder="newTodoInstructions"
>

<input
  @input="onInput"
  @focus="onFocus"
>

<input
  v-on:input="onInput"
  v-on:focus="onFocus"
>

<template v-slot:header>
  <h1>Here might be a page title</h1> 
</template>

<template v-slot:footer>
  <p>Here's some contact info</p>
</template>

<template #header>
  <h1>Here might be a page title</h1> 
</template>

<template #footer>
  <p>Here's some contact info</p>
</template>
```

## 组件/实例的选项的顺序

组件/实例的选项应该有统一的顺序。

1. 副作用 (触发组件外的影响)
* `el`

2. 全局感知 (要求组件以外的知识)
* `name`
* `parent`

3. 组件类型 (更改组件的类型)
* `functional`

4. 模板修改器 (改变模板的编译方式)
* `delimiters`
* `comments`

5. 模板依赖 (模板内使用的资源)
* `components`
* `directives`
* `filters`

6. 组合 (向选项里合并属性)
* `extends`
* `mixins`

7. 接口 (组件的接口)
* `inheritAttrs`
* `model`
* `props`/`propsData`

8. 本地状态 (本地的响应式属性)
* `data`
* `computed`

9. 事件 (通过响应式事件触发的回调)
* `watch`

10. 生命周期钩子 (按照它们被调用的顺序)
* `beforeCreate`
* `created`
* `beforeMount`
* `mounted`
* `beforeUpdate`
* `updated`
* `activated`
* `deactivated`
* `beforeDestroy`
* `destroyed`

11. 非响应式的属性 (不依赖响应系统的实例属性)
* `methods`

12.渲染 (组件输出的声明式描述)
* `template`/`render`
* `renderError`

## 元素特性的顺序

元素 (包括组件) 的特性应该有统一的顺序。

这是我们为组件选项推荐的默认顺序。它们被划分为几大类，所以你也能知道新添加的自定义特性和指令应该放到哪里。

* `class`
* `id`,`ref`
* `name`
* `data-*`
* `src`, `for`, `type`, `href`,`value`,`max-length`,`max`,`min`,`pattern`
* `title`, `alt`，`placeholder`
* `aria-*`, `role`
* `required`, `readonly`, `disabled`
* `is`
* `v-for`
* `key`
* `v-if`
* `v-else-if`
* `v-else`
* `v-show`
* `v-cloak`
* `v-pre`
* `v-once`
* `v-model`
* `v-bind`, `:`
* `v-on`, `@`
* `v-html`
* `v-text`

## 组件/实例选项中的空行

当你的组件开始觉得密集或难以阅读时，在多个属性之间添加空行可以让其变得容易。

```js
// good
props: {
  value: {
    type: String,
    required: true
  },

  focused: {
    type: Boolean,
    default: false
  },

  label: String,
  icon: String
},

computed: {
  formattedValue: function () {
    // ...
  },

  inputClasses: function () {
    // ...
  }
}
```

## 目录文件夹及子文件

* 全局文件文件均以 `index.js` 导出，并在 `main.js` 中导入
* 父子组件层级最多不超过 3 层
* 单个 vue 组件文件不超过 1000 行

```
src                               源码目录
|-- api                              接口，统一管理
|-- assets                           静态资源，统一管理
|-- components                       公用组件，全局文件
|-- filters                          过滤器，全局工具
|-- icons                            图标，全局资源
|-- datas                            模拟数据，临时存放
|-- lib                              外部引用的插件存放及修改文件
|-- mock                             模拟接口，临时存放
|-- router                           路由，统一管理
|-- store                            vuex, 统一管理
|-- views                         视图目录
|   |-- order                       视图模块名
|   |-- |-- orderIndex.vue            模块入口页面
|   |-- |-- pageComponents            模块页面级组件文件夹
|   |-- |-- components                模块通用组件文件夹
```

## views 下的文件命名

* 只有一个文件的情况下不会出现文件夹，而是直接放在 views 目录下面，如 `index.vue`
* 名词，且使用小驼峰命名法
* 开头的单词就是所属模块名字（orderIndex、orderList、orderEdit）
* 名字至少两个单词（good: orderIndex）（bad:order）

