import React from "react";
import { Link } from "react-router-dom";
import ActCard from "../../components/shared/activity-card";
import ActList from "@/components/shared/act-list";
import HeadBar from "../../components/shared/head-bar";
import styles from "./index.module.scss";

const HistoryAct: React.FC = () => {
  return (
    <div className={styles.background}>
      <HeadBar />
      <ActList actsList={[]} />
    </div>
  );
};

export default HistoryAct;
