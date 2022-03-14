import React, { useEffect, useState } from "react";
import { TextArea } from "antd-mobile";
import ActInfoCard from "../../components/shared/act-info-card";
import HeadBar from "../../components/shared/head-bar";
import styles from "./index.module.scss";
import { useUserState } from "@/store/useUserState";
import { getActDetail } from "@/network/api/get-act-detail";
import { getUserInfo } from "@/network/api/get-user-info";

interface ActDetailProps {
  isOnModify?: boolean;
  detailData: string;
}

const getQuery = (key: string) => {
  const url = new URL(location.href);
  return url.searchParams.get(key);
};

const IntroModify: React.FC<ActDetailProps> = (props: ActDetailProps) => {
  return (
    <>
      {props.isOnModify ? (
        <TextArea
          placeholder="请输入活动简介"
          style={{
            "--color": "#727272",
            "--placeholder-color": "#727272",
            "--font-size": "4vw",
          }}
          autoSize={{ minRows: 4, maxRows: 15 }}
          className={styles.intro_input}
        />
      ) : (
        <div className={styles.intro_text}>
          {/* {`易庆 （77级校友） 美国休斯顿卫理公会癌症中心副主任，血液癌症转
        化研究中心主任和Ralph O'Connor Centennial讲席 教授，AAAS的Fellow和Sigma
        xi的荣誉成员。 卢华（78级校友)
        国际知名生物化学和分子生物学家，美国杜兰大学
        医学院聘为生物化学分子生物学终身教授，AAAS的 Fellow和Sigma
        Xi的荣誉成员。 饶毅（78级校友
        首都医科大学校长，北京大学讲席教授、北大麦戈
        文研究所创始所长、北京脑科学中心创始主任，加
        拿大Gairdner国际医学大奖医学委员会成员。
      `} */}
          {props.detailData}
        </div>
      )}
    </>
  );
};

const ActDetail: React.FC = () => {
  const [onEdit, setOnEdit] = useState(false);
  const [actDetail, setActDetail] = useState({
    content: "loading...",
    end_time: "loading...",
    nickname: "loading...",
    place: "loading...",
    start_time: "loading...",
    title: "loading...",
  });
  const { role, fetchUserInfo } = useUserState();
  const canModify = role === "team" ? true : false;

  const fetchActDetail: any = async (actId: string | null) => {
    const res: any = await getActDetail(actId);
    const { nickname } = await getUserInfo(res.user_id);
    res.nickname = nickname;
    setActDetail(res);
  };

  const actID = getQuery("id");

  useEffect(() => {
    fetchUserInfo();
    fetchActDetail(actID);
  }, [actID]);

  const cancelActHandler = () => {
    alert("!!!");
  };

  const finshEditHandler = () => {
    setOnEdit(false);
  };

  return (
    <div className={styles.background}>
      <HeadBar />
      {canModify ? (
        <div className={styles.edit_bar}>
          {onEdit ? (
            <>
              <span style={{ color: "red" }} onClick={() => cancelActHandler()}>
                取消活动
              </span>
              <span
                style={{ color: "#4CA8F3", marginLeft: "3vw" }}
                onClick={() => finshEditHandler()}
              >
                完成
              </span>
            </>
          ) : (
            <span style={{ color: "#4CA8F3" }} onClick={() => setOnEdit(true)}>
              编辑活动
            </span>
          )}
        </div>
      ) : null}
      <ActInfoCard ActDetail={actDetail} isOnModify={onEdit} />
      <div className={styles.cut_line}>发布者</div>
      <div className={styles.author}>
        <img
          style={{ width: "4vw", marginRight: "3vw" }}
          src={"/img/author.svg"}
        />
        <span style={{ fontSize: "3vw" }}>{actDetail.nickname}</span>
      </div>
      <div className={styles.cut_line}>简介</div>
      {actDetail ? (
        <IntroModify detailData={actDetail.content} isOnModify={onEdit} />
      ) : (
        <></>
      )}
    </div>
  );
};

export default ActDetail;
