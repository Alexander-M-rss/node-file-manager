import { open } from 'fs/promises';
import { sep } from 'path';

export const createFile = async (fileName, ...args) => {
    if (args.length || !fileName || fileName.includes(sep)) {
      return false;
    }

    const file = await open(fileName, 'wx');

    file.close();
    return true;
};
