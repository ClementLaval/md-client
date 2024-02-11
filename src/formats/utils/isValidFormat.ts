import { FORMATS } from '../index';

export function isValidFormat(path: string): boolean {
  return FORMATS.some((format) => path.endsWith(format.extension));
}
