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

const AdminHome: React.FC = () => {
  const animateTargetRef = useRef<any>();
  // const [onChose, setOnChose] = useRecoilState(choseState);
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
      <HeadBar profileDisplay={true} switchModalForSM={false} />
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

export default AdminHome;
