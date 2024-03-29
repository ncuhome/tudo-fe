import React, { useRef, useState, useEffect } from "react";
import { DotLoading } from "antd-mobile";
import anime from "animejs";
import { useUserState } from "@/store/useUserState";
import HeadBar from "../../../../components/shared/head-bar";
import ActList from "@/components/shared/act-list";
import styles from "./index.module.scss";
import "aos/dist/aos.css";
import { useActsState } from "@/store/useActsState";

const TeamHome: React.FC = () => {
  const userRole: string | null = localStorage.getItem("user-role");
  const {
    ActsList,
    isActsLoading,
    fetchListForTeam,
    fetchEndedList,
    clearActList,
  } = useActsState();
  const { nickName, fetchUserInfo } = useUserState();
  const animateTargetRef = useRef<any>();
  const [tab, setTab] = useState("ing"); //ing表示当前选中即将进行标签

  useEffect(() => {
    clearActList();
    fetchListForTeam();
    fetchUserInfo();
  }, []);

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
    clearActList()
    fetchListForTeam();
  };

  const ClickPastActHandler = () => {
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
    clearActList()
    fetchEndedList();
  };

  return (
    <div className={styles.background}>
      <HeadBar
        profileDisplay={true}
        switchModalRole={userRole}
        nickName={nickName}
      />
      <div className={styles.tab_wrapper}>
        <div className={styles.process_tab}>
          <div ref={animateTargetRef} className={styles.process_button} />
          <div
            className={styles.tab_text_left}
            onClick={() => {
              ClickIngActHandler();
            }}
          >
            待举办
          </div>
          <div
            className={styles.tab_text_right}
            onClick={() => {
              ClickPastActHandler();
            }}
          >
            已举办
          </div>
        </div>
      </div>
      {isActsLoading ? (
        <div className={styles.loader_wrapper}>
          <DotLoading color={"#6ba7ac"} />
        </div>
      ) : (
        <ActList actsList={ActsList} />
      )}
    </div>
  );
};

export default TeamHome;
