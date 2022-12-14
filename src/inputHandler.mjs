const inputHandler = (input, rl) => {
  if (input.trim() === '.exit') {
    rl.close();
    
    return;
  }
  rl.setPrompt(`You are currently in ${process.cwd()}\n`);
  rl.prompt();
};

export default inputHandler;