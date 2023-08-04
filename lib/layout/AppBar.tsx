import { styled } from "styled-components";
import IconButton from "../components/src/IconButton";
import { lightSecondary } from "@/app/global-styles";
import MenuIcon from "../icons/MenuIcon";
import { SIDEBAR_WIDTH } from "./SideBar";
import LogoutIcon from "../icons/LogoutIcon";

export const APPBAR_HEIGHT = 65;

const AppBarContainer = styled.div<{ $sidebarOpen?: boolean }>`
  width: calc(100% - ${(props) => (props.$sidebarOpen ? SIDEBAR_WIDTH : 0)}px);
  height: ${APPBAR_HEIGHT}px;
  background-color: ${lightSecondary};
  box-sizing: border-box;
  float: right;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 20px 5px 10px;
`;

export const AppBar = (props: {
  sidebarOpen: boolean;
  toggleSidebar: () => void;
}) => {
  const handleLogoutClick = () => {};

  return (
    <AppBarContainer $sidebarOpen={props.sidebarOpen}>
      <IconButton onClickEvent={props.toggleSidebar}>
        <MenuIcon />
      </IconButton>
      <IconButton onClickEvent={handleLogoutClick}>
        <LogoutIcon />
      </IconButton>
    </AppBarContainer>
  );
};
