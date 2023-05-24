// 读取ejs模版并且修改数据

const path = require('path')
const ejs = require('ejs')

async function compileEjs(tempName, data) {
  try {
    // 1.获取当前模版路径
    const tempPath = `../templete/${tempName}`
    const absolutePath = path.resolve(__dirname, tempPath)

    // 使用ejs引擎编译模版
    return await ejs.renderFile(absolutePath, data)
  } catch (error) {
    console.log('模版编译失败', error)
  }
}

module.exports = compileEjs
