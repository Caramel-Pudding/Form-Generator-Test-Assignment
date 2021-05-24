import React, { FC, memo, useState, useEffect } from "react";

import { GeneratedForm } from "@/components/GeneratedForm";
import { dataStub } from "@/consts/data";
import { metaDataStub } from "@/consts/metadata";

import { checkAge, checkName, isRequired } from "@/utilities/validators";
import styles from "./styles.module.css";

const Home: FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (isSubmitted) {
      alert("You're such a great person!");
    }
  }, [isSubmitted]);

  return (
    <main className={styles.main}>
      <GeneratedForm
        callBack={() => {
          setIsSubmitted(true);
        }}
        data={dataStub}
        metaData={metaDataStub}
        validators={{
          name: [isRequired, checkName],
          age: [isRequired, checkAge],
        }}
      />
    </main>
  );
};

export default memo(Home);
