import React, {useContext} from "react";
import "./App.css";
import routes from "./routes";
import { useRoutes } from "react-router-dom";
import { TopBar, SideBar, SettingPanel, Footer } from "./components";

export default function App() {
  const router = useRoutes(routes);
  const routerPathName = router.props.match.pathname;
  const routerPathNames = ["/login", "/register", "/password_recovery"];

  return (
    <div>
        {!routerPathNames.includes(routerPathName) ? (
          <>
            <SettingPanel />

            <div className="flex bg-gray-200 font-iransans text-gray-400">
              <SideBar />
              <div className="w-full">
                <TopBar />
                {router}
                <Footer />
              </div>
            </div>
            <div className="overlay bg-gray-300/50 fixed inset-0 hidden tv:block"></div>
          </>
        ) : (
          <div className="bg-gray-200 font-iransans text-gray-400 min-h-screen p-20">
            {router}
          </div>
        )}
    </div>
  );
}