import React, { useRef, useState, useEffect } from "react";
import anime from "animejs";
import AOS from "aos";
import Link from "next/link";
import { atom, useRecoilState } from "recoil";
import HeadBar from "../../components/shared/head-bar";
import ActCard from "../../components/shared/activity-card";
import styles from "./index.module.scss";
import "aos/dist/aos.css";

const ActList: React.FC = () => {
  useEffect(() => {
    AOS.init();
  });

  return (
    <>
      <div data-aos="fade-up">
        <Link href="/actdetail">
          <a>
            <ActCard />
          </a>
        </Link>
      </div>
      <div data-aos="fade-up">
        <Link href="/actdetail">
          <a>
            <ActCard />
          </a>
        </Link>
      </div>
      <div data-aos="fade-up">
        <Link href="/actdetail">
          <a>
            <ActCard />
          </a>
        </Link>
      </div>
    </>
  );
};

const HomePage: React.FC = () => {
  const animateTargetRef = useRef<any>();
  // const [onChose, setOnChose] = useRecoilState(choseState);
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
      <HeadBar />
      <div className={styles.act_tab}>
        {onChose ? (
          <>
            <span style={{ marginRight: "20px", fontWeight: "bold" }}>
              推荐活动
            </span>
            <span
              style={{ marginRight: "20px" }}
              onClick={() => {
                setOnChose(false);
              }}
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
            <Link href="/usedact">
              <a style={{ marginRight: "20px", fontSize: "14px" }}>历史活动</a>
            </Link>
          </div>
        )}
      </div>
      <ActList />
    </div>
  );
};

export default HomePage;
