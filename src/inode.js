// const repl = require('repl');
const repl = require('pretty-repl');
const path = require('path');
const fs = require('fs');
const vm = require('vm');
const chalk = require('chalk');

const { REPLServer } = repl;
const modulePathArgs = 2;
const moduleFile = process.argv[modulePathArgs];

if (moduleFile) {
  const modulePath = path.join('./', moduleFile);
  const moduleCode = fs.readFileSync(modulePath).toString();
  global.require = require;
  const script = vm.createScript(moduleCode, modulePath);
  script.runInThisContext()
}

class IREPLServer extends REPLServer {
  constructor(options) {
    super(options);
    const superWrite = this.output.write.bind(this.output);
    // this.output.write = function write(output) {
    //   if (typeof output === 'string' && output.startsWith('Uncaught Out')) {
    //     return superWrite(output.replace('Uncaught ', ''))
    //   }
    //   return superWrite(output);
    // };
  }

  _writeAppendedString(stringToWrite) {
    console.log(stringToWrite)
    // super._writeAppendedString(stringToWrite);
  }
}

let line = 1;
const options = {
    prompt: `In [${chalk.bold('1')}]: `,
    useColors: true,
    // writer: function writer(output) {
    //   if (typeof output === 'string' && !output.trim()) return '';
    //   if (output instanceof Error) {
    //     this.setPrompt(`In [${chalk.bold(++line)}]: `)
    //     return `${output.name}: ${output.message}\n`;
    //   }
    //   const msg = `${chalk.red(`Out[${chalk.bold(line)}]:`)} ${output}\n`;
    //   this.setPrompt(`In [${chalk.bold(++line)}]: `)
    //   return msg;
    // }
};

// repl.start(options);
new IREPLServer(options);