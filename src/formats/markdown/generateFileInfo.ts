import { JSONFileInfo } from '../jsonFile/types';

export function generateFileInfo(input: string): JSONFileInfo {
  const pathParts = input.split('/');
  const filenameWithExtension = pathParts[pathParts.length - 1];
  const [filename, extension] = filenameWithExtension.split('.');

  const breadcrumbs = pathParts.slice(1, -1);
  const relativePath =
    breadcrumbs.length > 1
      ? `${breadcrumbs.join('/')}/${filenameWithExtension}`
      : filenameWithExtension;

  return {
    filename,
    basename: filenameWithExtension,
    breadcrumbs,
    path: input,
    relativePath,
    extension: `.${extension}`,
  };
}
