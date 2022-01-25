import React, { useRef, useState } from "react";
import HeadBar from "../../components/shared/head-bar";
import ActCard from "../../components/shared/activity-card";
import styles from "./index.module.scss";
import Link from "next/link";

const ActList: React.FC = () => {
  return (
    <Link href="/actdetail">
      <a>
        <ActCard />
      </a>
    </Link>
  );
};

const HomePage: React.FC = () => {
  const tabText = useRef(null);
  const [onChose, setOnChose] = useState(true);
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
      <div>
        {onChose ? null : (
          <>
            <div className={styles.process_tab}>
              <div className={styles.process_button}></div>
              <div className={styles.tab_text_left}>正在进行</div>
              <div className={styles.tab_text_right}>即将进行</div>
            </div>
          </>
        )}
      </div>
      <ActList />
    </div>
  );
};

export default HomePage;
