import React from "react";
import { Link } from "react-router-dom";
import HeadBar from "@/components/shared/head-bar";
import styles from "./index.module.scss";

const MyManage: React.FC = () => {
  const isActivated: boolean = false;

  return (
    <div className={styles.background}>
      <HeadBar />
      <div className={styles.card_list}>
        {isActivated ? (
          <div className={styles.account_card_active}>
            <img src={"/img/img.svg"} />
            <span>家园工作室</span>
            <Link to="/my-manage/amend-team" replace>
              <span>编辑</span>
            </Link>
          </div>
        ) : (
          <div className={styles.account_card_inactive}>
            <img src={"/img/img.svg"} />
            <span>家园工作室</span>
            <Link to="/my-manage/amend-team" replace>
              <span>激活</span>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyManage;
