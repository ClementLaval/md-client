import { read } from 'to-vfile';
import { VFile } from 'vfile';

export async function retrieve(relativePath: string): Promise<VFile> {
  return await read(relativePath);
}
