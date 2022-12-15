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
    const parsedInput = parseTrimmedLine(trimmedInput);

    if (parsedInput) {
      await commandHandler(...parsedInput);
    } else {
      logInvalidInput();
    }
  } catch {
    logOperationFailed();
  }

  rl.setPrompt(`You are currently in ${process.cwd()}\n`);
  rl.prompt();
};

export default inputHandler;