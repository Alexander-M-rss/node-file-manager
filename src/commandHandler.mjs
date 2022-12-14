import { logInvalidInput } from "./log.mjs";
import * as os from './libs/os.mjs';

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
  default:
    logInvalidInput();
  }
};

export default commandHandler;