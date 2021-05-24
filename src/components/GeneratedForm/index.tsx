import React, { FC, memo, useState, SyntheticEvent } from "react";

import { GeneratedField } from "@/components/GeneratedField";
import { InputValue, MetaData, MetaDataField } from "@/types/meta-data";
import { Data } from "@/types/data";

import { ValidationGroup } from "@/types/validators";
import styles from "./styles.module.css";

interface GeneratedFormProps {
  readonly metaData: MetaData;
  readonly data: Data;
  readonly callBack: () => void;
  readonly validators?: ValidationGroup;
}

export const GeneratedForm: FC<GeneratedFormProps> = memo(
  ({ metaData, data, callBack, validators }) => {
    const [formState, setFormState] = useState(
      metaData.fields.reduce(
        (acc: Record<string, InputValue>, field: MetaDataField) => {
          acc[field.id] = data[field.id] || undefined;
          return acc;
        },
        {}
      )
    );

    const isFormValid = validators
      ? metaData.fields.every((field: MetaDataField) =>
          validators[field.id]
            ? validators[field.id].every((check) => check(formState[field.id]))
            : true
        )
      : true;

    const handleSubmit = (event: SyntheticEvent) => {
      event.preventDefault();
      if (isFormValid) {
        callBack();
      }
    };

    return (
      <form className={styles.form} onSubmit={handleSubmit}>
        {metaData.fields.map((field: MetaDataField) => (
          <label key={field.id} className={styles.field} id={field.id}>
            {field.label}
            <GeneratedField
              field={field}
              value={formState[field.id]}
              onChange={(value: InputValue) =>
                setFormState({ ...formState, [field.id]: value })
              }
            />
          </label>
        ))}
        <button type="submit">Submit!</button>
      </form>
    );
  }
);
