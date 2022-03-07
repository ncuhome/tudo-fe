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


export interface IuserInfo {
  username: string;
  password: string;
}