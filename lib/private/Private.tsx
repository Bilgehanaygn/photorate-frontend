"use client";
import { getLoggedInUser } from "../api/user";
import { useAppDispatch, useAppSelector } from "../store/store";
import { useEffect } from "react";
// import { configureAxios } from "../utils/configureAxios";
import { usePathname, useRouter } from "next/navigation";
import { login, logout } from "../slices/userSlice";
import { useState } from "react";

//make a separate component later
const Blocked = function () {
  return <div>Unauthorized</div>;
};

export function Private(props: { children: JSX.Element | JSX.Element[] }) {
  const [loading, setLoading] = useState<boolean>(true);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const pathname = usePathname();
  const isLoginPage = pathname === "/login";

  const isAuthenticated = useAppSelector(
    (state) => state.user.userInfo !== undefined
  );

  useEffect(() => {
    // configureAxios(() => dispatch(logout()), router);
    async function setCurrentUser() {
      try {
        const user = await getLoggedInUser();
        dispatch(login(user));
        if (pathname === "/login") {
          router.push("/");
        }
      } catch (err) {
        if (pathname !== "login") {
          router.push("/login");
        }
      }
      setLoading(false);
    }
    setCurrentUser();
  }, []);

  return (
    <div>
      {loading ? (
        <div style={{ color: "white" }}>loading</div>
      ) : isAuthenticated ? (
        props.children
      ) : isLoginPage ? (
        props.children
      ) : (
        <Blocked />
      )}
    </div>
  );
}
