---
title: 命名规则
---

> 黄金法则: 不管有多少参与者，代码都像同一个人所写。

# 命名规则

## 项目命名

全部采用**小写**方式， 以**下划线**分隔。

例：`my_project_name`


## 目录命名

参照项目命名规则；

有复数结构时，要采用**复数命名法**。

例：`scripts`, `styles`, `images`, `data_models`

## JS 命名

使用通俗简单明了的名称。

* 文件命名，参照项目命名规则。例：`account_model.js`;
* 变量用**名词**（startTime，endTime 等除外）;
* 函数用**动词开头**（`init`、`refresh` 除外）;
* 当属性或方法返回 boolean，使用 `is` 或 `has` 开头;
* 数据以 data 结尾 ，如 `listData`、`formData`;
* 变量、函数使用**小驼峰**（camelCase）命名，常量使用全部大写命名
* 构造函数和类使用**大驼峰**（PascalCase）命名
* 避免保存对 `this` 的引用，使用箭头函数
* 文件名应与其默认导出的名称完全匹配
* 导出 构造函数 / 类 / 对外暴露的 object，使用大驼峰（PascalCase）

```js
// =============== boolean 值使用 is 或 has 开头 ===============

// bad
if (!dragon.age()) {
  return false
}

// good
if (!dragon.hasAge()) {
  return false
}

// =============== 大驼峰命名 ===============

// bad
function user(options) {
  this.name = options.name
}

const bad = new user({
  name: 'nope'
})

// good
class User {
  constructor(options) {
    this.name = options.name
  }
}

const good = new User({
  name: 'yup'
})

// =============== 文件名与导出的名称完全匹配，导出 构造函数 / 类 / 对外暴露的 object，使用大驼峰 ===============

// 文件 1
class CheckBox {
  // ...
}
export default CheckBox

// 文件 2
export default function fortyTwo() { return 42 }

// 文件 3
export default function insideDirectory() {}

// 文件 4
const Type = {
  es6: {}
}
export default Type

// 在其他文件导入
// bad
import CheckBox from './checkBox' 
import FortyTwo from './FortyTwo'
import InsideDirectory from './InsideDirectory'

// bad
import CheckBox from './check_box'
import forty_two from './forty_two'
import inside_directory from './inside_directory'
import index from './inside_directory/index'
import insideDirectory from './insideDirectory/index'

// good
import CheckBox from './CheckBox' // 类导入导出使用大驼峰命名
import fortyTwo from './fortyTwo' // 小驼峰
import insideDirectory from './insideDirectory' // 小驼峰
import Type from './Type' // 大驼峰

```

附： 函数方法常用的**动词**：

```
get 获取/set 设置,
add 增加/remove 删除
create 创建/destory 移除
start 启动/stop 停止
open 打开/close 关闭,
read 读取/write 写入
load 载入/save 保存,
create 创建/destroy 销毁
begin 开始/end 结束,
backup 备份/restore 恢复
import 导入/export 导出,
split 分割/merge 合并
inject 注入/extract 提取,
attach 附着/detach 脱离
bind 绑定/separate 分离,
view 查看/browse 浏览
edit 编辑/modify 修改,
select 选取/mark 标记
copy 复制/paste 粘贴,
undo 撤销/redo 重做
insert 插入/delete 移除,
add 加入/append 添加
clean 清理/clear 清除,
index 索引/sort 排序
find 查找/search 搜索,
increase 增加/decrease 减少
play 播放/pause 暂停,
launch 启动/run 运行
compile 编译/execute 执行,
debug 调试/trace 跟踪
observe 观察/listen 监听,
build 构建/publish 发布
input 输入/output 输出,
encode 编码/decode 解码
encrypt 加密/decrypt 解密,
compress 压缩/decompress 解压缩
pack 打包/unpack 解包,
parse 解析/emit 生成
connect 连接/disconnect 断开,
send 发送/receive 接收
download 下载/upload 上传,
refresh 刷新/synchronize 同步
update 更新/revert 复原,
lock 锁定/unlock 解锁
check out 签出/check in 签入,
submit 提交/commit 交付
push 推/pull 拉,
expand 展开/collapse 折叠
begin 起始/end 结束,
start 开始/finish 完成
enter 进入/exit 退出,
abort 放弃/quit 离开
obsolete 废弃/depreciate 废旧,
collect 收集/aggregate 聚集
```



## CSS, SCSS 文件命名

参照项目命名规则。

例：`retina_sprites.scss`

## HTML 文件命名

参照项目命名规则。

例：`error_report.html`


