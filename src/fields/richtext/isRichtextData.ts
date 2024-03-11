export function isRichtextData(data: any): boolean {
  return (
    typeof data === 'object' &&
    'type' in data &&
    'children' in data &&
    'position' in data
  );
}
