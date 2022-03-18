import React from "react";
import { Skeleton } from "antd-mobile";
import styles from "./index.module.scss";

const styleSheet = {
  "--width": "100%",
  "--height": "30vw",
  "--border-radius": "8px",
};

export const IntroSkeleton: React.FC = () => {
  return (
    <div className={styles.skeleton_wrapper}>
      <Skeleton style={styleSheet} animated />
    </div>
  );
};
