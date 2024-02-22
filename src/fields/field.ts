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

export type BaseField = {
  name: string;
  default?: () => any;
  required?: boolean;
  _type?: string;
};

export type BooleanField = BaseField & {
  type: 'boolean';
};

export type DateField = BaseField & {
  type: 'date';
};

export type DatetimeField = BaseField & {
  type: 'datetime';
};

export type FileField = BaseField & {
  type: 'file';
};

export type ImageField = BaseField & {
  type: 'image';
};

export type NumberField = BaseField & {
  type: 'number';
};

export type SlugField = BaseField & {
  type: 'slug';
};

export type StringField = BaseField & {
  type: 'string';
};

export type RichtextField = BaseField & {
  type: 'richtext';
};

export type ObjectField = BaseField & {
  type: 'object';
  fields: Field[];
};

export type ArrayField = BaseField & {
  type: 'array';
  of: Field[];
};

export type ReferenceField = BaseField & {
  type: 'reference';
  to: string[];
};

export type DocReference<T> = T | string;
