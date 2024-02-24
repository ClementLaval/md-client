import { Field, FieldConfig } from './types';
import { ArrayField } from './array';
import { BooleanField } from './boolean';
import { DateField } from './date';
import { DatetimeField } from './datetime';
import { FileField } from './file';
import { ImageField } from './image';
import { NumberField } from './number';
import { ObjectField } from './object';
import { ReferenceField } from './reference';
import { RichtextField } from './richtext';
import { SlugField } from './slug';
import { StringField } from './string';

export const FIELDS: Record<Field['type'], new (field: FieldConfig) => Field> =
  {
    array: ArrayField,
    boolean: BooleanField,
    date: DateField,
    datetime: DatetimeField,
    file: FileField,
    image: ImageField,
    number: NumberField,
    object: ObjectField,
    reference: ReferenceField,
    richtext: RichtextField,
    slug: SlugField,
    string: StringField,
  };
