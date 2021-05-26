import React, { FC, memo, useState, useEffect } from "react";

import { GeneratedForm } from "@/components/GeneratedForm";
import { dataStub } from "@/consts/data";
import { metaDataStub } from "@/consts/metadata";
import { externalErrors } from "@/consts/external-errors";
import { checkAge, checkName, isRequired } from "@/utilities/validators";
import { Field } from "@/types/meta-data";
import styles from "./styles.module.css";

const Home: FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [containerValues, setContainerValues] = useState<Record<string, Field>>(
    {}
  );

  useEffect(() => {
    if (isSubmitted) {
      console.log("You're such a great person!");
    }
  }, [isSubmitted]);

  useEffect(() => {
    console.log(containerValues);
  }, [containerValues]);

  return (
    <main className={styles.main}>
      <GeneratedForm
        data={dataStub}
        externalErrors={externalErrors}
        metaData={metaDataStub}
        validators={{
          name: [isRequired, checkName],
          age: [isRequired, checkAge],
          email: [isRequired],
        }}
        onChange={setContainerValues}
        onSubmit={() => {
          setIsSubmitted(true);
        }}
      />
    </main>
  );
};

export default memo(Home);
