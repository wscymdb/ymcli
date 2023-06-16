const inquirer = require('inquirer')

function prompt() {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await inquirer.prompt([
        {
          type: 'list',
          message: '选择您要创建的项目:',
          name: 'type',
          default: 'TypeScript',
          prefix: '😋😋😋',
          suffix: '😋😋😋',
          choices: ['TypeScript'],
        },
      ])
      resolve(res.type)
    } catch (error) {
      reject(error)
    }
  })
}

module.exports = {
  prompt,
}
