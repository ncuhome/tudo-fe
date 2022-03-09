import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import HomePage from "./pages/home";
// import Login from "./pages/login";
// import ActDetail from "./pages/actdetail";
// import HistoryAct from "./pages/end-act";
// import AdminHome from "./pages/admin-home";
// import NewAct from "./pages/new-act";
// import MyManage from "./pages/my-manage";
// import AmendTeam from "./pages/amend-team";
import Login from "./pages/login";
import { publicRoutes } from "./routes/public-routes";
import { adminRoutes } from "./routes/admin-routes";
import { teamRoutes } from "./routes/team-routes";
import { ItoastSth } from "./interface";
import "./App.css";

const local_role = localStorage.getItem("user-role");

const App: React.FC = () => {
  return (
    <>
      <ToastContainer position="top-center" hideProgressBar={true} />
      <Routes>
        {/* <Route path="/" element={<HomePage />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/act-detail" element={<ActDetail />}></Route>
          <Route path="/history-act" element={<HistoryAct />}></Route>
          <Route path="/admin-home" element={<AdminHome />}></Route>
          <Route path="/admin-home/new-act" element={<NewAct />}></Route>
          <Route path="/my-manage" element={<MyManage />}></Route>
          <Route path="/my-manage/amend-team" element={<AmendTeam />}></Route> */}
        {publicRoutes.map(({ path, component }) => (
          <Route key={path} path={path} element={component} />
        ))}
        {adminRoutes.map(({ path, component, role }) =>
          local_role === role ? (
            <Route key={path} path={path} element={component} />
          ) : (
            <Route key={path} path="/login" element={<Login />} />
          )
        )}
        {teamRoutes.map(({ path, component, role }) =>
          local_role === role ? (
            <Route key={path} path={path} element={component} />
          ) : (
            <Route key={path} path="/login" element={<Login />} />
          )
        )}
      </Routes>
    </>
  );
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
