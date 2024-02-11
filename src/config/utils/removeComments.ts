export function removeComments(sourceCode: string): string {
  let insideComment = false;
  let result = '';

  for (let i = 0; i < sourceCode.length; i++) {
    if (sourceCode[i] === '/' && sourceCode[i + 1] === '/') {
      // Single-line comment found, skip until the end of the line
      while (sourceCode[i] !== '\n' && i < sourceCode.length - 1) {
        i++;
      }
    } else if (sourceCode[i] === '/' && sourceCode[i + 1] === '*') {
      // Multi-line comment found, skip until the end of the comment
      insideComment = true;
      i += 2;

      while (insideComment && i < sourceCode.length - 1) {
        if (sourceCode[i] === '*' && sourceCode[i + 1] === '/') {
          insideComment = false;
          i += 2;
        } else {
          i++;
        }
      }
    } else {
      result += sourceCode[i];
    }
  }

  return result;
}
