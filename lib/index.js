#!/usr/bin/env node

const { program } = require('commander')
const helpOptions = require('./core/help-options')
const { addComponentAction, addRouteFileAction } = require('./core/actions')

// 配置所有的options

helpOptions(program)

// 自动化生成一个vue组件
program
  .command('addcpn <cpnname> [type]')
  .description(
    'add a vue component into a folder, default folder:`./src/components` eg: ymcli addcpn  NavBar; custom folder eg： ymcli addcpn navBar --dest ./src/views/home   [type] is mean if type create vue3+ts templete or create vue3 templete'
  )
  .action(addComponentAction)

program
  .command('addroutefile <routefilename> [type]')
  .description(
    'add a route file into a folder and add a vue component into a folder , but you need to assign a destination; eg: ymcli addroute demo --dest ./src/router/demo'
  )
  .action(addRouteFileAction)
// 让commander解析process.argv参数
// process.argv 可以拿到命令行中输入的命令参数
program.parse(process.argv)

// console.log(program.opts().dest)
