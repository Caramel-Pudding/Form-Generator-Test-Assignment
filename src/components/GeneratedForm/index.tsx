import React, { FC, memo } from "react";

import { GeneratedField } from "@/components/GeneratedField";
import { MetaData, MetaDataField } from "@/types/meta-data";
import { Data } from "@/types/data";

import { ValidationGroup } from "@/types/validators";
import styles from "./styles.module.css";

interface GeneratedFormProps {
  metaData: MetaData;
  data: Data;
  callBack: () => void;
  validators?: ValidationGroup;
}

export const GeneratedForm: FC<GeneratedFormProps> = memo(
  ({ metaData, data, callBack, validators }) => {
    const isFormValid = validators
      ? metaData.fields.every((field: MetaDataField) =>
          validators[field.id]
            ? validators[field.id].every((check) => check(""))
            : true
        )
      : true;

    const handleSubmit = () => {
      if (isFormValid) {
        callBack();
      }
    };

    return (
      <form className={styles.container} onSubmit={handleSubmit}>
        {metaData.fields.map((field: MetaDataField) => (
          <label key={field.id} className={styles.container} id={field.id}>
            {field.label}
            <GeneratedField field={field} value={data[field.id]} />
          </label>
        ))}
        <button type="submit">Submit!</button>
      </form>
    );
  }
);
