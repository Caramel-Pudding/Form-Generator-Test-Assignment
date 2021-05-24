import React, { FC, memo } from "react";

import { GeneratedForm } from "@/components/GeneratedForm";
import { dataStub } from "@/consts/data";
import { metaDataStub } from "@/consts/metadata";

import styles from "./styles.module.css";

const Home: FC = () => {
  return (
    <main className={styles.main}>
      <GeneratedForm data={dataStub} metaData={metaDataStub} />
    </main>
  );
};

export default memo(Home);
