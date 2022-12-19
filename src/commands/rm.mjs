import { rm } from 'fs/promises';

export const removeFile = async (pathToFile, ...args) => {
  if (args.length || !pathToFile) {
    return false;
  }
  
  await rm(pathToFile);

  return true;
};