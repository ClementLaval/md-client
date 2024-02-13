import { JSONFile } from '../jsonFile/types';
import { VFile } from 'vfile';
import { generateFileInfo } from '../jsonFile/generateFileInfo';

export async function convert(vfile: VFile): Promise<JSONFile> {
  return {
    file: generateFileInfo(vfile.history[0]),
    data: {
      ...JSON.parse(vfile.toString()),
    },
  };
}
