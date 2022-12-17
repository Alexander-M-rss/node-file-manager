import { rename, stat } from 'fs/promises';
import { join, dirname, sep } from 'path';

export const renameFile = async (pathToFile, newFileName, ...args) => {
  if (args.length || !newFileName || newFileName.includes(sep)) {
    return false;
  }
  const newPathToFile = join(dirname(pathToFile), newFileName);
  const stats = await stat(newPathToFile).catch((err) => null);

  if (stats) {
      throw new Error('destination file already exists');
  }
  await rename(pathToFile, newPathToFile);
  return true;
};