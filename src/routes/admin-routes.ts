import AmendTeam from "@/pages/amend-team";
import MyManage from "@/pages/my-manage";

export const adminRoutes = [
  {
    path: "/my-manage",
    component: MyManage,
    role: "admin",
  },
  {
    path: "/my-manage/amend-team",
    component: AmendTeam,
    role: "admin",
  },
];
