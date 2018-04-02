#!/usr/bin/env node
require('yargs')
  .commandDir('server/cmd')
  .demandCommand()
  .help()
  .argv;
