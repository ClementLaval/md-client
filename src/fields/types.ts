import { BooleanField } from './boolean';
import { DateField } from './date';
import { DatetimeField } from './datetime';
import { FileField } from './file';
import { ImageField } from './image';
import { NumberField } from './number';
import { SlugField } from './slug';
import { StringField } from './string';
import { RichtextField } from './richtext';
import { ObjectField } from './object';
import { ArrayField } from './array';
import { ReferenceField } from './reference';

export type Field =
  | ArrayField
  | BooleanField
  | DateField
  | DatetimeField
  | FileField
  | ImageField
  | NumberField
  | ObjectField
  | ReferenceField
  | RichtextField
  | SlugField
  | StringField;

export type OmitConfig<T extends Field> = Omit<T, 'parse'>;

export type FieldConfig =
  | OmitConfig<ArrayField>
  | OmitConfig<BooleanField>
  | OmitConfig<DateField>
  | OmitConfig<DatetimeField>
  | OmitConfig<FileField>
  | OmitConfig<ImageField>
  | OmitConfig<NumberField>
  | OmitConfig<ObjectField>
  | OmitConfig<ReferenceField>
  | OmitConfig<RichtextField>
  | OmitConfig<SlugField>
  | OmitConfig<StringField>;
