import { createContext, useState } from "react";
import useFetch from "../hooks/useFetch";

const globalContext = createContext();

export default function GlobalContextProvider({ children }) {
  const {datas: users} = useFetch('http://localhost:4000/users')
  const [toggleShadow, setToggleShadow] = useState(false);
  const [toggleFixedHeader, setToggleFixedHeader] = useState(false);
  const [toggleLightHeader, setToggleLightHeader] = useState(false);
  const [toggleFixedFooter, setToggleFixedFooter] = useState(false);
  const [toggleSetting, setToggleSetting] = useState(true);
  const [toggleSidebar, setToggleSidebar] = useState(false);


 const loggedInUser = users.find(user => user.Token === localStorage.getItem('Token'))

  return (
    <globalContext.Provider
      value={{
        toggleShadow,
        setToggleShadow,
        toggleFixedHeader,
        setToggleFixedHeader,
        toggleLightHeader,
        setToggleLightHeader,
        toggleFixedFooter,
        setToggleFixedFooter,
        toggleSetting,
        setToggleSetting,
        toggleSidebar,
        setToggleSidebar,
        loggedInUser
      }}
    >
      {children}
    </globalContext.Provider>
  );
}

export { globalContext };
