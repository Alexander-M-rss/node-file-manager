import commandHandler from './commandHandler.mjs';
import logOperationFailed, { logInvalidInput } from './log.mjs';
import parseTrimmedLine from './lineParser.mjs';

const inputHandler = async (input, rl) => {
  const trimmedInput = input.trim();

  if (trimmedInput === '.exit') {
    rl.close();
    
    return;
  }

  try {
    const isSuccessfull = await commandHandler(...parseTrimmedLine(trimmedInput));

    if (!isSuccessfull) {
      logInvalidInput();
    }
  } catch {
    logOperationFailed();
  }

  rl.setPrompt(`You are currently in ${process.cwd()}\n`);
  rl.prompt();
};

export default inputHandler;