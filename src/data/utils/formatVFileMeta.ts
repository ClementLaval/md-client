import { CollectionMeta } from '../types';
import { slugify } from '../../utillities/slugify';
import { Document } from '../../documents/types';
import { toPascalCase } from '../../utillities/toPascalCase';

export function formatVFileMeta(
  relativePath: string,
  collection: Document
): CollectionMeta {
  const pathParts = relativePath.split('/');
  const filenameWithExtension = pathParts[pathParts.length - 1];
  const [filename, extension] = filenameWithExtension.split('.');

  const _slug = slugify(filename || 'undefined-_slug');
  const _type = toPascalCase(collection.name || 'undefined-type');

  return {
    _slug,
    _type,
  };
}
