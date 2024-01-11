import { read } from 'to-vfile';
import { matter } from 'vfile-matter';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import fs from 'fs';
import { Collection } from '../collection';

export async function getAllDocuments(collection: Collection): Promise<File[]> {
  const filesName = fs.readdirSync(collection.path);

  const matchingFiles = filesName.filter((file: string) =>
    file.endsWith(`.${collection.format}`)
  );

  const filesPromises = matchingFiles.map(async (file: string) => {
    const vfile = await read(collection.getFullPath(file));
    matter(vfile, { strip: false });
    const body = unified().use(remarkParse).parse(vfile);

    return {
      file: vfile.history[0],
      data: {
        matter: vfile.data.matter,
        body,
      },
    };
  });

  const files = await Promise.all(filesPromises);

  return files;
}