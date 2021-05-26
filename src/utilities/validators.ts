import { InputValue } from "@/types/meta-data";
import { Validator } from "@/types/validators";

export const runValidators = (
  validators: Validator[],
  value: InputValue
): string[] => {
  const errorMessages: string[] = [];
  validators.forEach((validator) => {
    const error = validator(value);
    if (error.isError) {
      errorMessages.push(error.errorMessage);
    }
  });
  return errorMessages;
};

export const isRequired: Validator = (value) => ({
  isError: !value,
  errorMessage: "You need to fill this field",
});

export const checkAge: Validator = (age) => ({
  isError: !(age && typeof age === "number" && age >= 0 && age <= 200),
  errorMessage: "Your age can`t be lower than 0 or higher than 200",
});

export const checkName: Validator = (name) => ({
  isError: !(
    name &&
    typeof name === "string" &&
    name[0] === name[0].toUpperCase()
  ),
  errorMessage: "Your name should start with uppercase letter",
});
