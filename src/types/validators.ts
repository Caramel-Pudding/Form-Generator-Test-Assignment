export type ValidationGroup = Record<string, Validator[]>;

export type Validator = (field: string) => boolean;
