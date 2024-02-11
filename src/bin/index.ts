import minimist from 'minimist';
import { generateTypes } from './generateTypes';

const args = minimist(process.argv.slice(2));

const scriptIndex = args._.findIndex((x) => x === 'build');

const script = scriptIndex === -1 ? args._[0] : args._[scriptIndex];

switch (script.toLowerCase()) {
  case 'generate:types': {
    generateTypes();
    break;
  }

  default:
    console.log(`Unknown script "${script}".`);
}
