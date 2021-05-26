import React, { FC, memo, useState, SyntheticEvent } from "react";

import { GeneratedField } from "@/components/GeneratedField";
import { InputValue, MetaData, MetaDataField, Field } from "@/types/meta-data";
import { Data } from "@/types/data";
import { runValidators } from "@/utilities/validators";
import { ValidationGroup } from "@/types/validators";
import styles from "./styles.module.css";

interface GeneratedFormProps {
  readonly metaData: MetaData;
  readonly data: Data;
  readonly onSubmit: () => void;
  readonly onChange: (data: Record<string, Field>) => void;
  readonly validators?: ValidationGroup;
  readonly externalErrors?: Record<string, string[]>;
}

export const GeneratedForm: FC<GeneratedFormProps> = memo(
  ({
    metaData,
    data,
    validators = {},
    externalErrors = {},
    onSubmit,
    onChange,
  }) => {
    const [formState, setFormState] = useState(
      metaData.fields.reduce(
        (acc: Record<string, Field>, field: MetaDataField) => ({
          ...acc,
          [field.id]: {
            value: data[field.id] || "",
            errors: (externalErrors && externalErrors[field.id]) || [],
          },
        }),
        {}
      )
    );

    const handleFieldChange = (field: string, value: InputValue) => {
      const fieldErrors =
        validators[field] && runValidators(validators[field], value);

      setFormState({
        ...formState,
        [field]: {
          value,
          errors: [...(externalErrors[field] || []), ...(fieldErrors || [])],
        },
      });
    };

    const handleSubmit = (event: SyntheticEvent) => {
      event.preventDefault();
      if (
        Object.values(formState).every((field: Field) => !field.errors.length)
      ) {
        onSubmit();
      }
    };

    return (
      <form
        className={styles.form}
        onChange={() => onChange(formState)}
        onSubmit={handleSubmit}
      >
        {metaData.fields.map((field: MetaDataField) => (
          <label key={field.id} className={styles.field}>
            {field.label}
            <GeneratedField
              errors={formState[field.id].errors}
              field={field}
              value={formState[field.id].value}
              onChange={(value: InputValue) =>
                handleFieldChange(field.id, value)
              }
            />
          </label>
        ))}
        <button type="submit">Submit!</button>
      </form>
    );
  }
);
