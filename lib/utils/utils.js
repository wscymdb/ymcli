const fs = require('fs')
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

module.exports = {
  mkDirIfNoDir,
}
