import { createReadStream, createWriteStream } from 'fs';
import { open } from 'fs/promises';
import { basename, join } from 'path';
import { pipeline } from 'stream';

export const copyFile = async (pathToFile, pathToNewDirectory, ...args) => {
  if (args.length || !pathToFile || !pathToNewDirectory) {
    return false;
  }
  
  const file = await open(pathToFile, 'r');

  file.close();

  return new Promise((res,rej) => {
    const rs = createReadStream(pathToFile);
    const ws = createWriteStream(join(pathToNewDirectory,basename(pathToFile)), { flags: 'wx' });

    pipeline(rs, ws, (err) => {
      if (err) {
        rej(err);
      } else {
        res(true);
      }
    });
  });
};