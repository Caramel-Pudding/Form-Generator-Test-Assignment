import React, { FC, memo, FormEvent } from "react";

import { InputValue, MetaDataField } from "@/types/meta-data";
import { InputType } from "zlib";

interface GeneratedFieldProps {
  readonly field: MetaDataField;
  readonly value: InputValue;
  readonly onChange: (value: InputValue) => void;
  readonly errors?: string[];
}

const getDefaultValue = (inputType: InputType) => {
  switch (inputType) {
    case "number": {
      return 0;
    }
    case "text":
    default: {
      return "";
    }
  }
};

export const GeneratedField: FC<GeneratedFieldProps> = memo(
  ({ field, value, onChange, errors }) => {
    const renderField = () => {
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
          value={value || getDefaultValue(field.type)}
          onChange={(event: FormEvent<HTMLInputElement>) =>
            onChange(event.currentTarget.value)
          }
        />
      );
    };

    return (
      <>
        {renderField()}
        {errors && errors.map((error) => <div key={error}>{error}</div>)}
      </>
    );
  }
);
