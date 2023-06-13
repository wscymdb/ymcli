const path = require('path')

function readFile(filepath) {
  const absolutePath = path.resolve(process.env.PWD, filepath)
  const fileList = []
  const arr = require(absolutePath)

  arr.forEach((item) => {
    const dest = item.dest.replace('views', 'router')
    fileList.push({
      dest,
      name: item.name,
    })
  })

  return fileList
}

module.exports = {
  readFile,
}
