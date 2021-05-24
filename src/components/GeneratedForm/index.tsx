import React, { FC, memo } from "react";

import { GeneratedField } from "@/components/GeneratedField";
import { MetaData, MetaDataField } from "@/types/meta-data";
import { Data } from "@/types/data";

import styles from "./styles.module.css";

interface GeneratedFormProps {
  metaData: MetaData;
  data: Data;
}

export const GeneratedForm: FC<GeneratedFormProps> = memo(
  ({ metaData, data }) => {
    return (
      <form className={styles.container}>
        {metaData.fields.map((field: MetaDataField) => (
          <label key={field.id} className={styles.container} id={field.id}>
            {field.label}
            <GeneratedField field={field} value={data[field.id]} />
          </label>
        ))}
      </form>
    );
  }
);
