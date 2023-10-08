import React, { useContext, useState, useEffect } from "react";
import UserContext from "./UserContext";
import { account } from "../appwrite/appwriteConfig";

export function useUser() {
  return useContext(UserContext);
}

export function UserContextProvider(props) {
  const [user, setUser] = useState(null);

  async function login(email, password) {
    const loggedIn = await account.createEmailSession(email, password);
    setUser(loggedIn);
  }

  async function logout() {
    await account.deleteSession("current");
    setUser(null);
  }


  async function init() {
    try {
      const loggedIn = await account.get();
      setUser(loggedIn);
    } catch (err) {
      setUser(null);
    }
  }

  useEffect(() => {
    init();
  }, []);

  return (
    <UserContext.Provider value={{ current: user, login, logout}}>
      {props.children}
    </UserContext.Provider>
  );
}
