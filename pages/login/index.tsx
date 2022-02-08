import React from "react";
import Link from "next/link";
import HeadBar from "../../components/shared/head-bar";
import styles from "./index.module.scss";

const Login: React.FC = () => {
  return (
    <div className={styles.background}>
      <HeadBar switchModalForSM={false} />
      <div className={styles.loginForm}>
        <div style={{ fontSize: "6.4vw" }}>登陆组织账号</div>
        <div style={{ marginTop: "10vh" }} className={styles.inputWrapper}>
          <input type={"username"} className={styles.input}></input>
          <label className={styles.inputLabel}>
            <span>组织名</span>
          </label>
        </div>
        <div style={{ marginTop: "6vh" }} className={styles.inputWrapper}>
          <input type={"password"} className={styles.input}></input>
          <label className={styles.inputLabel}>
            <span>密码</span>
          </label>
        </div>
        <div className={styles.loginButtonWrapper}>
          <Link href={"./admin-home"}>
            <div className={styles.loginButton}>登录</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
