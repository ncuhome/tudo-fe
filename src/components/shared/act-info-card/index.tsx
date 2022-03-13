import React, { useState, useCallback } from "react";
import { TextArea, DatePicker } from "antd-mobile";
import { useForm, Controller } from "react-hook-form";
import { format } from "date-fns";
import getTime from "date-fns/getTime";
import styles from "./index.module.scss";
import { useActDetailState } from "@/store/useActDetailState";
import { IActBasicInfoData } from "@/interface";
interface ActInfoCardProps {
  isOnModify?: boolean;
}

const ModifyInfoCard: React.FC = () => {
  const [visible1, setVisible1] = useState(false);
  const [startTime, setStartTime] = useState("开始时间 -- -- --");
  const [visible2, setVisible2] = useState(false);
  const [endTime, setEndTime] = useState("结束时间 -- -- -- ");
  const { control, handleSubmit } = useForm();
  const { setActBasicInfo, setActStartTime, setActEndTime } =
    useActDetailState();

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
          defaultValue=""
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
            defaultValue=""
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
              {startTime}
            </span>
            <DatePicker
              visible={visible1}
              onClose={() => {
                setVisible1(false);
              }}
              precision="minute"
              onConfirm={(val: Date) => {
                setStartTime(format(val, "yyyy M月d日 k:mm"));
                setActStartTime(getTime(val));
              }}
              renderLabel={labelRenderer}
            />
            <span
              onClick={() => {
                setVisible2(true);
              }}
            >
              {endTime}
            </span>
            <DatePicker
              visible={visible2}
              onClose={() => {
                setVisible2(false);
              }}
              precision="minute"
              onConfirm={(val: Date) => {
                setEndTime(format(val, "yyyy M月d日 k:mm"));
                setActEndTime(getTime(val));
              }}
              renderLabel={labelRenderer}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const NormalInfoCard: React.FC = () => {
  return (
    <div className={styles.card_text_div}>
      <div className={styles.card_text_title}>
        <span>
          南昌大学百年医学教育“医教协同创新发展”高峰论坛（医学研究分论坛）
        </span>
      </div>
      <div className={styles.card_text_info}>
        <div style={{ marginBottom: "5vw" }} className={styles.info_detail}>
          <img
            style={{ width: "4vw", marginRight: "3vw" }}
            src={"/img/location.svg"}
          />
          <span style={{ fontSize: "3vw" }}>南昌大学玛丽女王学院报告厅</span>
        </div>
        <div className={styles.info_detail}>
          <img
            style={{ width: "4vw", marginRight: "3vw" }}
            src={"/img/calender.svg"}
          />
          <span style={{ fontSize: "3vw" }}>7/8 16:00 - 7/8 19:00</span>
        </div>
      </div>
    </div>
  );
};

const ActInfoCard: React.FC<ActInfoCardProps> = (props: ActInfoCardProps) => {
  return props.isOnModify ? <ModifyInfoCard /> : <NormalInfoCard />;
};

export default ActInfoCard;
