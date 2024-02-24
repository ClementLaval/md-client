// https://github.com/vfile/vfile

import { Data } from '../../data/types';
import { Collection } from '../index';
import fs from 'fs';
import { isValidFormat } from '../../formats/utils/isValidFormat';
import { FORMATS } from '../../formats';
import { Logger } from '../../utillities/logger';
import { converter } from '../../data/converter';

export async function find(
  fileName: string,
  collection: Collection
): Promise<Data | undefined> {
  // Retrieve all files from collection path folder
  let fileList;
  try {
    fileList = fs.readdirSync(collection.path);
  } catch (error: unknown) {
    if (error instanceof Error) {
      Logger.error(error.message);
    }
    return undefined;
  }

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

  const relativePath = `${collection.path}/${matchingFile.name}${matchingFile.extension}`;

  // Return undefined if invalid file format
  if (!isValidFormat(matchingFile.extension)) {
    Logger.error(
      `Invalid extension used: ${matchingFile.extension} (${relativePath})`
    );
    return undefined;
  }

  // Retrieve index related to file extension
  const format = FORMATS.find(
    (format) => format.extension === matchingFile.extension
  );

  if (!format) {
    Logger.error(`Error: unable to retrieve format for file: ${relativePath} `);
    return undefined;
  }

  Logger.info(`Processing... ${relativePath}`);

  // Execute converter and return Json Data
  return converter(relativePath, collection, format);
}
