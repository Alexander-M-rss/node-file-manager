const parseTrimmedLine = (line) => {
  let parsed = [];
  const firstSpaceIdx = line.indexOf(' ');

  if (firstSpaceIdx > 0) {
    parsed.push(line.slice(0, firstSpaceIdx));
  } else {
    parsed.push(line);
  }

  let restOfLine = line.slice(parsed[0].length).trimStart();
  let start = restOfLine.indexOf('"');

  while (start > -1) {
    if (start) {
      if (restOfLine[start - 1] !== ' ')
        return [];
      
      parsed = parsed.concat(restOfLine.slice(0, start).trimEnd().split(' '));
    }
    restOfLine = restOfLine.slice(start + 1).trimStart();

    const end = restOfLine.indexOf('"');

    if (end < 1)
      return [];

    parsed.push(restOfLine.slice(0, end).trimEnd());
    restOfLine = restOfLine.slice(end + 1).trimStart();
    start = restOfLine.indexOf('"');
  }

  if (restOfLine)
    parsed = parsed.concat(restOfLine.split(' '));

  return parsed.filter(el => el);
};

export default parseTrimmedLine;