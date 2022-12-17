import { createReadStream, createWriteStream } from 'fs';
import { open } from 'fs/promises';
import { pipeline } from 'stream';
import { createBrotliCompress } from 'zlib';

export const compress = async (pathToFile, pathToDestination, ...args) => {
  if (args.length || !pathToFile || !pathToDestination) {
    return false;
  }

  const file = await open(pathToFile, 'r');

  file.close();

  return new Promise((res, rej) => {
    const rs = createReadStream(pathToFile);
    const ws = createWriteStream(pathToDestination, { flags: 'wx' });
    const compress = createBrotliCompress();

    pipeline(rs, compress, ws, (err) => {
      if (err) {
        rej(err);
      } else {
        res(true);
      }
    });
  });
};