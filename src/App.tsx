import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import logo from "./logo.svg";
import "./App.css";
import HomePage from "./pages/home";
import Login from "./pages/login";
import ActDetail from "./pages/actdetail";
import HistoryAct from "./pages/end-act";
import AdminHome from "./pages/admin-home";
import NewAct from "./pages/new-act";

export const toastSth = (toastMode:any, toastText: any, toastSetting: any) => {
  switch (toastMode) {
    case "success":
      toast.success(toastText,toastSetting)
      break;
    case "warning":
      toast.warning(toastText,toastSetting)
      break;
    case "error":
      toast.error(toastText,toastSetting)
      break;
    case "info":
      toast.info(toastText,toastSetting)
      break;
    default:
      break;
  }
};

const App: React.FC = () => {
  return (
    <>
      <ToastContainer
        position="top-center" 
        hideProgressBar={true}
      />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/act-detail" element={<ActDetail />}></Route>
        <Route path="/history-act" element={<HistoryAct />}></Route>
        <Route path="/admin-home" element={<AdminHome />}></Route>
        <Route path="/admin-home/new-act" element={<NewAct />}></Route>
      </Routes>
    </>
  );
};
// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>Hello Vite + React!</p>
//         <p>
//           <button type="button" onClick={() => setCount((count) => count + 1)}>
//             count is: {count}
//           </button>
//         </p>
//         <p>
//           Edit <code>App.tsx</code> and save to test HMR updates.
//         </p>
//         <p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//           {' | '}
//           <a
//             className="App-link"
//             href="https://vitejs.dev/guide/features.html"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Vite Docs
//           </a>
//         </p>
//       </header>
//     </div>
//   )
// }

export default App;
