import React, { FC, memo, FormEvent } from "react";

import { Field, InputValue, MetaDataField } from "@/types/meta-data";
import { InputType } from "zlib";

interface GeneratedFieldProps {
  readonly fieldMeta: MetaDataField;
  readonly fieldData: Field;
  readonly onChange: (value: InputValue) => void;
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
  ({ fieldMeta, fieldData, onChange }) => {
    const renderField = () => {
      if (fieldMeta.type === "textarea") {
        return (
          <textarea
            disabled={fieldMeta.disabled}
            value={fieldData.value || ""}
            onChange={(event: FormEvent<HTMLTextAreaElement>) =>
              onChange(event.currentTarget.value)
            }
          />
        );
      }
      return (
        <input
          disabled={fieldMeta.disabled}
          type={fieldMeta.type}
          value={fieldData.value || getDefaultValue(fieldMeta.type)}
          onChange={(event: FormEvent<HTMLInputElement>) =>
            onChange(event.currentTarget.value)
          }
        />
      );
    };

    return (
      <>
        {renderField()}
        {fieldData.errors &&
          fieldData.errors.map((error) => <div key={error}>{error}</div>)}
      </>
    );
  }
);
