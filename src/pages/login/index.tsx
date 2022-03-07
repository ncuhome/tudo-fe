import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { ILoginRes, IuserInfo } from "@/interface";
import { login } from "@/network/api/login";
import HeadBar from "../../components/shared/head-bar";
import styles from "./index.module.scss";

const Login: React.FC = () => {
  const { register, handleSubmit } = useForm<IuserInfo>();
  const onSubmit: SubmitHandler<IuserInfo> = (data) => login(data);

  return (
    <div className={styles.background}>
      <HeadBar />

      <form onSubmit={handleSubmit(onSubmit)} className={styles.loginForm}>
        <div style={{ fontSize: "6.4vw" }}>登陆组织账号</div>
        <div style={{ marginTop: "10vh" }} className={styles.inputWrapper}>
          <input
            type={"username"}
            {...register("username")}
            className={styles.input}
          ></input>
          <label className={styles.inputLabel}>
            <span>组织名</span>
          </label>
        </div>
        <div style={{ marginTop: "6vh" }} className={styles.inputWrapper}>
          <input
            type={"password"}
            {...register("password")}
            className={styles.input}
          ></input>
          <label className={styles.inputLabel}>
            <span>密码</span>
          </label>
        </div>
        <div className={styles.loginButtonWrapper}>
          {/* <Link style={{ color: "unset" }} to={"/admin-home"}> */}
          <input
            type={"submit"}
            value="登录"
            className={styles.loginButton}
          ></input>
          {/* </Link> */}
        </div>
      </form>
    </div>
  );
};

export default Login;
