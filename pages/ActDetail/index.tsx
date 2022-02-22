import React from "react";
import ActInfoCard from "../../components/shared/act-info-card";
import HeadBar from "../../components/shared/head-bar";
import styles from "./index.module.scss";

const ActDetail: React.FC = () => {
  return (
    <div className={styles.background}>
      <HeadBar />
      <ActInfoCard isOnModify={true} />
      <div className={styles.cut_line}>发布者</div>
      <div className={styles.author}>
        <img
          style={{ width: "15px", marginRight: "10px" }}
          src={"/img/author.svg"}
        />
        <span style={{ fontSize: "5px" }}>玛丽女王学院</span>
      </div>
      <div className={styles.cut_line}>简介</div>
      <div className={styles.intro_text}>
        <p>
          易庆 （77级校友） 美国休斯顿卫理公会癌症中心副主任，血液癌症转
        化研究中心主任和Ralph O'Connor Centennial讲席 教授，AAAS的Fellow和Sigma
        xi的荣誉成员。 卢华（78级校友)
        国际知名生物化学和分子生物学家，美国杜兰大学
        医学院聘为生物化学分子生物学终身教授，AAAS的 Fellow和Sigma
        Xi的荣誉成员。 饶毅（78级校友
        首都医科大学校长，北京大学讲席教授、北大麦戈
        文研究所创始所长、北京脑科学中心创始主任，加
        拿大Gairdner国际医学大奖医学委员会成员。
        </p>
      </div>
    </div>
  );
};

export default ActDetail;
