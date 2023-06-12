const { spawn } = require('child_process')

function execCommand(...args) {
  return new Promise((resolve) => {
    // npm install/npm run dev
    // 1.开启子进程执行命令
    const childProcess = spawn(...args)

    // 2.将子进程的信息和错误输出到当前进程
    childProcess.stdout.pipe(process.stdout)
    childProcess.stderr.pipe(process.stderr)

    // 3.监听子进程执行结束
    childProcess.on('close', () => {
      resolve()
    })
  })
}

module.exports = {
  execCommand,
}
