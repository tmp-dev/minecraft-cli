
exports.command = 'config <command>';
exports.desc = 'To manage mccli'
exports.builder = function (yargs) {
  return yargs.commandDir('config')
}
exports.handler = function (argv) {}