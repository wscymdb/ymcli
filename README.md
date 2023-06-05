# 介绍

一个脚手架，平时用来做一些自动化的操作 或者生成一个通用的项目 后续慢慢添加好用的功能，持续更新中

# 自动生成 vue component

## 使用场景

如果我们需要大量生成重复的组件，不要每个都手写（是可以 copy，但是里面的名称还要手动的更改，好麻烦哦）
比如我们在创建一个后台项目的时候，有多少个菜单就要创建多少个 vue 文件。。。

## 使用方法

**不用担心文件夹不存在哦 如果不存在的话会自动帮你创建的**
**默认情况下创建的是 VUE3 的组件**

- 不跟地址的情况下会在 `./src/components` 下创建当前组件

```shell
  #  NavBar 是组件名称
  ymcli addcpn cpnname
  eg: ymcli addcpn NavBar
```

- 指定文件夹

```shell
  #  NavBar 是组件名称
  ymcli addcpn cpnname --dest url
  eg: ymcli addcpn NavBar --dest ./src/views/home
```

- 创建 VUE3+TS 的组件

```shell
ymcli addcpn cpnname  type --dest ./src/views/home
eg: ymcli addcpn NavBar  v3t --dest ./src/views/home
```

## type 有哪些

| 类型 | 解释                         |
| ---- | ---------------------------- |
| v3   | 默认值，创建一个 vue3 的模版 |
| v2   | 创建一个 vu2 的模版          |
| v3t  | 创建一个 vue3+ts 的模版      |

# 自动生成一个 route 文件

## 介绍

该命令会自动生成一个 route 文件，并且会生成该 route 对应的 vue 文件

## 使用场景

- 当我们需要动态的注册路由的时候，可以用到该命令
- router.js 文件是路由的其中一个配置；
- 可以使用 glob 语法来读取 router 下的所有文件，这样就不用手动的导入 route 路径

## 使用方法

- 创建 VUE3 组件

```shell
  #  NavBar 是组件名称
  ymcli addroutefile routefilename --dest url
  eg: ymcli addroutefile demo --dest ./src/router/demo
```

- 创建 VUE3+TS 的组件

```shell
  ymcli addroutefile routefilename type --dest url
  eg: ymcli addroutefile demo  v3t --dest ./src/router/demo
```

# 自动生成一个 dialog 组件

## 介绍

创建一个基于 ElementUI 的 Vue2 Dialog 组件

## 使用方法

```shell
ymcli adddialog name --dest url
eg: ymcli adddialog ymDialog --dest ./src/views/home
```
