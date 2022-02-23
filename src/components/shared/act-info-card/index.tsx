import React, { useState } from "react";
import { DatePicker, Toast } from "antd-mobile";
import styles from "./index.module.scss";

interface ActInfoCardProps {
  isOnModify?: boolean;
}

const ActInfoCard: React.FC<ActInfoCardProps> = (props: ActInfoCardProps) => {
  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);

  return (
    <div className={styles.card_text_div}>
      <div className={styles.card_text_title}>
        {props.isOnModify ? (
          <textarea
            className={styles.title_input}
            defaultValue={`南昌大学百年医学教育“医教协同创新发展”高峰论坛（医学研究分论坛）`}
          ></textarea>
        ) : (
          <span>
            南昌大学百年医学教育“医教协同创新发展”高峰论坛（医学研究分论坛）
          </span>
        )}
      </div>
      <div className={styles.card_text_info}>
        <div style={{ marginBottom: "5vw" }} className={styles.info_detail}>
          <img
            style={{ width: "4vw", marginRight: "3vw" }}
            src={"/img/location.svg"}
          />
          {props.isOnModify ? (
            <textarea
              className={styles.location_input}
              defaultValue={`南昌大学玛丽女王学院报告厅`}
            ></textarea>
          ) : (
            <span style={{ fontSize: "4vw", color: "#707070" }}>
              南昌大学玛丽女王学院报告厅
            </span>
          )}
        </div>
        <div style={{ paddingBottom: "20px" }} className={styles.info_detail}>
          <img
            style={{ width: "4vw", marginRight: "3vw" }}
            src={"/img/calender.svg"}
          />
          {props.isOnModify ? (
            <div>
              <span
                onClick={() => {
                  setVisible1(true);
                }}
              >
                开始时间 --- --{" "}
              </span>
              <DatePicker
                visible={visible1}
                onClose={() => {
                  setVisible1(false);
                }}
                precision="month"
                onConfirm={(val) => {
                  Toast.show(val.toString());
                }}
              />
              <span
                onClick={() => {
                  setVisible2(true);
                }}
              >
                结束时间 -- -- --
              </span>
              <DatePicker
                visible={visible2}
                onClose={() => {
                  setVisible2(false);
                }}
                precision="minute"
                onConfirm={(val) => {
                  Toast.show(val.toString());
                }}
              />
            </div>
          ) : (
            <span style={{ fontSize: "4vw", color: "#707070" }}>
              7/8 16:00 - 7/8 19:00
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ActInfoCard;
