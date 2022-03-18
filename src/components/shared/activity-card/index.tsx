import React from "react";
import styles from "./index.module.scss";
import { IActCardProps } from "@/interface";
import { useFormat } from "@/hooks/useFormat";
import { useFormatToDate } from "@/hooks/useFormatToDate";
import { getDate, getDay, getMonth } from "date-fns";
import { useCHNWeekDay } from "@/hooks/useCHNWeekDay";

const ActCard: React.FC<IActCardProps> = (props: IActCardProps) => {
  const getCHNDate = () => {
    const startTime = useFormatToDate(props.start_time) as Date;
    return useCHNWeekDay(getDay(startTime));
  };

  const getBriefDate = () => {
    const startTime = useFormatToDate(props.start_time) as Date;
    return (
      JSON.stringify(getMonth(startTime) + 1) +
      "/" +
      JSON.stringify(getDate(startTime))
    );
  };

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
          {getCHNDate()}
        </div>
        <div
          style={{
            width: "100%",
            textAlign: "center",
            fontWeight: "bold",
            color: "rgb(12,167,170)",
          }}
        >
          {getBriefDate()}
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
