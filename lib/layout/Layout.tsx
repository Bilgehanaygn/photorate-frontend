"use client";
import { useState } from "react";
import { SIDEBAR_WIDTH, Sidebar } from "./SideBar";
import styled from "styled-components";
import { AppBar } from "./AppBar";
import { Private } from "../private/Private";
import { breakpoint } from "@/app/global-styles";

const LayoutRoot = styled.div`
  width: 100%;
  height: 100;
`;

const LayoutContainer = styled.div<{
  breaksDown: boolean;
  sidebarOpen: boolean;
}>`
  display: flex;
  flex: auto;
  height: 100%;
  width: 100%;
  padding-left: ${(props) =>
    props.breaksDown ? 20 : props.sidebarOpen ? SIDEBAR_WIDTH + 20 : 20}px;
  box-sizing: border-box;
`;

export function Layout(props: { children?: JSX.Element | JSX.Element[] }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const breaksDown = window.innerWidth < 1000;

  function toggleSidebar() {
    setSidebarOpen((prevState) => !prevState);
  }

  return (
    <>
      <Private>
        <LayoutRoot>
          <AppBar
            toggleSidebar={toggleSidebar}
            sidebarOpen={sidebarOpen}
          ></AppBar>
          <Sidebar open={sidebarOpen} />
          <LayoutContainer breaksDown={breaksDown} sidebarOpen={sidebarOpen}>
            {props.children}
          </LayoutContainer>
        </LayoutRoot>
      </Private>
    </>
  );
}
