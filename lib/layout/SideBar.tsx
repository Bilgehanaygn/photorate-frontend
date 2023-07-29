"use client";
import { styled } from "styled-components";
import { lightPrimary, lightSecondary } from "../../src/app/global-styles";
import { APPBAR_HEIGHT } from "./AppBar";
import MenuButton from "../components/src/MenuButton";
import AwaitingIcon from "../icons/AwaitingIcon";
import ReviewedIcon from "../icons/ReviewedIcon";
import UserIcon from "../icons/UserIcon";
import UploadIcon from "../icons/UploadIcon";

export const SIDEBAR_WIDTH = 320;

const StyledSidebar = styled.div<{ sidebarOpen: boolean }>`
  width: ${SIDEBAR_WIDTH}px;
  height: 100vh;
  position: fixed;
  background-color: rgba(32, 33, 36, 0.5);
  display: ${(props) => (props.sidebarOpen ? "block" : "none")};
  align-items: left;
  box-sizing: border-box;
  padding: ${APPBAR_HEIGHT + 50}px 25px;
`;

export const Sidebar = (props: { open: boolean; children?: JSX.Element }) => {
  const handleMenuButtonClick = () => {
    //router.push("bla bla")
  };

  return (
    <StyledSidebar sidebarOpen={props.open}>
      <MenuButton
        isSelected={false}
        text={"Upload Photo"}
        onClickEvent={handleMenuButtonClick}
      >
        <UploadIcon />
      </MenuButton>
      <MenuButton
        isSelected={false}
        text={"Awaiting Photos"}
        onClickEvent={handleMenuButtonClick}
      >
        <AwaitingIcon />
      </MenuButton>
      <MenuButton
        isSelected={false}
        text={"Reviewed Photos"}
        onClickEvent={handleMenuButtonClick}
      >
        <ReviewedIcon />
      </MenuButton>
      <MenuButton
        isSelected={false}
        text={"Profile"}
        onClickEvent={handleMenuButtonClick}
      >
        <UserIcon />
      </MenuButton>
    </StyledSidebar>
  );
};
