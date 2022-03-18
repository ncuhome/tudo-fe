import React, { useEffect } from "react";
import { TextArea, Dialog } from "antd-mobile";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { useNavigate } from "react-router";
import ActInfoCard from "../../components/shared/act-info-card";
import HeadBar from "../../components/shared/head-bar";
import styles from "./index.module.scss";
import { useUserState } from "@/store/useUserState";
import { useOnEdit } from "@/store/useOnEdit";
import { getActDetail } from "@/network/api/get-act-detail";
import { getUserInfo } from "@/network/api/get-user-info";
import { useActDetailState } from "@/store/useActDetailState";
import { IActDetail } from "@/interface";
import { amendAct, deleteAct } from "@/network/api/handle-act";
import { AuthorSkeleton } from "./components/AuthorSkeleton";
import { IntroSkeleton } from "./components/IntroSkeleton";

const getQuery = (key: string) => {
  const url = new URL(location.href);
  return url.searchParams.get(key);
};

const IntroModify: React.FC = () => {
  const { onEdit } = useOnEdit();
  const { isLoading, content, setActContent } = useActDetailState();
  const { control, handleSubmit } = useForm();
  const onSubmit: SubmitHandler<any> = async (data) => {
    setActContent(data.content);
    console.log(data.content);
  };
  return (
    <>
      {onEdit ? (
        <div onBlur={handleSubmit(onSubmit)}>
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
            defaultValue={content}
          />
        </div>
      ) : isLoading ? (
        <IntroSkeleton />
      ) : (
        <div className={styles.intro_text}>{content}</div>
      )}
    </>
  );
};

const EditBar: React.FC = () => {
  const actID = getQuery("id");
  const navigate = useNavigate();
  const { onEdit, setOnEdit } = useOnEdit();
  const { actName, actLocation, startTime, endTime, content } =
    useActDetailState();

  const cancelActHandler = async () => {
    await deleteAct(actID as string);
    setOnEdit(false);
    navigate("/", { replace: true });
  };

  const finshEditHandler = async () => {
    try {
      await amendAct(
        {
          content: content,
          end_time: endTime,
          place: actLocation,
          start_time: startTime,
          title: actName,
        },
        actID as string
      );
      setOnEdit(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.edit_bar}>
      {onEdit ? (
        <>
          <span
            style={{ color: "red" }}
            onClick={() =>
              Dialog.confirm({
                content: "确认要取消这项活动吗? 取消后无法撤回",
                onConfirm: () => cancelActHandler(),
              })
            }
          >
            取消活动
          </span>
          <span
            style={{ color: "#4CA8F3", marginLeft: "3vw" }}
            onClick={() =>
              Dialog.confirm({
                content: "确认对该活动进行修改吗?",
                onConfirm: () => finshEditHandler(),
              })
            }
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

const ActDetail: React.FC = () => {
  const { setOnEdit } = useOnEdit();
  const { author, isLoading, setIsLoading, setFullAct } = useActDetailState();
  const { role, fetchUserInfo } = useUserState();
  const actID = getQuery("id");
  const canModify = role === "team" ? true : false;

  const fetchActDetail: any = async (actId: string | null) => {
    try {
      setIsLoading(true);
      const res: any = await getActDetail(actId);
      const resData = res as IActDetail;
      const { nickname } = await getUserInfo(res.user_id);
      resData.nickname = nickname;

      setFullAct({
        actName: resData.title,
        actLocation: resData.place,
        startTime: resData.start_time,
        endTime: resData.end_time,
        author: resData.nickname,
        content: resData.content,
      });
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchActDetail(actID);
    setOnEdit(false);
    fetchUserInfo();
  }, []);

  return (
    <div className={styles.background}>
      <HeadBar />
      {canModify ? <EditBar /> : null}
      <ActInfoCard />
      <div className={styles.cut_line}>发布者</div>
      {isLoading ? (
        <AuthorSkeleton />
      ) : (
        <div className={styles.author}>
          <img
            style={{ width: "4vw", marginRight: "3vw" }}
            src={"/img/author.svg"}
          />
          <span style={{ fontSize: "3vw" }}>{author}</span>
        </div>
      )}
      <div className={styles.cut_line}>简介</div>
      <IntroModify />
    </div>
  );
};

export default ActDetail;
