import { Data, DataConfig } from '../types';

export function merge(dataConfig: DataConfig): Data {
  // transform to Data format
  const data = dataConfig as Data;
  return data;
}
