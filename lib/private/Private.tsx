"use client";
import { getLoggedInUser } from "../api/user";
import { useAppDispatch, useAppSelector } from "../store/store";
import { useEffect } from "react";
import { configureAxios } from "../utils/configureAxios";
import { useRouter } from "next/navigation";
import { login, logout } from "../slices/userSlice";

//make a separate component later
const Blocked = function () {
  return <div>Unauthorized</div>;
};

export function Private(props: { children: JSX.Element | JSX.Element[] }) {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const isAuthenticated = useAppSelector(
    (state) => state.user.userInfo !== undefined
  );

  useEffect(() => {
    configureAxios(() => dispatch(logout()), router);
    async function setCurrentUser() {
      try {
        const user = await getLoggedInUser();
        dispatch(login(user));
      } catch (err) {
        router.push("/login");
      }
    }
    setCurrentUser();
  });

  return <div>{isAuthenticated ? props.children : <Blocked />}</div>;
}
