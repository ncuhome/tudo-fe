import React from "react";
import styles from "./index.module.scss";
import { IActCardProps } from "@/interface";
import { useFormat } from "@/hooks/useFormat";

const ActCard: React.FC<IActCardProps> = (props: IActCardProps) => {
  return (
    <div className={styles.cardBox}>
      <div className={styles.cardDate}>
        <div
          style={{
            marginBottom: "10px",
            width: "100%",
            textAlign: "center",
            fontWeight: "bold",
            color: "#fff",
            whiteSpace: "nowrap",
          }}
        >
          周四
        </div>
        <div
          style={{
            width: "100%",
            textAlign: "center",
            fontWeight: "bold",
            color: "rgb(12,167,170)",
          }}
        >
          7/8
        </div>
      </div>
      <div className={styles.cardInfo}>
        <div className={styles.cardInfo_name}>{props.title}</div>
        <div className={styles.cardInfo_date}>
          <img src={"/img/calender.svg"} />
          <span>{`${useFormat(props.start_time)} - ${useFormat(
            props.end_time
          )}`}</span>
        </div>
      </div>
    </div>
  );
};
export default ActCard;
