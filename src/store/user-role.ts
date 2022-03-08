import create, { State } from "zustand";

interface IRoleState extends State {
  role: string;
  addRole: (role: IRoleState["role"]) => void
}

export const useUserRole = create<IRoleState>((set) => ({
  role: "",
  addRole: (role) => set({role})
}));
