export function toPascalCase(str: string): string {
  return str
    .replace(/[-_]\w/g, (match) => match.charAt(1).toUpperCase())
    .replace(/^\w/, (firstLetter) => firstLetter.toUpperCase())
    .replace(/[-_]/g, '');
}
