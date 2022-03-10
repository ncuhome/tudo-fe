import NewAct from "@/pages/new-act";
import TeamHome from "@/pages/home/components/team-home";

export const teamRoutes = [
  {
    path: "/team-home",
    component: TeamHome,
    role: "team",
  },
  {
    path: "/team-home/new-act",
    component: NewAct,
    role: "team",
  },
];
