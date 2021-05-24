import { InputValue } from "@/types/meta-data";

export const isRequired = (value: InputValue): boolean => !!value;

export const checkAge = (age: InputValue): boolean =>
  !!(age && typeof age === "number" && age >= 0 && age <= 200);

export const checkName = (name: InputValue): boolean =>
  !!(name && typeof name === "string" && name[0] === name[0].toUpperCase());
