import { createContext, useContext, useState } from "react";

// Global state control for permissions
const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

const AppContext = (props) => {
  const [roles, setRoles] = useState("");
  return (
    <GlobalContext.Provider value={{ roles, setRoles }}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export default AppContext;
