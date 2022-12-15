import { logInvalidInput } from "./log.mjs";
import { listDir, os } from './commands/index.js';
import { readdir } from 'fs/promises';

const commandHandler = async (command, ...args) => {
  switch (command) {
    case 'os':
      switch (args[0]) {
        case '--EOL':
          os.logEol();
          break;
        case '--cpus':
          os.logCpus();
          break;
        case '--homedir':
          os.logHomeDir();
          break;
        case '--username':
          os.logUsername();
          break;
        case '--architecture':
          os.logArchitecture();
          break;
        default:
          logInvalidInput();
      }
    break;
    case 'up':
      process.chdir('../');
      break;
    case 'cd':
      process.chdir(...args);
      break;
    case 'ls':
      await listDir();
      break;
  default:
    logInvalidInput();
  }
};

export default commandHandler;