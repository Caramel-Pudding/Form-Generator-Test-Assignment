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
  id: string;
  type: InputType | TextareaType;
  label: string;
  disabled?: boolean;
}

export interface MetaData {
  fields: MetaDataField[];
}
