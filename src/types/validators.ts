import { InputValue } from "./meta-data";

export type ValidationGroup = Record<string, Validator[]>;

export type Validator = (value: InputValue) => boolean;
