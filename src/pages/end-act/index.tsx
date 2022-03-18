import React, { useEffect } from "react";
import { DotLoading } from "antd-mobile";
import ActList from "@/components/shared/act-list";
import HeadBar from "../../components/shared/head-bar";
import styles from "./index.module.scss";
import { useActsState } from "@/store/useActsState";

const HistoryAct: React.FC = () => {
  const { ActsList, isActsLoading, fetchEndedList, clearActList } =
    useActsState();
  useEffect(() => {
    clearActList();
    fetchEndedList();
  }, []);

  return (
    <div className={styles.background}>
      <HeadBar />
      {isActsLoading ? (
        <div className={styles.loader_wrapper}>
          <DotLoading color={"#6ba7ac"} />
        </div>
      ) : (
        <ActList actsList={ActsList} />
      )}
    </div>
  );
};

export default HistoryAct;
