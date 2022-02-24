import React from "react";
import { TextArea } from "antd-mobile";
import ActInfoCard from "../../components/shared/act-info-card";
import HeadBar from "../../components/shared/head-bar";
import styles from "./index.module.scss";

interface ActDetailProps {
  isOnModify?: boolean;
}

const AuthorModify: React.FC<ActDetailProps> = (props: ActDetailProps) => {
  return (
    <>
      {props.isOnModify ? (
        // <input className={styles.author_input}></input>
        <TextArea
          style={{ "--placeholder-color": "#727272", "--font-size": "3vw" }}
          rows={1}
          autoSize={{ minRows: 1, maxRows: 2 }}
          className={styles.author_input}
        />
      ) : (
        <span style={{ fontSize: "4vw" }}>玛丽女王学院</span>
      )}
    </>
  );
};

const IntroModify: React.FC<ActDetailProps> = (props: ActDetailProps) => {
  return (
    <>
      {props.isOnModify ? (
        <TextArea
          style={{ "--placeholder-color": "#727272", "--font-size": "4vw" }}
          autoSize={{ minRows: 4, maxRows: 15 }}
          className={styles.intro_input}
        />
      ) : (
        <div className={styles.intro_text}>
          {`易庆 （77级校友） 美国休斯顿卫理公会癌症中心副主任，血液癌症转
        化研究中心主任和Ralph O'Connor Centennial讲席 教授，AAAS的Fellow和Sigma
        xi的荣誉成员。 卢华（78级校友)
        国际知名生物化学和分子生物学家，美国杜兰大学
        医学院聘为生物化学分子生物学终身教授，AAAS的 Fellow和Sigma
        Xi的荣誉成员。 饶毅（78级校友
        首都医科大学校长，北京大学讲席教授、北大麦戈
        文研究所创始所长、北京脑科学中心创始主任，加
        拿大Gairdner国际医学大奖医学委员会成员。
        `}
        </div>
      )}
    </>
  );
};

const ActDetail: React.FC<ActDetailProps> = (props: ActDetailProps) => {
  return (
    <div className={styles.background}>
      <HeadBar />
      <ActInfoCard isOnModify={true} />
      <div className={styles.cut_line}>发布者</div>
      <div className={styles.author}>
        <img
          style={{ width: "4vw", marginRight: "3vw" }}
          src={"/img/author.svg"}
        />
        <AuthorModify isOnModify={true} />
      </div>
      <div className={styles.cut_line}>简介</div>
      <IntroModify isOnModify={true} />
    </div>
  );
};

export default ActDetail;
