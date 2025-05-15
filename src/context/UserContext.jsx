// context/UserContext.jsx
import React, { createContext, useState, useEffect } from "react";
import { useUser, useClerk } from "@clerk/clerk-react";
import Cookies from "js-cookie";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const { user } = useUser();           // Clerk user
  const { signOut } = useClerk();       // Clerk logout
  const [customUser, setCustomUser] = useState(null); // your context user

  useEffect(() => {
    if (user) {
      const userData=({
        id: user.id,
        name: user.fullName,
        email: user.primaryEmailAddress?.emailAddress,
        imageUrl: user.imageUrl,
      });
      setCustomUser(userData)
      Cookies.set("userData",JSON.stringify(userData))
    } else {
      setCustomUser(null);
      Cookies.remove("userData")
    }
  }, [user]);

  const logout = () => {
    Cookies.remove("userData")
    setCustomUser(null);
    signOut(); 
  };

  return (
    <UserContext.Provider value={{ user: customUser, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
