"use client";
import { useAppSelector } from "../store/store";

//make a separate component later
const Blocked = function () {
  return <div>Unauthorized</div>;
};

export function Private(props: { children: JSX.Element }) {
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);

  return <div>{isAuthenticated ? props.children : <Blocked />}</div>;
}
