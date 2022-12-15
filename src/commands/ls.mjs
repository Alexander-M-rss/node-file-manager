import { readdir } from 'fs/promises';

const sortByName = (a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1: -1;

export const listDir = async () => {
  const dirData = await readdir(process.cwd(), { withFileTypes: true });

  const [dirs, files] = dirData.reduce(([dirs, files],item) => {
    if (item.isFile()) {
      return [dirs, [... files, { name: item.name, type: 'file' }]];
    } else {
      return [[... dirs, { name: item.name, type: 'directory' }], files];
    }
  }, [[], []]);
  console.table([...dirs.sort(sortByName), ...files.sort(sortByName)]);
};