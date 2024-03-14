import { DocReference } from '../../../fields/reference';
import { Client } from '../../../client';
import { trimSlashPath } from '../../../utilities/trimSlashPath';
import { Logger } from '../../../utilities/logger';

export async function retrieveDocReference(
  relativePath: string
): Promise<DocReference<any> | string> {
  const clientInstance = Client.getInstance();
  const pathParts = relativePath.split('/');
  const filenameWithExtension = pathParts[pathParts.length - 1];
  const [filename, extension] = filenameWithExtension.split('.');
  const collectionPath = trimSlashPath(
    relativePath.replace(filenameWithExtension, '')
  );

  const collection = Object.values(clientInstance.collections).find(
    (collection) => collection.path === collectionPath
  );

  if (collection) {
    // if related document is founded, return his data
    return await collection.find(filename);
  } else {
    Logger.error(`No collection found on reference field: ${relativePath}`);
    return undefined;
  }
}
