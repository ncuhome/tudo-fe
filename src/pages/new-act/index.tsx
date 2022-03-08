import React from "react";
import ActCard from "../../components/shared/activity-card";
import HeadBar from "../../components/shared/head-bar";
import styles from "./index.module.scss";

const NewAct: React.FC = () => {
  return (
    <div className={styles.background}>
      <HeadBar />
      <div className={styles.new_act_form}>
        <div className={styles.form_title}>
          <div>发布新活动</div>
          <span>发布</span>
        </div>
        <ActCard />
      </div>
    </div>
  );
};

export default NewAct;
