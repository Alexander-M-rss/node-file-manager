import os from 'os';

export const logEol = () => {
  console.log(JSON.stringify(os.EOL));
};

export const logCpus = () => {
  const cpus = os.cpus();

  console.log(`CPUS amount is ${cpus.length}`);
  console.table(cpus, ['model', 'speed']);
};

export const logHomeDir = () => {
  console.log(os.homedir());
};

export const logUsername = () => {
  console.log(os.userInfo().username);
};

export const logArchitecture = () => {
  console.log(os.arch());
};
