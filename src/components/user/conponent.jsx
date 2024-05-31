"use client";

import { selectUserById } from "@/redux/entities/user/selectors";
import { useSelector } from "react-redux";

export const User = ({ userId }) => {
  const user = useSelector((state) => selectUserById(state, userId));

  if (!user) {
    return null;
  }
  return <div>{user.name}</div>;
};
