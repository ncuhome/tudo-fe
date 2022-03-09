
import Route from "react-router-dom";

// function AuthRoute(props) {
//   const {
//     user: {
//       role: userRole
//     },
//     role: routeRole,
//     backUrl,
//     ...otherProps
//   } = props;

//   // 如果用户有权限，就渲染对应的路由
//   if (userRole && userRole.indexOf(routeRole) > -1) {
//     return <Route {...otherProps} />
//   } else {
//     // 如果没有权限，返回配置的默认路由
//     return <Redirect to={backUrl} />
//   }
// // }

// function AuthRoute(props: any) {
//   const local_role = localStorage.getItem("user-role");
//   if (local_role === props.role) {
//     return <Route />;
//   }
// }

// export default AuthRoute;
