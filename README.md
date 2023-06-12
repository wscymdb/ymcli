# 介绍

一个脚手架，平时用来做一些自动化的操作 或者生成一个通用的项目 后续慢慢添加好用的功能，持续更新中

# 用前必看

设计本脚手架的初衷是为了省去重复且无聊的步骤(其实就是想偷懒 😁)，脚手架中的一些命令是为了配合动态路由而设计的，当然你可以选择直接使用脚手架生成一个项目，这个项目已经包含了动态路由相关的；如果你是想抱着练习的态度你完全可以使用这些命令，这样会让你加深对动态路由的认识，本套 cms 的设计思想如下(这里提一嘴，每个人的思想和架构是不同的，我们没必要去抵触，选取有用的学习就行了，正所谓多条思路不是多个办法吗～)

- 所有文件夹都采用一一对应的设计模式

- `路由`，每个路由对应一个文件夹，该文件夹下对应当前路由的路由对象

  - 说一下为什么要这么设计，因为每个路由都使用的懒加载的方式，后端往数据库中存函数，可能不太友好(当然肯定有别的办法，那么就看后端愿不愿意了，所以我们这里不求人，自己搞定)，那么这样一来，后端就只需要存字符串了，那么久 so easy 啦
  - 那么怎么将每个路由对象取出呢,看以下代码
  - ```javascript
    // 读取router/main下面的所有ts文件，拿到路由对象，放到localRoutes数组里
    const files: Record<string, any> = import.meta.glob(
      '../router/main/**/*.ts',
      {
        eager: true,
      }
    )
    // 上面会拿到一个数组，然后遍历即可
    for (const file in files) {
      const module = files[file]
      console.log(module.default)
      localRoutes.push(module.default)
    }
    ```

* 下面的文件夹结构就是上面所说的一一对应关系
  - 这样做的好处是在设计自动化操作的时候会很方便
  - 因为所谓的自动化操作其实就是找规律，因为这样的文件架构是有规律的，文件都一一对应，所以才可以做自动化操作
  - 可以看到 router、service(网络请求文件夹)、store、views 之间的关系都是一一对应的
  - main 文件夹就是嵌套路由的父路由

```shell
src
├─ App.vue
├─ assets
│    └─ logo.svg
├─ components
├─ main.ts
├─ router
│    ├─ index.ts
│    └─ main
│           ├─ product
│           │    └─ goods
│           │           └─ goods.ts
│           └─ story
│                  ├─ chat
│                  │    └─ chat.ts
│                  └─ list
│                         └─ list.ts
├─ service
│    ├─ index.ts
│    ├─ main
│    │    ├─ main.ts
│    │    ├─ product
│    │    │    └─ goods
│    │    │           └─ goods.ts
│    │    └─ story
│    │           ├─ chart
│    │           │    └─ chart.ts
│    │           └─ list
│    │                  └─ list.ts
│    └─ request
│           ├─ index.ts
│           └─ types.ts
├─ store
│    ├─ index.ts
│    └─ main
│           ├─ main.ts
│           ├─ product
│           │    └─ goods
│           │           └─ goods.ts
│           └─ story
│                  ├─ chart
│                  │    └─ chart.ts
│                  └─ list
│                         └─ list.ts
└─ views
       └─ main
              ├─ main.ts
              ├─ product
              │    └─ goods
              │           └─ goods.ts
              └─ story
                     ├─ chart
                     │    └─ chart.ts
                     └─ list
                            └─ list.ts
```

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

# 根据文件生成对应的 route 对象和该 route 对应的 vue 组件

## 介绍

会根据 js/ts 文件生成对应的 route 对象和该 route 对应的 vue 组件,`注意导出的时候要使用commonjs的导出方式`

## 使用方法

```shell
ymcli addroutecpns filepath type
# filepath：文件地址  type：类型见上面的type表格
eg: ymcli adddialog ./index.ts v3t
```
