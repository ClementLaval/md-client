import fs from 'fs';
import { Collection } from '../index';
import { JSONFile } from '../../formats/jsonFile/types';
import { Logger } from '../../utillities/logger';
import { FORMATS } from '../../formats';
import { Format } from '../../formats/types';
import { removeArrayUndefined } from '../../utillities/removeArrayUndefined';
import { isValidFormat } from '../../formats/utils/isValidFormat';

export async function findAll(collection: Collection): Promise<JSONFile[]> {
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

  // Filter valid files
  const filePayloads = files.reduce(
    (
      acc: {
        name: string;
        extension: string;
        relativePath: string;
        converter: Format | undefined;
      }[],
      file
    ) => {
      acc.push({
        ...file,
        relativePath: `${collection.path}/${file.name}${file.extension}`,
        converter: FORMATS.find(
          (format) => format.extension === file.extension
        ),
      });

      return acc;
    },
    []
  );

  // Convert files
  const filesPromises = filePayloads.map((file) => {
    if (isValidFormat(file.extension) && file.converter) {
      Logger.info(`Processing... ${file.relativePath}`);
      return file.converter.execute(file.relativePath);
    } else {
      Logger.error(
        `Invalid extension used: ${file.extension} (${file.relativePath})`
      );
    }
  });

  const jsonFiles = removeArrayUndefined(await Promise.all(filesPromises));

  Logger.info(`Total: ${jsonFiles.length} files processed 🎉`);
  return jsonFiles;
}
