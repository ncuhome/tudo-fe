import React, { useState } from "react";
import { Link } from "react-router-dom";
import HeadBar from "@/components/shared/head-bar";
import styles from "./index.module.scss";
import { setOrgAccountInfo } from "@/network/api/set-account-info";

const getQuery = (key: string) => {
  const url = new URL(location.href);
  return url.searchParams.get(key);
};

const AmendTeam: React.FC = () => {
  const status = getQuery("status") as string;
  const teamName = getQuery("team")
  const activeStatus = JSON.parse(status);
  const [password, setPassword] = useState("");

  const sumitHandler = async () => {
    await setOrgAccountInfo(password);
  };

  return (
    <div className={styles.background}>
      <HeadBar />
      <div className={styles.team_info_card}>
        <div className={styles.team_text}>
          <div>{teamName}</div>
          {activeStatus ? null : <div>请设定密码以为该组织激活</div>}
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
            <input
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              type={"password"}
              placeholder={activeStatus ? "设置新密码" : ""}
            />
          </div>
          <div className={styles.form_btn}>
            <Link to="/my-manage" replace>
              <div>取消</div>
            </Link>
            <div onClick={() => sumitHandler()}>确定</div>
          </div>
        </div>
      </div>
      {activeStatus ? (
        <div className={styles.tips_word}>
          更改密码后，所有已登录者需重新登录
        </div>
      ) : null}
    </div>
  );
};

export default AmendTeam;
