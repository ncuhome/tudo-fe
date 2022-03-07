import create, { State } from "zustand";

interface Token extends State {
  token: string;
  setToken: (token: Token["token"]) => void
}

export const useTokenState = create<Token>(set => ({
  token: "",
  setToken: (token) => set({token})
}))