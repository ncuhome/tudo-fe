import React from "react";
import { Skeleton } from "antd-mobile";
import styles from "./index.module.scss";

const styleSheet = {
  "--width": "30%",
  "--height": "5vw",
  "--border-radius": "5px",
};

export const AuthorSkeleton: React.FC = () => {
  return (
    <div className={styles.skeleton_wrapper}>
      <Skeleton style={styleSheet} animated />
    </div>
  );
};
