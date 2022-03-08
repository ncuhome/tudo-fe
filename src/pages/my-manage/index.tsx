import React from "react";
import { Link } from "react-router-dom";
import HeadBar from "@/components/shared/head-bar";
import styles from "./index.module.scss";

const MyManage: React.FC = () => {
  const isActivate: boolean = true;

  return (
    <div className={styles.background}>
      <HeadBar />
      <div className={styles.card_list}>
        <div className={styles.account_card}>
          <img src={"/img/img.svg"} />
          <span>家园工作室</span>
          {/* <span>{isActivate ? "" }</span> */}
          <Link to="/my-manage/amend-team" replace>
            {isActivate ? <span>编辑</span> : <span>激活</span>}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MyManage;
