export interface ItoastSth {
  (
    toastMode: "success" | "warning" | "error" | "info",
    toastText: string,
    toastSetting: object
  ): void;
}

export interface ILoginRes {
  code: number;
  data: {
    id: number;
    token: string;
    username: string;
  };
  message: string;
}

export interface IUserInfo {
  username: string;
  password: string;
}

export interface IGetUserInfoRes {
  avatar: string;
  digest: string;
  nickname: string;
  verification: string;
}

export interface IActs {
  content: string;
  end_time: string;
  place: string;
  start_time: string;
  title: string;
}

export interface IActsListAct extends IActs {
  digest: string;
  id: number;
  user_id: number;
  EndTime: string;
}

export interface IActlistProps {
  actsList: Array<IActsListAct>;
}

export interface IActCardProps {
  date: string;
  start_time: string;
  end_time: string;
  title: string;
}

export interface IModifyCardProps {
  isForNew: boolean;
}

export interface IActBasicInfoData {
  actName: string;
  actLocation: string;
}

export interface IActFullInfoData {
  actName: string;
  actLocation: string;
  startTime: string;
  endTime: string;
  author: string;
  content: string;
}

export interface IActDetail {
  id?: string;
  user_id?: string;
  nickname?: string;
  title: string;
  content: string;
  start_time: string;
  end_time: string;
  place: string;
}
