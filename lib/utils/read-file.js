const path = require('path')
function readFile(filepath) {
  const absolutePath = path.resolve(process.env.PWD, filepath)
  const fileList = []
  const arr = require(absolutePath)
  getItem(arr, fileList)
  return fileList
}

function getItem(arr, fileList) {
  arr.forEach((item) => {
    if (item.children) getItem(item.children, fileList)

    if (!item.component) return
    const strcpn = item.component.toString()
    let path = strcpn
      .split('import')
      .pop()
      .replaceAll(/[\(\)'"]/gi, '')
      .replace('@', './src')
      .replace('views', 'router')

    path = path.split('/')
    path.pop()
    path = path.join('/')

    fileList.push({
      dest: path,
      name: item.name,
    })
  })
}

module.exports = {
  readFile,
}
