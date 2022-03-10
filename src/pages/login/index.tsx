import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { ILoginRes, IuserInfo } from "@/interface";
// import { useUserRole } from "@/store/user-role";
import { login } from "@/network/api/login";
import HeadBar from "../../components/shared/head-bar";
import styles from "./index.module.scss";

const Login: React.FC = () => {
  // const { addRole } = useUserRole();rea
  let titleText
  if(!localStorage.getItem("user-role")){
    titleText = "使用前请登录云家园账号"
  }else{
    titleText = "登录云家园账户或组织账号"
  }

  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<IuserInfo>();
  const onSubmit: SubmitHandler<IuserInfo> = async (data) => {
    const role: string = await login(data);
    localStorage.setItem("user-role", role);
    navigate("/", { replace: true });
    console.log("fc " + role);
  };

  return (
    <div className={styles.background}>
      <HeadBar />
      <form onSubmit={handleSubmit(onSubmit)} className={styles.loginForm}>
        <div style={{ fontSize: "6.4vw" }}>{titleText}</div>
        <div style={{ marginTop: "10vh" }} className={styles.inputWrapper}>
          <input
            type={"username"}
            {...register("username")}
            className={styles.input}
          ></input>
          <label className={styles.inputLabel}>
            <span>用户名</span>
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
          <input
            type={"submit"}
            value="登录"
            className={styles.loginButton}
          ></input>
        </div>
      </form>
    </div>
  );
};

export default Login;
