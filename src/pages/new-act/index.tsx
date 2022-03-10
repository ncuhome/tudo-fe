import React from "react";
import { TextArea } from "antd-mobile";
import ActCard from "../../components/shared/activity-card";
import HeadBar from "../../components/shared/head-bar";
import styles from "./index.module.scss";
import ActInfoCard from "@/components/shared/act-info-card";

const NewAct: React.FC = () => {
  return (
    <div className={styles.background}>
      <HeadBar />
      <div className={styles.new_act_form}>
        <div className={styles.form_title}>
          <div>发布新活动</div>
          <span>发布</span>
        </div>
        <ActInfoCard isOnModify={true} />
        <div className={styles.cut_line}>发布者</div>
        <div className={styles.author}>
          <img
            style={{ width: "4vw", marginRight: "3vw" }}
            src={"/img/author.svg"}
          />
          <TextArea
            style={{
              "--color": "#727272",
              "--placeholder-color": "#727272",
              "--font-size": "3vw",
            }}
            placeholder="请输入举办方"
            rows={1}
            autoSize={{ minRows: 1, maxRows: 2 }}
            className={styles.author_input}
          />
        </div>
        <div className={styles.cut_line}>简介</div>
        <TextArea
          placeholder="请输入活动简介"
          style={{
            "--color": "#727272",
            "--placeholder-color": "#727272",
            "--font-size": "4vw",
          }}
          autoSize={{ minRows: 4, maxRows: 15 }}
          className={styles.intro_input}
        />
      </div>
    </div>
  );
};

export default NewAct;
