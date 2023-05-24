const fs = require('fs')
const path = require('path')
const { mkDirIfNoDir } = require('./utils')

async function writeFile(relativePath, filename, content) {
  const absolutePath = path.resolve(process.env.PWD, relativePath)
  // 判断是否有文件夹 没有就创建
  await mkDirIfNoDir(absolutePath)

  return fs.promises.writeFile(`${relativePath}/${filename}`, content)
}

module.exports = {
  writeFile,
}
