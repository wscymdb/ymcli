const { program } = require('commander')

function helpOptions() {
  // version
  const version = require('./../../package.json').version
  program.version(version, '--version, -v')

  // desc
  program.option('--desc', 'this is ymcli  just help me develop ')

  // dest
  program.option(
    '-d --dest <dest> ',
    'a destination folder, eg: ymcli -d src/view'
  )
}

module.exports = helpOptions
