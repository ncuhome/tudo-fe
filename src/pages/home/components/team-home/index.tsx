import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import anime from "animejs";
import AOS from "aos";
import HeadBar from "../../../../components/shared/head-bar";
import ActCard from "../../../../components/shared/activity-card";
import styles from "./index.module.scss";
import "aos/dist/aos.css";
import { useUserRole } from "@/store/user-role";

const ActList: React.FC = () => {
  useEffect(() => {
    AOS.init();
  });

  return (
    <>
      <div data-aos="fade-up">
        <Link style={{ color: "unset" }} to="/act-detail">
          <ActCard />
        </Link>
      </div>
      <div data-aos="fade-up">
        <Link style={{ color: "unset" }} to="/act-detail">
          <ActCard />
        </Link>
      </div>
      <div data-aos="fade-up">
        <Link style={{ color: "unset" }} to="/act-detail">
          <ActCard />
        </Link>
      </div>
    </>
  );
};

const TeamHome: React.FC = () => {
  const userRole: string | null = localStorage.getItem("user-role");
  const animateTargetRef = useRef<any>();
  const [tab, setTab] = useState("ing"); //ing表示当前选中即将进行标签

  const ClickIngActHandler = () => {
    if (tab === "ing") {
      return;
    }
    setTab("ing");
    anime({
      duration: 500,
      translateX: "0",
      easing: "easeOutQuint",
      targets: animateTargetRef.current,
    }).play;
  };

  const ClickComingActHandler = () => {
    if (tab === "coming") {
      return;
    }
    setTab("coming");
    anime({
      duration: 500,
      translateX: "44vw",
      easing: "easeOutQuint",
      targets: animateTargetRef.current,
    }).play;
  };

  return (
    <div className={styles.background}>
      <HeadBar profileDisplay={true} switchModalRole={userRole} />
      <div className={styles.tab_wrapper}>
        <div className={styles.process_tab}>
          <div ref={animateTargetRef} className={styles.process_button} />
          <div
            className={styles.tab_text_left}
            onClick={() => {
              ClickIngActHandler();
            }}
          >
            即将进行
          </div>
          <div
            className={styles.tab_text_right}
            onClick={() => {
              ClickComingActHandler();
            }}
          >
            历史
          </div>
        </div>
      </div>
      <ActList />
    </div>
  );
};

export default TeamHome;
