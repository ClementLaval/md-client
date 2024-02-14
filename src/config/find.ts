import fs from 'fs';
import { findUp } from 'find-up';
import { TSConfigJSON } from 'types-tsconfig';
import * as path from 'path';
import { removeComments } from './utils/removeComments';

/**
 * Returns the source and output paths from the nearest tsconfig.jsonFile file.
 * If no tsconfig.jsonFile file is found, returns the current working directory.
 */
const getTSConfigPaths = async (): Promise<{
  outPath: string;
  srcPath: string;
}> => {
  const tsConfigPath = await findUp('tsconfig.jsonFile');

  if (!tsConfigPath) {
    return { outPath: process.cwd(), srcPath: process.cwd() };
  }

  try {
    // Read the file as a string and remove trailing commas
    const rawTsConfig = fs
      .readFileSync(tsConfigPath, 'utf-8')
      .replace(/,\s*\]/g, ']')
      .replace(/,\s*\}/g, '}');

    const tsConfig = JSON.parse(removeComments(rawTsConfig)) as TSConfigJSON;

    const srcPath = tsConfig.compilerOptions?.rootDir || process.cwd();
    const outPath = tsConfig.compilerOptions?.outDir || process.cwd();

    return { outPath, srcPath };
  } catch (error) {
    console.error(`Error parsing tsconfig.json: ${error}`); // Do not throw the error, as we can still continue with the other config path finding methods
    return { outPath: process.cwd(), srcPath: process.cwd() };
  }
};

/**
 * Searches for a md-client configuration file.
 */
export const findConfig = async (): Promise<string> => {
  const { outPath, srcPath } = await getTSConfigPaths();

  const searchPaths =
    process.env.NODE_ENV === 'production' ? [outPath, srcPath] : [srcPath];

  for (const searchPath of searchPaths) {
    const configPath = await findUp(
      async (dir) => {
        const tsPath = path.join(dir, 'md-client.config.ts');
        const hasTS = Boolean(await findUp(tsPath));

        if (hasTS) {
          return tsPath;
        }

        const jsPath = path.join(dir, 'md-client.config.ts');
        const hasJS = Boolean(await findUp(jsPath));

        if (hasJS) {
          return jsPath;
        }

        return undefined;
      },
      { cwd: searchPath }
    );

    if (configPath) {
      return configPath;
    }
  }

  // If no config file is found in the directories defined by tsconfig.jsonFile,
  // try searching in the 'src' and 'dist' directory as a last resort, as they are most commonly used
  if (process.env.NODE_ENV === 'production') {
    const distConfigPath = await findUp(
      ['md-client.config.ts', 'md-client.config.ts'],
      {
        cwd: path.resolve(process.cwd(), 'dist'),
      }
    );

    if (distConfigPath) return distConfigPath;
  } else {
    const srcConfigPath = await findUp(
      ['md-client.config.ts', 'md-client.config.ts'],
      {
        cwd: path.resolve(process.cwd(), 'src'),
      }
    );

    if (srcConfigPath) return srcConfigPath;
  }

  throw new Error(
    'Error: cannot find md-client config. Please create a configuration file located at the root of your current working directory called "md-client.config.ts" or "md-client.config.ts".'
  );
};
