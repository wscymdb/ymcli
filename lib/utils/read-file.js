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

    if (!item.createfile) return

    let path = `./src/router${item.path}`

    fileList.push({
      dest: path,
      name: item.name,
    })
  })
}

module.exports = {
  readFile,
}
