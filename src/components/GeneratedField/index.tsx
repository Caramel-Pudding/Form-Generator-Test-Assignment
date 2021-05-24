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
        <textarea
          disabled={field.disabled}
          value={value || undefined}
          onChange={() => {}}
        />
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
