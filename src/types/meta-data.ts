export type InputValue = string | number | undefined;

export type InputType =
  | "button"
  | "checkbox"
  | "color"
  | "date"
  | "datetime-local"
  | "email"
  | "file"
  | "hidden"
  | "image"
  | "month"
  | "number"
  | "password"
  | "radio"
  | "range"
  | "reset"
  | "search"
  | "submit"
  | "tel"
  | "text"
  | "time"
  | "url"
  | "week";

export type TextareaType = "textarea";

export interface MetaDataField {
  readonly id: string;
  readonly type: InputType | TextareaType;
  readonly label: string;
  readonly disabled?: boolean;
}

export interface MetaData {
  readonly fields: MetaDataField[];
}
