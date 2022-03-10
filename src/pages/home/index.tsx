import React, { useEffect } from "react";
import { checkToken } from "@/network/api/check-token";
import TeamHome from "./components/team-home";
import NormalHomePage from "./components/normal-home";

const HomePage: React.FC = () => {
  useEffect(() => {
    const freshToken = async () => {
      const role = await checkToken();
      localStorage.setItem("user-role", role);
    };
    freshToken();

    return;
  });
  const userRole: string | null = localStorage.getItem("user-role");
  return userRole === "team" ? <TeamHome /> : <NormalHomePage />;
};

export default HomePage;
