import React, { useRef, useState } from "react";
// import useStyles from "./css";
import HeadBar from "../../components/shared/head-bar";
// import Calendar from "../../components/shared/calendar/calendar";
import ActCard from "../../components/shared/activity-card";
import styles from "./index.module.scss";

const HomePage: React.FC = () => {
  // const classes = useStyles
  const tabText = useRef(null);
  const [onChose, setOnChose] = useState(true);
  return (
    <div className={styles.background}>
      <HeadBar />
      {/* <Calendar month={"august"} day={"07"} /> */}
      {/* <Calendar month={"april"} day={"11"} /> */}
      <div className={styles.act_tab}>
        {onChose ? (
          <>
            <span style={{ marginRight: "20px", fontWeight: "bold" }}>
              推荐活动
            </span>
            <span
              style={{ marginRight: "20px" }}
              onClick={() => setOnChose(false)}
            >
              所有活动
            </span>
          </>
        ) : (
          <>
            <span
              style={{ marginRight: "20px" }}
              onClick={() => setOnChose(true)}
            >
              推荐活动
            </span>
            <span style={{ marginRight: "20px", fontWeight: "bold" }}>
              所有活动
            </span>
          </>
        )}
      </div>
      <ActCard />
    </div>
  );
};

export default HomePage;
