"use client";
import { useState } from "react";
import { SIDEBAR_WIDTH, Sidebar } from "./SideBar";
import styled from "styled-components";
import { AppBar } from "./AppBar";
import { Private } from "../private/Private";
import { breakpoint, lightSecondary } from "@/app/global-styles";

const LayoutRoot = styled.div`
  width: 100vw;
  height: 100vh;
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const LayoutContainer = styled.div<{
  $breaksDown: boolean;
  $sidebarOpen: boolean;
}>`
  display: block;
  height: 100%;
  width: 800px;
  border-right: 1px solid ${lightSecondary};
  box-sizing: border-box;
`;

export function Layout(props: {
  children?: JSX.Element | JSX.Element[] | React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const breaksDown = window.innerWidth < 1000;

  function toggleSidebar() {
    setSidebarOpen((prevState) => !prevState);
  }

  return (
    <Private>
      <LayoutRoot>
        <Sidebar open={sidebarOpen} />
        <LayoutContainer $breaksDown={breaksDown} $sidebarOpen={sidebarOpen}>
          {props.children}
        </LayoutContainer>
      </LayoutRoot>
    </Private>
  );
}
