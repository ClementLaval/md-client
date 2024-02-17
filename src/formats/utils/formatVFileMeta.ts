import { CollectionMeta } from '../jsonFile/types';
import { slugify } from '../../utillities/slugify';
import { Document } from '../../documents/types';

export function formatVFileMeta(
  relativePath: string,
  collection: Document
): Partial<CollectionMeta> {
  const pathParts = relativePath.split('/');
  const filenameWithExtension = pathParts[pathParts.length - 1];
  const [filename, extension] = filenameWithExtension.split('.');

  const _slug = slugify(filename);
  const _type = collection._type;

  return {
    _slug,
    _type,
  };
}
