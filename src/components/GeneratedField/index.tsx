import React, { FC, memo, FormEvent } from "react";

import { InputValue, MetaDataField } from "@/types/meta-data";

interface GeneratedFieldProps {
  readonly field: MetaDataField;
  readonly value: InputValue;
  readonly onChange: (value: InputValue) => void;
}

export const GeneratedField: FC<GeneratedFieldProps> = memo(
  ({ field, value, onChange }) => {
    if (field.type === "textarea") {
      return (
        <textarea
          disabled={field.disabled}
          value={value || ""}
          onChange={(event: FormEvent<HTMLTextAreaElement>) =>
            onChange(event.currentTarget.value)
          }
        />
      );
    }
    return (
      <input
        disabled={field.disabled}
        type={field.type}
        value={value || 0}
        onChange={(event: FormEvent<HTMLInputElement>) =>
          onChange(event.currentTarget.value)
        }
      />
    );
  }
);
