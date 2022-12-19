import { copyFile } from "./cp.mjs";
import { removeFile } from "./rm.mjs";

export const moveFile = async (pathToFile, pathToNewDirectory, ...args) => {
  if (args.length || !pathToFile || !pathToNewDirectory) {
    return false;
  }

  if (await copyFile(pathToFile, pathToNewDirectory)) {
    return await removeFile(pathToFile);
  }

  return false;
};