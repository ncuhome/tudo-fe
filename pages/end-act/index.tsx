import React from "react";
import Link from "next/link";
import ActCard from "../../components/shared/activity-card";
import HeadBar from "../../components/shared/head-bar";
import styles from "./index.module.scss";

const ActList: React.FC = () => {
  return (
    <Link href="/actdetail">
      <a>
        <ActCard />
      </a>
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
