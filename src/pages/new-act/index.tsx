import React, { useEffect } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { TextArea, Dialog } from "antd-mobile";
import HeadBar from "../../components/shared/head-bar";
import styles from "./index.module.scss";
import { setNewAct } from "@/network/api/handle-act";
import { ModifyInfoCard } from "@/components/shared/act-info-card";
import { useActDetailState } from "@/store/useActDetailState";
import { useUserState } from "@/store/useUserState";

const NewAct: React.FC = () => {
  const { handleSubmit, control } = useForm();
  const {
    actName,
    actLocation,
    startTime,
    endTime,
    content,
    setActContent,
    clearFullAct,
  } = useActDetailState();
  const { nickName } = useUserState();

  const onSubmit: SubmitHandler<any> = async (data) => {
    setActContent(data.content);
  };

  const publishNewAct = async () => {
    await setNewAct({
      content: content,
      end_time: endTime,
      place: actLocation,
      start_time: startTime,
      title: actName,
    });
  };

  useEffect(() => {
    clearFullAct();
  }, []);

  return (
    <div className={styles.background}>
      <HeadBar />

      <div className={styles.new_act_form}>
        <div className={styles.form_title}>
          <div>发布新活动</div>
          <span
            onClick={() =>
              Dialog.confirm({
                content: "确认发布该活动吗?",
                onConfirm: () => publishNewAct(),
              })
            }
          >
            发布
          </span>
        </div>
        <ModifyInfoCard isForNew={true} />
        <div className={styles.cut_line}>发布者</div>
        <div className={styles.author}>
          <img
            style={{ width: "4vw", marginRight: "3vw" }}
            src={"/img/author.svg"}
          />
          <span style={{ fontSize: "3vw" }}>{nickName}</span>
        </div>
        <div className={styles.cut_line}>简介</div>
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
      </div>
    </div>
  );
};

export default NewAct;
