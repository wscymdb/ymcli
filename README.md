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

-创建 VUE3+TS 的组件

```shell
ymcli addcpn cpnname  type --dest ./src/views/home
eg: ymcli addcpn NavBar  v3t --dest ./src/views/home
```
