import { Root } from 'mdast';

declare abstract class BaseField {
    readonly name: string;
    readonly required?: boolean;
    readonly validate?: ({ value }: {
        value: any;
    }) => Boolean;
    readonly default?: ({ document }: {
        document: Document;
    }) => any;
    protected constructor(config: BaseField);
}

declare class BooleanField extends BaseField {
    readonly type = "boolean";
    readonly parse: (data: any) => Promise<boolean>;
    constructor(config: FieldConfig);
    private _parse;
}

declare class DateField extends BaseField {
    readonly type = "date";
    readonly parse: (data: any) => Promise<string>;
    constructor(config: FieldConfig);
    private _parse;
}

declare class DatetimeField extends BaseField {
    readonly type = "datetime";
    readonly parse: (data: any) => Promise<string>;
    constructor(config: FieldConfig);
    private _parse;
}

declare class FileField extends BaseField {
    readonly type = "file";
    readonly parse: (data: any) => Promise<string>;
    constructor(config: FieldConfig);
    private _parse;
}

declare class ImageField extends BaseField {
    readonly type = "image";
    readonly parse: (data: any) => Promise<string>;
    constructor(config: FieldConfig);
    private _parse;
}

declare class NumberField extends BaseField {
    readonly type = "number";
    readonly parse: (data: any) => Promise<number>;
    constructor(config: FieldConfig);
    private _parse;
}

declare class SlugField extends BaseField {
    readonly type = "slug";
    readonly parse: (data: any) => Promise<string>;
    constructor(config: FieldConfig);
    private _parse;
}

declare class StringField extends BaseField {
    readonly type = "string";
    readonly parse: (value: any) => Promise<string>;
    constructor(config: FieldConfig);
    private _parse;
}

declare class RichtextField extends BaseField {
    readonly type = "richtext";
    readonly parse: (data: any) => Promise<Object>;
    constructor(config: FieldConfig);
    private _parse;
}

declare class ObjectField extends BaseField {
    readonly type = "object";
    readonly parse: (data: any) => Promise<Object>;
    fields: Field[];
    constructor(config: FieldConfig);
    private _parse;
    private _fields;
}

declare class ArrayField extends BaseField {
    readonly type = "array";
    readonly parse: (data: any) => Promise<any[]>;
    readonly of: Field[];
    constructor(config: FieldConfig);
    private _parse;
    private _of;
}

type DocReference<T> = T | string;
declare class ReferenceField extends BaseField {
    readonly type = "reference";
    readonly parse: (data: any) => Promise<string>;
    to: Document['name'][];
    constructor(config: FieldConfig);
    private _parse;
    private _to;
}

type Field = ArrayField | BooleanField | DateField | DatetimeField | FileField | ImageField | NumberField | ObjectField | ReferenceField | RichtextField | SlugField | StringField;
type OmitConfig<T extends Field> = Omit<T, 'parse'>;
type FieldConfig = OmitConfig<ArrayField> | OmitConfig<BooleanField> | OmitConfig<DateField> | OmitConfig<DatetimeField> | OmitConfig<FileField> | OmitConfig<ImageField> | OmitConfig<NumberField> | OmitConfig<ObjectField> | OmitConfig<ReferenceField> | OmitConfig<RichtextField> | OmitConfig<SlugField> | OmitConfig<StringField>;

declare abstract class Document {
    name: string;
    path: string;
    fields: Field[];
    protected constructor(config: DocumentConfig);
    private _fields;
}

type DocumentConfig = {
    name: Document['name'];
    path: Document['path'];
    fields: FieldConfig[];
};

declare class Collection extends Document {
    constructor(config: DocumentConfig);
    find(fileName: string): Promise<Data | undefined>;
    findAll(): Promise<Data[]>;
}

type Config = {
    logger?: boolean;
    media?: {
        mediatRoot: string;
        publicFolder: string;
    };
    typescript?: {
        path: string;
    };
    schema: {
        collections: DocumentConfig[];
        singletons: DocumentConfig[];
    };
};

declare class Singleton extends Document {
    constructor(config: DocumentConfig);
    find(): Promise<Data | undefined>;
}

declare class Client {
    readonly collections: Record<Collection['name'], Collection>;
    readonly singletons: Record<Singleton['name'], Singleton>;
    readonly config: Config;
    constructor(config: Config);
    private static instance;
    static getInstance(): Client;
}

type DocumentMeta = {
    _slug: string;
    _type: string;
};
type Data = DocumentMeta & {
    [key: string]: any;
    body?: Root;
};
type DataPath = (string | number)[];
type DataConfig = {
    path: DataPath;
    value: any;
    field: Field;
};

export { BaseField, Client, type Config, type Data, type DataConfig, type DataPath, type DocReference, type DocumentConfig, type DocumentMeta, type Field, type FieldConfig, ReferenceField };
