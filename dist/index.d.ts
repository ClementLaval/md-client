import * as src from 'src';

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
    constructor(config: OmitConfig<BooleanField>);
    parse(value: unknown, relativePath: string): Promise<boolean | undefined>;
}

declare class DateField extends BaseField {
    readonly type = "date";
    constructor(config: OmitConfig<DateField>);
    parse(value: unknown, relativePath: string): Promise<string | undefined>;
}

declare class DatetimeField extends BaseField {
    readonly type = "datetime";
    constructor(config: OmitConfig<DatetimeField>);
    parse(value: unknown, relativePath: string): Promise<string | undefined>;
}

declare class FileField extends BaseField {
    readonly type = "file";
    constructor(config: OmitConfig<FileField>);
    parse(value: unknown, relativePath: string): Promise<string | undefined>;
}

declare class ImageField extends BaseField {
    readonly type = "image";
    constructor(config: OmitConfig<ImageField>);
    parse(value: unknown, relativePath: string): Promise<string | undefined>;
}

declare class NumberField extends BaseField {
    readonly type = "number";
    constructor(config: OmitConfig<NumberField>);
    parse(value: unknown, relativePath: string): Promise<number | undefined>;
}

declare class SlugField extends BaseField {
    readonly type = "slug";
    constructor(config: OmitConfig<SlugField>);
    parse(value: unknown, relativePath: string): Promise<string | undefined>;
}

declare class StringField extends BaseField {
    readonly type = "string";
    constructor(config: OmitConfig<StringField>);
    parse(value: unknown, relativePath: string): Promise<string | undefined>;
}

declare class RichtextField extends BaseField {
    readonly type = "richtext";
    readonly isBody?: boolean;
    constructor(config: OmitConfig<RichtextField>);
    parse(value: unknown, relativePath: string): Promise<string | undefined>;
}

declare class ObjectField extends BaseField {
    readonly type = "object";
    fields: FieldConfig[];
    constructor(config: OmitConfig<ObjectField>);
    parse(value: unknown, relativePath: string): Promise<object | undefined>;
    private _fields;
}

declare class ArrayField extends BaseField {
    readonly type = "array";
    readonly of: FieldConfig[];
    constructor(config: OmitConfig<ArrayField>);
    parse(value: unknown, relativePath: string): Promise<any[] | undefined>;
    private _of;
}

type DocReference<T> = T | string;
declare class ReferenceField extends BaseField {
    readonly type = "reference";
    to: Document['name'][];
    constructor(config: OmitConfig<ReferenceField>);
    parse(value: unknown, relativePath: string): Promise<string | undefined>;
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
    find(fileName: string): Promise<src.Data | undefined>;
    findAll(): Promise<src.Data[]>;
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
    find(): Promise<src.Data | undefined>;
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
};
type DataPath = (string | number)[];
type DataConfig = {
    path: DataPath;
    value: any;
    field: Field;
};

export { BaseField, Client, type Config, type Data, type DataConfig, type DataPath, type DocReference, type DocumentConfig, type DocumentMeta, type Field, type FieldConfig, type OmitConfig, ReferenceField };
