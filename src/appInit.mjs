import { createInterface } from 'readline';
import { homedir } from 'os';
import inputHandler from './inputHandler.mjs';

const USERNAME_ARG = '--username=';

export const username = process.argv.slice(2).find((arg) => arg.startsWith(USERNAME_ARG))
  ?.slice(USERNAME_ARG.length) || 'Anonymous';
export const homeDir = homedir();
export const rl = createInterface({
  input: process.stdin,
  output: process.stdout
});

process.chdir(homeDir);
rl.question(`Welcome to the File Manager, ${username}!\nYou are currently in ${process.cwd()}\n`,
  (input) => {
    inputHandler(input, rl);
    rl.on('line', (input) => inputHandler(input, rl));
  }
);
rl.on('close', () => console.log(`Thank you for using File Manager, ${username}!`));