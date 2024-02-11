// https://github.com/vfile/vfile

import { File } from '../../types/File';
import { Collection } from '../index';
import fs from 'fs';
import { isValidFormat } from '../../formats/utils/isValidFormat';
import { FORMATS } from '../../formats';
import { Logger } from '../../utillities/logger';

export async function find(
  fileName: string,
  collection: Collection
): Promise<File | undefined> {
  // Retrieve all files from collection path folder
  const fileList = fs.readdirSync(collection.path);

  // Reduce to get filename & extension
  const files = fileList.reduce(
    (acc: { name: string; extension: string }[], file) => {
      const extension = file.match(/\.(.+)$/);
      acc.push({
        name: file.replace(/\..+$/, ''),
        extension: extension?.length ? extension[0].toString() : '',
      });
      return acc;
    },
    []
  );

  // Find first file corresponding to input filename
  const matchingFile = files.find((file) => file.name === fileName);

  // Return undefined if no matching file
  if (!matchingFile) {
    Logger.error(`No file found named: ${fileName}`);
    return undefined;
  }

  // Return undefined if invalid file format
  if (!isValidFormat(matchingFile.extension)) {
    Logger.error(
      `Invalid extension used: ${matchingFile.extension} | ${matchingFile.name}${matchingFile.extension}`
    );
    return undefined;
  }

  // Retrieve converter related to file extension
  const converter = FORMATS.find(
    (format) => format.extension === matchingFile.extension
  );

  if (!converter) {
    Logger.error(
      `Error: unable to retrieve converter for file: ${matchingFile.name}${matchingFile.extension} `
    );
    return undefined;
  }

  const relativePath = `${collection.path}/${matchingFile.name}${matchingFile.extension}`;
  Logger.info(`Processing... ${relativePath}`);
  
  // Execute converter and return JSON
  return converter.execute(relativePath);
}
