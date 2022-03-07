export interface ILoginRes {
  code: number;
  data: {
    id: number;
    token: string;
    username: string;
  };
  message: string;
}
