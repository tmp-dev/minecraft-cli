
exports.command = 'client <command>';
exports.desc = 'To manage minecraft clients'
exports.builder = function (yargs) {
  return yargs.commandDir('client')
}
exports.handler = function (argv) {}