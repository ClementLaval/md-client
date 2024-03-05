import { Data, DocumentMeta } from '../types';
import { Document } from '../../documents';
import { slugify } from '../../utilities/slugify';

export function _1Meta(
  data: Omit<Data, keyof DocumentMeta>,
  relativePath: string,
  document: Document
): Data {
  const pathParts = relativePath.split('/');
  const filenameWithExtension = pathParts[pathParts.length - 1];
  const [filename, extension] = filenameWithExtension.split('.');

  const _slug = slugify(filename || 'undefined-slug');
  const _type = document.name || 'undefined-type';

  return {
    _slug,
    _type,
    ...data,
  };
}
