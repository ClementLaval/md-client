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

export interface BaseField {
  readonly type: string;
  parse: (value: any) => boolean;
}

export type Field =
  | BooleanField
  | DateField
  | DatetimeField
  | FileField
  | ImageField
  | NumberField
  | SlugField
  | StringField
  | RichtextField
  | ObjectField
  | ArrayField
  | ReferenceField;

export type FieldConfig =
  | Omit<BooleanField, 'parse'>
  | Omit<DateField, 'parse'>
  | Omit<DatetimeField, 'parse'>
  | Omit<FileField, 'parse'>
  | Omit<ImageField, 'parse'>
  | Omit<NumberField, 'parse'>
  | Omit<SlugField, 'parse'>
  | Omit<StringField, 'parse'>
  | Omit<RichtextField, 'parse'>
  | Omit<ObjectField, 'parse'>
  | Omit<ArrayField, 'parse'>
  | Omit<ReferenceField, 'parse'>;
