import { UserContext, useUser } from "@/contexts/user";
import { useEffect, useMemo } from "react";
import { useDispatch } from "react-redux";
import { getUsers } from "./entities/user/thunks/get-users";

export const ProviderWrapper = ({ children }) => {
  const { user, login, logout } = useUser();

  const userContextValue = useMemo(
    () => ({ user, login, logout }),
    [user, login, logout]
  );

  const dispatchUsers = useDispatch();

  useEffect(() => {
    dispatchUsers(getUsers());
  }, []);

  return (
    <UserContext.Provider value={userContextValue}>
      {children}
    </UserContext.Provider>
  );
};
