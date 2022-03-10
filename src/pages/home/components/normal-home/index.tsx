import React, { useRef, useState, useEffect } from "react";
import anime from "animejs";
import AOS from "aos";
import { Link } from "react-router-dom";
import HeadBar from "@/components/shared/head-bar";
import ActCard from "@/components/shared/activity-card";
import styles from "./index.module.scss";
import { checkToken } from "@/network/api/check-token";
import "aos/dist/aos.css";
import { useActsState } from "@/store/useActsState";
import { IActlistProps, IActsListAct } from "@/interface";

const ActList: React.FC<IActlistProps> = (props: IActlistProps) => {
  useEffect(() => {
    AOS.init();
  });

  return (
    <>
      {props.actsList.map((item: IActsListAct) => {
        return (
          <div key={item.id} data-aos="fade-up">
            <Link style={{ color: "unset" }} to="/act-detail">
              <ActCard
                date={item.start_time}
                start_time={item.start_time}
                end_time={item.EndTime}
                title={item.title}
              />
            </Link>
          </div>
        );
      })}
      {/* <div data-aos="fade-up">
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
      </div> */}
    </>
  );
};

const NormalHomePage: React.FC = (props) => {
  const { ActsList, fetchRecommendList } = useActsState();

  useEffect(() => {
    try {
      fetchRecommendList();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const userRole: string | null = localStorage.getItem("user-role");
  const animateTargetRef = useRef<any>();
  const [onChose, setOnChose] = useState(true);
  const [tab, setTab] = useState("ing"); //ing表示当前选中正在进行标签

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
      translateX: "19vw",
      easing: "easeOutQuint",
      targets: animateTargetRef.current,
    }).play;
  };

  return (
    <div className={styles.background}>
      <HeadBar profileDisplay={true} switchModalRole={userRole} />
      <div className={styles.act_tab}>
        {onChose ? (
          <>
            <span style={{ fontWeight: "bold" }}>推荐活动</span>
            <span
              onClick={() => {
                setOnChose(false);
              }}
            >
              所有活动
            </span>
          </>
        ) : (
          <>
            <span onClick={() => setOnChose(true)}>推荐活动</span>
            <span style={{ fontWeight: "bold" }}>所有活动</span>
          </>
        )}
      </div>
      <div>
        {onChose ? null : (
          <div className={styles.tab_div}>
            <div className={styles.process_tab}>
              <div ref={animateTargetRef} className={styles.process_button} />
              <div
                className={styles.tab_text_left}
                onClick={() => {
                  ClickIngActHandler();
                }}
              >
                正在进行
              </div>
              <div
                className={styles.tab_text_right}
                onClick={() => {
                  ClickComingActHandler();
                }}
              >
                即将进行
              </div>
            </div>
            <Link to="/history-act">
              <span style={{ marginRight: "20px", fontSize: "4vw" }}>
                历史活动
              </span>
            </Link>
          </div>
        )}
      </div>
      <ActList actsList={ActsList} />
    </div>
  );
};

export default NormalHomePage;
