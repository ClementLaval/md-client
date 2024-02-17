export function slugify(str: string): string {
  return str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/ /g, '-')
    .replace(/[^\w-]+/g, '')
    .toLowerCase()
    .trim();
}
