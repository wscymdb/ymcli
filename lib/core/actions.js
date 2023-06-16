const { promisify } = require('util')

const { program } = require('commander')
const compileEjs = require('./../utils/compile-ejs')
const { writeFile } = require('./../utils/write-file')
const { getDest, humpToline } = require('./../utils/utils')
const { readFile } = require('../utils/read-file')
const { execCommand } = require('../utils/exec-command')
const { VUE_REPO_TS } = require('../config/repo')
const { prompt } = require('./../utils/inquirer-command')

const fs = require('fs')
// 创建 vue项目
async function cteateActions(project) {
  try {
    // 目前只支持创建ts的项目 先将选项写在这里 后面在增加js项目
    let repoNmae = 'common-cms-v3-ts-vite'
    let repo = VUE_REPO_TS

    const projectType = await prompt()

    if (projectType === 'TypeScript') {
    }
    const args = ['clone', repo]
    await execCommand('git', args)
    await fs.promises.rename(repoNmae, project)

    console.log(`
      cd ${project}
      npm install
      npm run dev
    `)
  } catch (error) {
    console.log(error)
    console.log(`github 连接失败 请稍后重试`)
  }
}
// 创建vue组件
async function addComponentAction(cpnname, type, flag) {
  try {
    let templete =
      type === 'v2'
        ? 'component-v2.vue.ejs'
        : type === 'v3t'
        ? 'component-v3t.vue.ejs'
        : 'component-v3.vue.ejs'

    const dest = getDest(flag)
    console.log(dest)
    // 获取修改后的模版
    const content = await compileEjs(templete, {
      name: cpnname,
      lineName: humpToline(cpnname),
    })
    // 输出模版到制定文件夹
    const res = await writeFile(`${dest}`, `${cpnname}.vue`, content)

    const msg = res ? res : `创建组件${cpnname}成功`
    console.log(msg)
  } catch (error) {
    console.log('组建创建失败', error)
  }
}

// 创建 route文件
async function addRouteFileAction(routefilename, type) {
  const dest = program.opts().dest

  if (!dest)
    throw Error(
      'you maybe need a destination eg:ymcli addroutefile demo --dest ./src/router/demo'
    )

  // 创建vue文件
  const cpnType = type === 'ts' ? 'v3t' : type === 'js' ? 'v3' : 'v3'
  await addComponentAction(routefilename, cpnType)

  // 创建路由
  const cpnPath =
    dest.replace(/\.?\/?src/, '@').replace('router', 'views') +
    `/${routefilename}.vue`

  const routePath = dest.replace(/\.?\/?src/, '').replace('/router', '')

  const content = await compileEjs('route-file.ejs', {
    name: routefilename,
    routePath,
    cpnPath,
  })

  // 输出模版到指定文件夹

  let suffix = type === 'ts' ? 'ts' : type === 'js' ? 'js' : 'js'

  await writeFile(`${dest}`, `${routefilename}.${suffix}`, content)
}

// 创建一个vue2+element 的 dialog
async function addElementDialogAction(name) {
  try {
    let templete = 'dialog-v2.vue.ejs'
    const dest = getDest(true)
    // 获取修改后的模版
    const content = await compileEjs(templete, {
      name: name,
      lineName: humpToline(name),
    })
    // 输出模版到制定文件夹
    const res = await writeFile(`${dest}`, `${name}.vue`, content)

    const msg = res ? res : `创建组件${name}成功`
    console.log(msg)
  } catch (error) {
    console.log('组建创建失败', error)
  }
}

// 根据文件内容生成路由地址文件和该路由对应的组件
function addRouteCpnsAction(filepath, type) {
  const fileList = readFile(filepath)

  fileList.forEach(async (item) => {
    const fileType = type === 'ts' ? 'ts' : type === 'js' ? 'js' : 'js'
    // 这里要这样做的原因是
    // 如果type是undefined那么我们输入 addroutefile item.name  type
    // 但是这个type其实是字符串的undefined，想好像我们手动的在shell中输入一个undefined，但是这是string类型的
    // 那么后续的判断就会有误， 但是如果我们不写type 那么就是 undefined类型的了
    let args = ['addroutefile', item.name, '--dest', item.dest]
    if (type) args.splice(2, 0, fileType)

    await execCommand('ymcli', args)
  })
}

module.exports = {
  cteateActions,
  addComponentAction,
  addRouteFileAction,
  addElementDialogAction,
  addRouteCpnsAction,
}
