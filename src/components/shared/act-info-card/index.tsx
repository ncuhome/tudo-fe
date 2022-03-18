import React, { useState, useCallback } from "react";
import { TextArea, DatePicker } from "antd-mobile";
import { useForm, Controller } from "react-hook-form";
import getTime from "date-fns/getTime";
import styles from "./index.module.scss";
import { useActDetailState } from "@/store/useActDetailState";
import { IModifyCardProps } from "@/interface";
import { useFormat } from "@/hooks/useFormat";
import { useOnEdit } from "@/store/useOnEdit";
import { useFormatToDate } from "@/hooks/useFormatToDate";

const now = new Date();

export const ModifyInfoCard: React.FC<IModifyCardProps> = (
  props: IModifyCardProps
) => {
  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [isFirstLoad1, setIsFirstLoad1] = useState(true);
  const [isFirstLoad2, setIsFirstLoad2] = useState(true);
  const { control, handleSubmit } = useForm();
  const {
    actName,
    actLocation,
    startTime,
    endTime,
    setActBasicInfo,
    setActStartTime,
    setActEndTime,
  } = useActDetailState();

  const labelRenderer = useCallback((type: string, data: number) => {
    switch (type) {
      case "year":
        return data + "年";
      case "month":
        return data + "月";
      case "day":
        return data + "日";
      case "hour":
        return data + "时";
      case "minute":
        return data + "分";
      default:
        return data;
    }
  }, []);

  const onSubmit = (data: any) => {
    console.log(data);
    setActBasicInfo(data);
  };

  return (
    <div onBlur={handleSubmit(onSubmit)} className={styles.card_text_div}>
      <div className={styles.card_text_title}>
        <Controller
          render={({ field }) => (
            <TextArea
              {...field}
              style={{
                "--color": "#727272",
                "--placeholder-color": "#727272",
                "--font-size": "3vw",
              }}
              placeholder="请输入活动名"
              rows={1}
              autoSize={{ minRows: 1, maxRows: 2 }}
              className={styles.title_input}
            />
          )}
          name="actName"
          control={control}
          defaultValue={props.isForNew ? "" : actName}
        />
      </div>
      <div className={styles.card_text_info}>
        <div style={{ marginBottom: "5vw" }} className={styles.info_detail}>
          <img
            style={{ width: "4vw", marginRight: "3vw" }}
            src={"/img/location.svg"}
          />
          <Controller
            render={({ field }) => (
              <TextArea
                {...field}
                style={{
                  "--color": "#727272",
                  "--placeholder-color": "#727272",
                  "--font-size": "3vw",
                }}
                placeholder="请输入活动地址"
                rows={1}
                autoSize={{ minRows: 1, maxRows: 2 }}
                className={styles.location_input}
              />
            )}
            name="actLocation"
            control={control}
            defaultValue={props.isForNew ? "" : actLocation}
          />
        </div>
        <div className={styles.info_detail}>
          <img
            style={{ width: "4vw", marginRight: "3vw" }}
            src={"/img/calender.svg"}
          />
          <div>
            <span
              onClick={() => {
                setVisible1(true);
              }}
            >
              {props.isForNew
                ? isFirstLoad1
                  ? "输入开始时间"
                  : useFormat(startTime)
                : useFormat(startTime)}
            </span>
            <DatePicker
              visible={visible1}
              onClose={() => {
                setVisible1(false);
              }}
              precision="minute"
              onConfirm={(val: Date) => {
                setIsFirstLoad1(false);
                setActStartTime(getTime(val));
              }}
              renderLabel={labelRenderer}
              defaultValue={props.isForNew ? now : useFormatToDate(startTime)}
            />
            <span
              onClick={() => {
                setVisible2(true);
              }}
            >
              {props.isForNew
                ? isFirstLoad2
                  ? "输入结束时间"
                  : useFormat(endTime)
                : useFormat(endTime)}
            </span>
            <DatePicker
              visible={visible2}
              onClose={() => {
                setVisible2(false);
              }}
              precision="minute"
              onConfirm={(val: Date) => {
                setIsFirstLoad2(false);
                setActEndTime(getTime(val));
              }}
              renderLabel={labelRenderer}
              defaultValue={props.isForNew ? now : useFormatToDate(endTime)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const NormalInfoCard: React.FC = () => {
  const { actName, actLocation, startTime, endTime } = useActDetailState();

  return (
    <div className={styles.card_text_div}>
      <div className={styles.card_text_title}>
        <span>{actName}</span>
      </div>
      <div className={styles.card_text_info}>
        <div style={{ marginBottom: "5vw" }} className={styles.info_detail}>
          <img
            style={{ width: "4vw", marginRight: "3vw" }}
            src={"/img/location.svg"}
          />
          <span style={{ fontSize: "3vw" }}>{actLocation}</span>
        </div>
        <div className={styles.info_detail}>
          <img
            style={{ width: "4vw", marginRight: "3vw" }}
            src={"/img/calender.svg"}
          />
          <span style={{ fontSize: "3vw" }}>{`${useFormat(
            startTime
          )} - ${useFormat(endTime)}`}</span>
        </div>
      </div>
    </div>
  );
};

const ActInfoCard: React.FC = () => {
  const { onEdit } = useOnEdit();
  return onEdit ? <ModifyInfoCard isForNew={false} /> : <NormalInfoCard />;
};

export default ActInfoCard;
