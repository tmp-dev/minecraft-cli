
exports.command = 'server <command>';
exports.desc = 'To manage minecraft servers'
exports.builder = function (yargs) {
  return yargs.commandDir('server')
}
exports.handler = function (argv) {}