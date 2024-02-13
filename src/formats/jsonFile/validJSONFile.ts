import { Logger } from '../../utillities/logger';
import { JSONFile } from './types';

export function validJSONFile(str: string): JSONFile | undefined {
  try {
    return JSON.parse(str);
  } catch (error) {
    Logger.error(`Invalid JSON format: ${str}`);
    return undefined;
  }
}
