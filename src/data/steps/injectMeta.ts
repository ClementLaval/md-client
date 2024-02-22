import { CollectionMeta, Data } from '../types';
import { formatVFileMeta } from '../utils/formatVFileMeta';
import { Document } from '../../documents/types';

export function injectMeta(
  data: Omit<Data, keyof CollectionMeta>,
  relativePath: string,
  document: Document
): Data {
  const { _slug, _type } = formatVFileMeta(relativePath, document);

  return {
    _slug,
    _type,
    ...data,
  };
}
