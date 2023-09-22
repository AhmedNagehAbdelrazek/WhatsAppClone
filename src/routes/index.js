import { Suspense, lazy } from "react";
import { Navigate, useRoutes } from "react-router-dom";

// layouts
import DashboardLayout from "../layouts/dashboard";

// config
import { DEFAULT_PATH } from "../config";
import LoadingScreen from "../components/LoadingScreen";
import MainLayout from "../layouts/main";

const Loadable = (Component) => (props) => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
    { path: "/auth", 
      element:<MainLayout/>,
      children:[
        {path:"login" , element:<AppLogin />},
        {path:"register" , element:<AppRegister />},
        {path:"reset-password" , element:<ResetPassword /> },
        {path:"new-password" , element:<NewPassword />},
        { path: "send-otp", element: <SendOTP /> },
    ] },
    {
      path: "/",
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to={DEFAULT_PATH} replace />, index: true },
        { path: "app", element: <GeneralApp /> },
        { path: "settings", element: <AppSettings /> },
        { path: "group", element: <Group /> },
        { path: "call", element: <Call /> },
        { path: "profile", element: <Profile /> },

        { path: "404", element: <Page404 /> },
        { path: "*", element: <Navigate to="/404" replace /> },
      ],
    },
    
    { path: "error/404", element: <Page404 /> },
    { path: "*", element: <Navigate to="/404" replace /> },
  ]);
}

const GeneralApp = Loadable(
  lazy(() => import("../pages/dashboard/GeneralApp"))
);
const Page404 = Loadable(lazy(() => import("../pages/Page404")));

const Group = Loadable(lazy(() => import("../pages/dashboard/Group")));
const Call = Loadable(lazy(() => import("../pages/dashboard/Call")));
const Profile = Loadable(lazy(() => import("../pages/dashboard/Profile")));
const AppSettings = Loadable(lazy(() => import("../pages/dashboard/Settings")));
const AppLogin = Loadable(lazy(() => import("../pages/Auth/Login")));
const AppRegister = Loadable(lazy(() => import("../pages/Auth/Register")));
const ResetPassword = Loadable(lazy(() => import("../pages/Auth/ResetPassword")));
const NewPassword = Loadable(lazy(() => import("../pages/Auth/NewPassword")));
const SendOTP = Loadable(lazy(() => import("../pages/Auth/SendOTP")));
