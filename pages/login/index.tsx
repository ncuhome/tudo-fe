import React from "react";
import HeadBar from "../../components/shared/head-bar";
import styles from "./index.module.scss";

const Login: React.FC = () => {
  return (
    <div className={styles.background}>
      <HeadBar />
      <div className={styles.loginForm}>
        <div style={{ fontSize: "6.4vw" }}>登陆组织账号</div>
        <div style={{ marginTop: "10vh" }} className={styles.inputDiv}>
          <input type={"username"} className={styles.input}></input>
          <label className={styles.inputLabel}>
            <span>组织名</span>
          </label>
        </div>
        <div style={{ marginTop: "6vh" }} className={styles.inputDiv}>
          <input type={"password"} className={styles.input}></input>
          <label className={styles.inputLabel}>
            <span>密码</span>
          </label>
        </div>
        <div className={styles.loginButtonDiv}>
          <div className={styles.loginButton}>
            登录
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
