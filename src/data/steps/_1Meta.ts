import { Data, DocumentMeta } from '../types';
import { formatVFileMeta } from '../utils/formatVFileMeta';
import { Document } from '../../documents';

export function _1Meta(
  data: Omit<Data, keyof DocumentMeta>,
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
