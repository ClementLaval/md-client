import { DocumentMeta } from '../types';
import { slugify } from '../../utillities/slugify';
import { toPascalCase } from '../../utillities/toPascalCase';
import { Document } from '../../documents';

export function formatVFileMeta(
  relativePath: string,
  collection: Document
): DocumentMeta {
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
