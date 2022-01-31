import React from "react";
import HeadBar from "../../components/shared/head-bar";
import styles from "./index.module.scss"

const Login: React.FC = () => {
  return(
    <div className={styles.background}>
      <HeadBar/>
    </div>
  )

}

export default Login;