import React, { FC, memo } from "react";

import { MetaDataField } from "@/types/meta-data";

interface GeneratedFieldProps {
  field: MetaDataField;
  value?: string | number;
}

export const GeneratedField: FC<GeneratedFieldProps> = memo(
  ({ field, value }) => {
    if (field.type === "textarea") {
      return (
        <textarea disabled={field.disabled} onChange={() => {}}>
          {value || undefined}
        </textarea>
      );
    }
    return (
      <input
        disabled={field.disabled}
        type={field.type}
        value={value || undefined}
        onChange={() => {}}
      />
    );
  }
);
