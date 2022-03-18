import React, { useEffect } from "react";
import ActList from "@/components/shared/act-list";
import HeadBar from "../../components/shared/head-bar";
import styles from "./index.module.scss";
import { useActsState } from "@/store/useActsState";

const HistoryAct: React.FC = () => {
  const { ActsList, fetchEndedList, clearActList } = useActsState();
  useEffect(() => {
    clearActList();
    fetchEndedList();
  }, []);

  return (
    <div className={styles.background}>
      <HeadBar />
      <ActList actsList={ActsList} />
    </div>
  );
};

export default HistoryAct;
