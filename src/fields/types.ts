export type Types =
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
  fields: Types[];
};

export type ArrayField = BaseField & {
  type: 'array';
  of: Types[];
};

export type ReferenceField = BaseField & {
  type: 'reference';
  to: string[];
};
