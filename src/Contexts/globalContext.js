import { createContext, useState } from "react";

const globalContext = createContext();

export default function GlobalContextProvider({ children }) {
  const [toggleShadow, setToggleShadow] = useState(false);
  const [toggleFixedHeader, setToggleFixedHeader] = useState(false);
  const [toggleLightHeader, setToggleLightHeader] = useState(false);
  const [toggleFixedFooter, setToggleFixedFooter] = useState(false);
  const [toggleSetting, setToggleSetting] = useState(true);
  const [toggleSidebar, setToggleSidebar] = useState(false);

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
      }}
    >
      {children}
    </globalContext.Provider>
  );
}

export { globalContext };
