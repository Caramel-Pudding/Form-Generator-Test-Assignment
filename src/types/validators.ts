import { InputValue } from "./meta-data";

export type ValidationGroup = Record<string, Validator[]>;

export interface Error {
  isError: boolean;
  errorMessage: string;
}

export type Validator = (value: InputValue) => Error;
