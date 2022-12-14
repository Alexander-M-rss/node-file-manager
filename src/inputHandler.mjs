import commandHandler from './commandHandler.mjs';
import logOperationFailed from './log.mjs';

const inputHandler = async (input, rl) => {
  if (input.trim() === '.exit') {
    rl.close();
    
    return;
  }

  try {
    await commandHandler(...input.split(' '));
  } catch {
    logOperationFailed();
  }

  rl.setPrompt(`You are currently in ${process.cwd()}\n`);
  rl.prompt();
};

export default inputHandler;