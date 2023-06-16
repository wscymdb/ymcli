const fs = require('fs')
const { program } = require('commander')
function mkDirIfNoDir(absolutePath) {
  return new Promise(async (resolve, reject) => {
    try {
      // 如果报错就代表没有找到当前文件夹
      await fs.promises.stat(absolutePath)
      resolve()
    } catch (error) {
      // 没有文件夹就创建
      // {recursive: true} 这个配置项是配置自动创建多个文件夹  a/b/c 如果都不存在会创建a\b\c三个文件夹
      await fs.promises.mkdir(absolutePath, { recursive: true })
      resolve()
    }
  })
}

function existsFile(file) {
  return new Promise(async (resolve, reject) => {
    try {
      await fs.promises.access(file)
      resolve(true)
    } catch (error) {
      resolve(false)
    }
  })
}

function getDest(flag) {
  console.log(flag)
  const dest = program.opts().dest || './src/components'
  const routeDest = dest.replace('router', 'views')
  return flag ? dest : routeDest
}

// 驼峰转-
function humpToline(str) {
  return str.replace(/([A-Z])/g, '-$1').toLowerCase()
}

module.exports = {
  mkDirIfNoDir,
  existsFile,
  getDest,
  humpToline,
}
