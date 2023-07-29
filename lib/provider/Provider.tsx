"use client";
import { store } from "../store/store";
import { Provider } from "react-redux";

const ReduxProvider = (props: { children: React.ReactNode }) => {
  return <Provider store={store}>{props.children}</Provider>;
};

export default ReduxProvider;
