import React, { useEffect, useState } from "react";
import { TextArea } from "antd-mobile";
import create from "zustand";
import { combine } from "zustand/middleware";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import ActInfoCard from "../../components/shared/act-info-card";
import HeadBar from "../../components/shared/head-bar";
import styles from "./index.module.scss";
import { useUserState } from "@/store/useUserState";
import { getActDetail } from "@/network/api/get-act-detail";
import { getUserInfo } from "@/network/api/get-user-info";
import { useActDetailState } from "@/store/useActDetailState";
import { IActDetail } from "@/interface";

interface ActDetailProps {
  isOnModify?: boolean;
  detailData: string;
}

const getQuery = (key: string) => {
  const url = new URL(location.href);
  return url.searchParams.get(key);
};

const useOnEdit = create(
  combine(
    {
      onEdit: false,
    },
    (set) => ({
      setOnEdit: (newState: boolean) => {
        set({ onEdit: newState });
      },
    })
  )
);

const ActDetail: React.FC = () => {
  const { onEdit } = useOnEdit();
  const {
    actName,
    actLocation,
    startTime,
    endTime,
    author,
    content,
    setActAfterFetch,
  } = useActDetailState();
  const { role, fetchUserInfo } = useUserState();
  const actID = getQuery("id");
  const canModify = role === "team" ? true : false;

  const fetchActDetail: any = async (actId: string | null) => {
    const res: any = await getActDetail(actId);
    const resData = res as IActDetail;
    const { nickname } = await getUserInfo(res.user_id);
    resData.nickname = nickname;

    setActAfterFetch({
      actName: resData.title,
      actLocation: resData.place,
      startTime: resData.start_time,
      endTime: resData.end_time,
      author: resData.nickname,
      content: resData.content,
    });
  };

  useEffect(() => {
    fetchUserInfo();
    fetchActDetail(actID);
  }, [actID]);

  return (
    <div className={styles.background}>
      <HeadBar />
      {canModify ? <EditBar /> : null}
      <ActInfoCard
        ActDetail={{
          title: actName,
          start_time: startTime,
          end_time: endTime,
          place: actLocation,
          content: "",
        }}
        isOnModify={onEdit}
      />
      <div className={styles.cut_line}>发布者</div>
      <div className={styles.author}>
        <img
          style={{ width: "4vw", marginRight: "3vw" }}
          src={"/img/author.svg"}
        />
        <span style={{ fontSize: "3vw" }}>{author}</span>
      </div>
      <div className={styles.cut_line}>简介</div>
      {content ? (
        <IntroModify detailData={content} isOnModify={onEdit} />
      ) : (
        <></>
      )}
    </div>
  );
};

const IntroModify: React.FC<ActDetailProps> = (props: ActDetailProps) => {
  const { setActContent } = useActDetailState();
  const { control, handleSubmit } = useForm();
  const onSubmit: SubmitHandler<any> = async (data) => {
    setActContent(data.content);
    console.log(data.content);
  };
  return (
    <>
      {props.isOnModify ? (
        <form onBlur={handleSubmit(onSubmit)}>
          <Controller
            render={({ field }) => (
              <TextArea
                {...field}
                placeholder="请输入活动简介"
                style={{
                  "--color": "#727272",
                  "--placeholder-color": "#727272",
                  "--font-size": "4vw",
                }}
                autoSize={{ minRows: 4, maxRows: 15 }}
                className={styles.intro_input}
              />
            )}
            name="content"
            control={control}
            defaultValue=""
          />
        </form>
      ) : (
        <div className={styles.intro_text}>{props.detailData}</div>
      )}
    </>
  );
};

const EditBar: React.FC = () => {
  const { onEdit, setOnEdit } = useOnEdit();
  const cancelActHandler = () => {
    alert("!!!");
  };

  const finshEditHandler = () => {
    setOnEdit(false);
  };

  return (
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
  );
};

export default ActDetail;
