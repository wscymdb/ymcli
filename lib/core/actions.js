const { program } = require('commander')
const compileEjs = require('./../utils/compile-ejs')
const { writeFile } = require('./../utils/write-file')

async function addComponentAction(cpnname, type) {
  try {
    let templete = type ? 'component-v3t.vue.ejs' : 'component-v3.vue.ejs'
    const dest = program.opts().dest || './src/components'
    // 获取修改后的模版
    const content = await compileEjs(templete, { name: cpnname })
    // 输出模版到制定文件夹
    writeFile(`${dest}`, `${cpnname}.vue`, content)
    console.log(`创建组件${cpnname}成功`)
  } catch (error) {
    console.log('组建创建失败', error)
  }
}

module.exports = {
  addComponentAction,
}
