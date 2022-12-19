import { createReadStream } from 'fs';
import { createHash } from 'crypto';

export const calcHash = async (pathToFile, ...args) => {
  if (!pathToFile || args.length) {
    return false;
  }

  return new Promise((res, rej) => {
    const rs = createReadStream(pathToFile);
    let data = '';
    
    rs.on('data', chunk => data += chunk);
    rs.on('end', () => {
      console.log(createHash('sha256').update(data).digest('hex'));
      res(true);
    });
    rs.on('error', rej);
  });
};