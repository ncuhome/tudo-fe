import { useRouter } from "next/router";
import React from "react";
import styles from "./index.module.scss";

interface HeadBarProps {
  children?: React.ReactNode;
}

const HeadBar: React.FC = (props: HeadBarProps) => {
  // const styles = useStyles
  const history = useRouter();

  const backHandler = () => {
    history.back();
  };

  return (
    <div className={styles.bar}>
      <div className={styles.barFront}>
        <img src={"/back_arrow.svg"} onClick={backHandler} alt="back" />
        <img src={"/exit.svg"} alt="exit" />
      </div>
      {/* <div className={styles.barPadding}></div>
      <div className={styles.barBack}>{props.children}</div> */}
        <img className={styles.profile} src={"/img/profile.png"} />
    </div>
  );
};

export default HeadBar;
