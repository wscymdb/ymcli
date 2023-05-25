const { program } = require('commander')
const compileEjs = require('./../utils/compile-ejs')
const { writeFile } = require('./../utils/write-file')
const { getDest } = require('./../utils/utils')

async function addComponentAction(cpnname, type, flag) {
  try {
    let templete = type ? 'component-v3t.vue.ejs' : 'component-v3.vue.ejs'
    const dest = getDest(flag)
    // 获取修改后的模版
    const content = await compileEjs(templete, { name: cpnname })
    // 输出模版到制定文件夹
    const res = await writeFile(`${dest}`, `${cpnname}.vue`, content)

    const msg = res ? res : `创建组件${cpnname}成功`
    console.log(msg)
  } catch (error) {
    console.log('组建创建失败', error)
  }
}

async function addRouteFileAction(routefilename, type) {
  const dest = program.opts().dest
  if (!dest)
    throw Error(
      'you maybe need a destination eg:ymcli addroutefile demo --dest ./src/router/demo'
    )

  // 创建vue文件
  await addComponentAction(routefilename, type)
  console.log(type)
  // 创建路由
  const cpnPath =
    dest.replace('./src', '@').replace('router', 'views') +
    `/${routefilename}.vue`

  const routePath = dest.replace('./src', '').replace('/router', '')

  const content = await compileEjs('route-file.ejs', {
    name: routefilename,
    routePath,
    cpnPath,
  })

  // 输出模版到制定文件夹
  const suffix = type ? 'ts' : 'js'
  await writeFile(`${dest}`, `${routefilename}.${suffix}`, content)
  // console.log(content)
}

module.exports = {
  addComponentAction,
  addRouteFileAction,
}
