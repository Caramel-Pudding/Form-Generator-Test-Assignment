import { MetaData, InputType } from "@/types/meta-data";

export const inputTypes: InputType[] = [
  "button",
  "checkbox",
  "color",
  "date",
  "datetime-local",
  "email",
  "file",
  "hidden",
  "image",
  "month",
  "number",
  "password",
  "radio",
  "range",
  "reset",
  "search",
  "submit",
  "tel",
  "text",
  "time",
  "url",
  "week",
];

export const metaDataStub: MetaData = {
  fields: [
    {
      id: "name",
      type: "text",
      label: "Name",
    },
    {
      id: "age",
      type: "number",
      label: "Age",
    },
    {
      id: "email",
      type: "email",
      label: "E-mail",
    },
    {
      id: "comments",
      type: "textarea",
      label: "Comments",
      disabled: true,
    },
  ],
};
