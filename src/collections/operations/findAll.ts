import fs from 'fs';
import { Collection } from '../index';
import { mdToJson } from '../../formats/markdown/mdToJson';
import { File } from '../../types/File';

export async function findAll(collection: Collection): Promise<File[]> {
  const filesName = fs.readdirSync(collection.path);

  // const matchingFiles = filesName.filter((file: string) =>
  //   file.endsWith(`.${collection.format}`)
  // );
  const matchingFiles: any[] = [];

  const filesPromises = matchingFiles.map(async (file: string) =>
    mdToJson(`${collection.path}/${file}`)
  );

  return await Promise.all(filesPromises);
}
