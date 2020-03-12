const yargs = require('yargs');

/**
 * Setup sub commands
 */
yargs
    .commandDir('./commands')
    .help();


/**
 * Initialize
 */
yargs.parse();