import React, { useState } from "react";
import {
  Route,
  Routes,
  Navigate,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HomePage from "./pages/home";
import Login from "./pages/login";
import ActDetail from "./pages/actdetail";
import HistoryAct from "./pages/end-act";
import TeamHome from "./pages/team-home";
import NewAct from "./pages/new-act";
import MyManage from "./pages/my-manage";
import AmendTeam from "./pages/amend-team";
import { ItoastSth } from "./interface";
import "./App.css";

const App: React.FC = () => {
  return (
    <>
      <ToastContainer position="top-center" hideProgressBar={true} />
      <Routes>
        <Route
          path="/"
          element={
            <RequireAuth>
              <HomePage />
            </RequireAuth>
          }
        ></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/act-detail" element={<ActDetail />}></Route>
        <Route path="/history-act" element={<HistoryAct />}></Route>
        <Route path="/team-home" element={<TeamHome />}></Route>
        <Route path="/team-home/new-act" element={<NewAct />}></Route>
        <Route path="/my-manage" element={<MyManage />}></Route>
        <Route path="/my-manage/amend-team" element={<AmendTeam />}></Route>
      </Routes>
    </>
  );
};

const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const local_role = localStorage.getItem("user-role");
  let location = useLocation();

  if (!local_role) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};

export const toastSth: ItoastSth = (toastMode, toastText, toastSetting) => {
  switch (toastMode) {
    case "success":
      toast.success(toastText, toastSetting);
      break;
    case "warning":
      toast.warning(toastText, toastSetting);
      break;
    case "error":
      toast.error(toastText, toastSetting);
      break;
    case "info":
      toast.info(toastText, toastSetting);
      break;
    default:
      break;
  }
};

export default App;
