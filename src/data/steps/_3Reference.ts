import { DataConfig } from '../types';
import { Client } from '../../client';
import { trimSlashPath } from '../../utilities/trimSlashPath';
import { DocReference } from '../../fields/reference';

export async function _3Reference(
  configs: DataConfig[]
): Promise<DataConfig[]> {
  return await Promise.all(
    configs.map(async (config) => ({
      ...config,
      value:
        config.field?.type === 'reference'
          ? await retrieveDocReference(config.value)
          : config.value,
    }))
  );
}

async function retrieveDocReference(relativePath: string): DocReference<any> {
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
    return await collection.find(filename);
  } else {
    return relativePath;
  }
}
