import HomePage from "@/pages/home";
import ActDetail from "@/pages/actdetail";
import HistoryAct from "@/pages/end-act";
import Login from "@/pages/login";

export const publicRoutes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/act-detail",
    component: ActDetail,
  },
  {
    path: "/history-act",
    component: HistoryAct,
  },
  {
    path: "/login",
    component: Login
  },
];
