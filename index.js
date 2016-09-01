#!/usr/bin/env node

const commander = require('commander');
const generatorFactory = require('./src/generator.js');

commander
  .option('-n, --number <number>', 'Number of test takers', 1, parseInt)
  .parse(process.argv);


generatorFactory({format : 'csv'})
    .out(process.stdout)
    .generate(commander.number);
