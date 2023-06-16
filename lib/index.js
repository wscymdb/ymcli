#!/usr/bin/env node

const { program } = require('commander')
const helpOptions = require('./core/help-options')
const {
  cteateActions,
  addComponentAction,
  addRouteFileAction,
  addElementDialogAction,
  addRouteCpnsAction,
} = require('./core/actions')

// 配置所有的options

helpOptions(program)

// 生成vue模版项目
program
  .command('create <project> [...others]') // 创建的命令
  .description(
    'cteate a vue project into a folder,eg: ymcli create demo_project'
  ) // 命令的描述
  .action(cteateActions) // 使用该命令执行的操作

// 自动化生成一个vue组件
program
  .command('addcpn <cpnname> [type]')
  .description(
    'add a vue component into a folder, default folder:`./src/components` eg: ymcli addcpn  NavBar; custom folder eg： ymcli addcpn navBar --dest ./src/views/home   [type]: defalut create vue3 template;  v3t mean create vue3+ts template;  v2 mean create vue2 template '
  )
  .action(addComponentAction)
// 生成一个路由文件 如果没有该路由对应的组件则会创建组件
program
  .command('addroutefile <routefilename> [type]')
  .description(
    'add a route file into a folder and add a vue component into a folder , but you need to assign a destination; eg: ymcli addroute demo --dest ./src/router/demo'
  )
  .action(addRouteFileAction)

// 生成一个element dialog组件
program
  .command('adddialog <name>')
  .description(
    'create a element-ui dialog component, default folder:`./src/components` eg: ymcli adddialog  ymDialog; custom folder eg： ymcli adddialog ymDialog --dest ./src/views/home '
  )
  .action(addElementDialogAction)

// 根据路由文件生成对应的路由和路由所对应的组件
program
  .command('addroutecpns <filepath> [type]')
  .description('create vue component and vue route by js file')
  .action(addRouteCpnsAction)
// 让commander解析process.argv参数
// process.argv 可以拿到命令行中输入的命令参数
program.parse(process.argv)

// console.log(program.opts().dest)
