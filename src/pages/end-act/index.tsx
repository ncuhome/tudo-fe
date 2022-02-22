import React from "react";
import { Link } from "react-router-dom";
import ActCard from "../../components/shared/activity-card";
import HeadBar from "../../components/shared/head-bar";
import styles from "./index.module.scss";

const ActList: React.FC = () => {
  return (
    <Link style={{ color: "unset" }} to="/act-detail">
      <ActCard />
    </Link>
  );
};

const HistoryAct: React.FC = () => {
  return (
    <div className={styles.background}>
      <HeadBar />
      <ActList />
    </div>
  );
};

export default HistoryAct;
