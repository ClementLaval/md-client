import { Data, DataConfig } from '../../types';
import { setObjectValue } from './setObjectValue';

export function _10Merge(dataConfigs: DataConfig[]): Data {
  return dataConfigs.reduce((obj, field) => {
    setObjectValue(obj, field.path, field.value);

    return obj;
  }, {}) as Data;
  // Data type is checked on previous steps, detect if _type and _slug are set
}
