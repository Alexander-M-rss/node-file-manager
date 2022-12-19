import { createReadStream } from 'fs';

export const logFile = async (pathToFile, ...args) => {
  if (!pathToFile || args.length) {
    return false;
  }

  return new Promise ((res,rej) => {
    const rs = createReadStream(pathToFile);
    let data = '';

    rs.on('data', chunk => data += chunk);
    rs.on('error', rej);
    rs.on('end', () => {
      console.log(data);
      res(true);
    });
  });
};