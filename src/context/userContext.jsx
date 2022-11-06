import { createContext, useContext, useState } from "react";
const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
    
  const values = {
    theme,
    setTheme
  }

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};

export const useUser = () => useContext(UserContext);
export default UserProvider;
