export function trimSlashPath(path: string): string {
  // Check if there is a slash at the beginning of the string
  if (path.startsWith('/')) {
    path = path.slice(1);
  }

  // Check if there is a slash at the end of the string
  if (path.endsWith('/')) {
    path = path.slice(0, -1);
  }

  return path;
}
