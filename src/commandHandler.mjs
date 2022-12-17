import {
  listDir,
  os,
  logFile,
  createFile,
  renameFile,
  copyFile,
  removeFile,
  moveFile,
  calcHash,
} from './commands/index.js';

const commandHandler = async (command, ...args) => {
  switch (command) {
    case 'os':
      if (args.length > 1) {
        return false;
      }
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
          return false;
      }
    return true;
    case 'up':
      if (args.length) {
        return false;
      }
      process.chdir('../');
      return true;
    case 'cd':
      if (args.length !== 1) {
        return false;
      }
      process.chdir(...args);
      return true;
    case 'ls':
      if (args.length) {
        return false;
      }
      await listDir();
      return true;
    case 'cat':
      return await logFile(...args);
    case 'add':
      return await createFile(...args);
    case 'rn':
      return await renameFile(...args);
    case 'cp':
      return await copyFile(...args);
    case 'rm':
      return await removeFile(...args);
    case 'mv':
      return await moveFile(...args);
    case 'hash':
      return await calcHash(...args);
    default:
      return false;
  }
};

export default commandHandler;