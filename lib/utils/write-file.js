const fs = require('fs')
const path = require('path')
const { mkDirIfNoDir, existsFile } = require('./utils')

async function writeFile(relativePath, filename, content) {
  const absolutePath = path.resolve(process.env.PWD, relativePath)

  // 文件是否已经存在
  const isExistsFile = await existsFile(`${absolutePath}/${filename}`)
  if (isExistsFile) return `已经存在文件${filename}，无需重复创建`
  // 判断是否有文件夹 没有就创建
  await mkDirIfNoDir(absolutePath)
  return await fs.promises.writeFile(`${relativePath}/${filename}`, content)
}

module.exports = {
  writeFile,
}
