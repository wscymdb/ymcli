# 更新日志

## [1.0.1] - 2023-05-24

### 新增

- 新增 README 文档
- 新增 CHAGNELOGO 文档
- 新增 npmignore 文件

## [1.1.0] - 2023-05-25

### 新增

- 新增添加 route 文件命令

### 修复

- 修复了多次创建同一个组件 后者会覆盖前者

## [1.1.1] - 2023-05-25

### 修复

- 修复了创建 route 总是创建 js 文件

## [1.1.2] - 2023-05-31

### 新增

- 新增创建 dialog 组件命令
- 所有命令如果输入名称的是驼峰会转成 -为连接符 eg：ymDemo -> ym-demo

## [1.2.0] - 2023-06-05

### 新增

- 新增 vu2 的模版

## [1.3.0] - 2023-06-12

### 新增

- 新增根据文件生成对应的 route 对象和该 route 对应的 vue 组件
- 新增文档内容 -> 用前必看

## [1.3.1] - 2023-06-12

### 修复

- 修复创建的文件不是在 src 下面

## [1.3.2] - 2023-06-12

### 修复

- 更改了使用文件生成路由的文件数据结构，以及调整对应的逻辑

## [1.3.3] - 2023-06-13

### 修复

- 更改了使用文件生成路由的文件数据结构，以及调整对应的逻辑

## [1.4.0] - 2023-06-13

### 新增

- 新增创建 vue 模版命令

### 修复

- 修复了了 ymcli addroutecpns 的 type 选项

## [1.4.1] - 2023-06-19

### 新增

- dialog-v2 模版中新增了 title props

### 修复

- 修复下载 vue 后台模版使用的是模版的仓库 现在改为在创建新的 git 仓库

## [1.5.0] - 2023-09-11

### 新增

- dialog-v2 模版进行增强 像使用 el-dialog 一样使用
