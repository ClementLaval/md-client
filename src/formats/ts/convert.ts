import { JSONFile } from '../jsonFile/types';
import { VFile } from 'vfile';

export async function convert(vfile: VFile): Promise<JSONFile> {
  return {
    // file: generateFileInfo(vfile.history[0]),
    data: {
      ...JSON.parse(vfile.toString()),
    },
  };
}
