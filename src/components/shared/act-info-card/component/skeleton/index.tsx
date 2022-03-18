import React from "react";
import { Skeleton } from "antd-mobile";
import styles from "./index.module.scss"

export const ActInfoCardSkeleton: React.FC = () => {
  return (
    <div className={styles.card_text_div}>
      <Skeleton.Title animated />
      <Skeleton.Paragraph lineCount={2} animated />
    </div>
  );
};
