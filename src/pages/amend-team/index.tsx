import React from "react";
import { Link } from "react-router-dom";
import HeadBar from "@/components/shared/head-bar";
import styles from "./index.module.scss";

const AmendTeam: React.FC = () => {
  return (
    <div className={styles.background}>
      <HeadBar />
      <div className={styles.team_info_card}>
        <div className={styles.team_text}>
          <div>家园工作室</div>
          <div>请设定密码以为该组织激活</div>
        </div>
        <div className={styles.team_info_form}>
          <div className={styles.logo_form}>
            <span>logo</span>
            <div></div>
            <img src={"/public/img/img.svg"} />
          </div>
          <div className={styles.password_form}>
            <span>密码</span>
            <div></div>
            <input type={"password"} />
          </div>
          <div className={styles.form_btn}>
            <Link to="/my-manage">
              <div>取消</div>
            </Link>
            <div>确定</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AmendTeam;
