import { createContext , useState } from "react";

export const UserContext = createContext();

const UserContextProvider = (props) => {
 
 const [isLoggedIn, setisLoggedIn] = useState(window.localStorage.getItem("token") || false)
  const login = () => {
   window.localStorage.setItem('token','user')
   setisLoggedIn(true)
   
  };

  const logout = () => {
    window.localStorage.removeItem('token')
    
    setisLoggedIn(false)
    
  };
 
  return (
    <UserContext.Provider value={{ login, logout, isLoggedIn }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
