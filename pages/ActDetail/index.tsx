import React from "react";
import HeadBar from "../../components/shared/head-bar";
import styles from "./index.module.scss";

const ActDetail: React.FC = () => {
  return (
    <div className={styles.background}>
      <HeadBar />
      <div className={styles.card_text_div}>
        <div className={styles.card_text_title}>
          南昌大学百年医学教育"南昌大学百年医学教育"南昌大学百年医学教育
        </div>
        <div className={styles.card_text_info}>
          <div style={{ marginBottom: "10px" }} className={styles.info_detail}>
            <img
              style={{ width: "15px", marginRight: "10px" }}
              src={"/location.svg"}
            />
            <span style={{ fontSize: "5px", color: "#707070" }}>
              南昌大学玛丽女王学院报告厅
            </span>
          </div>
          <div style={{ paddingBottom: "20px" }} className={styles.info_detail}>
            <img
              style={{ width: "15px", marginRight: "10px" }}
              src={"/img/calender.svg"}
            />
            <span style={{ fontSize: "5px", color: "#707070" }}>
              7/8 16:00 - 7/8 19:00
            </span>
          </div>
        </div>
      </div>
      <div className={styles.cut_line}>
        发布者
      </div>
      <div className={styles.author}>
        <span>玛丽女王学院</span>
      </div>
      <div className={styles.cut_line}>
        简介
      </div>
    </div>
  );
};

export default ActDetail;
