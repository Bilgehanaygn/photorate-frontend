"use client";
import { styled } from "styled-components";
import { lightSecondary } from "../../src/app/global-styles";
import MenuButton from "../components/src/MenuButton";
import AwaitingIcon from "../icons/AwaitingIcon";
import ReviewedIcon from "../icons/ReviewedIcon";
import UserIcon from "../icons/UserIcon";
import UploadIcon from "../icons/UploadIcon";
import HomeIcon from "../icons/HomeIcon";
import { usePathname, useRouter } from "next/navigation";
import ReviewersIcon from "../icons/ReviewersIcon";
import Logo from "../../public/perfecto_logo_right.png";
import Image from "next/image";
import IconButton from "../components/src/IconButton";
import { useState } from "react";
import UploadForm from "../app-components/src/UploadForm";
import { useAppSelector } from "../store/store";
import RateIcon from "../icons/RateIcon";

export const SIDEBAR_WIDTH = 300;

const StyledSidebar = styled.div<{ $sidebarOpen: boolean }>`
  width: ${SIDEBAR_WIDTH}px;
  height: 100vh;
  border-right: 0.5px solid ${lightSecondary};
  display: ${(props) => (props.$sidebarOpen ? "block" : "none")};
  box-sizing: border-box;
  padding: 30px 10px;
`;

export const Sidebar = (props: { open: boolean; children?: JSX.Element }) => {
  const [uploadModalOpen, setUploadModalOpen] = useState<boolean>(false);
  const router = useRouter();
  const pathname = usePathname();
  const userRole = useAppSelector((state) => state.user.userInfo?.role);

  const handleMenuButtonClick = (action: Actions) => {
    if (action === Actions.UPLOAD) {
      setUploadModalOpen((prev) => !prev);
    }
    if (action === Actions.NAVIGATE_HOME) {
      router.push("/");
    }
    if (action === Actions.NAVIGATE_AWAITING) {
      router.push("/awaiting");
    }
    if (action === Actions.NAVIGATE_REVIEWED) {
      router.push("/reviewed");
    }
    if (action === Actions.NAVIGATE_REVIEWERS) {
      router.push("/reviewers");
    }
    if (action === Actions.NAVIGATE_PROFILE) {
      router.push("/profile");
    }
  };

  const Actions = {
    UPLOAD: "Upload",
    NAVIGATE_HOME: "Navigate Home",
    NAVIGATE_AWAITING: "Navigate Awaiting",
    NAVIGATE_REVIEWED: "Navigate Reviewed",
    NAVIGATE_REVIEWERS: "Navigate Reviewers",
    NAVIGATE_PROFILE: "Navigate Profile",
  } as const;

  type Actions = (typeof Actions)[keyof typeof Actions];

  return userRole === "USER" || !userRole ? (
    <StyledSidebar $sidebarOpen={props.open}>
      {uploadModalOpen ? (
        <UploadForm
          onModalCloseClick={() => {
            console.log("clicked");
            setUploadModalOpen(false);
          }}
        />
      ) : null}
      <div style={{ marginBottom: 30 }}>
        <IconButton onClickEvent={() => {}}>
          <Image src={Logo} alt="logo" width="40" height="40" />
        </IconButton>
      </div>

      <MenuButton
        isSelected={pathname === "/"}
        text={"Home"}
        onClickEvent={() => {
          handleMenuButtonClick(Actions.NAVIGATE_HOME);
        }}
      >
        <HomeIcon />
      </MenuButton>
      <MenuButton
        isSelected={pathname === "/upload"}
        text={"Upload"}
        onClickEvent={() => {
          handleMenuButtonClick(Actions.UPLOAD);
        }}
      >
        <UploadIcon />
      </MenuButton>
      <MenuButton
        isSelected={pathname === "/awaiting"}
        text={"Awaiting"}
        onClickEvent={() => {
          handleMenuButtonClick(Actions.NAVIGATE_AWAITING);
        }}
      >
        <AwaitingIcon />
      </MenuButton>
      <MenuButton
        isSelected={pathname === "/reviewed"}
        text={"Reviewed"}
        onClickEvent={() => {
          handleMenuButtonClick(Actions.NAVIGATE_REVIEWED);
        }}
      >
        <ReviewedIcon />
      </MenuButton>
      <MenuButton
        isSelected={pathname === "/reviewers"}
        text={"Reviewers"}
        onClickEvent={() => {
          handleMenuButtonClick(Actions.NAVIGATE_REVIEWERS);
        }}
      >
        <ReviewersIcon />
      </MenuButton>
      <MenuButton
        isSelected={pathname === "/profile"}
        text={"Profile"}
        onClickEvent={() => {
          handleMenuButtonClick(Actions.NAVIGATE_PROFILE);
        }}
      >
        <UserIcon />
      </MenuButton>
    </StyledSidebar>
  ) : (
    <StyledSidebar $sidebarOpen={props.open}>
      {uploadModalOpen ? (
        <UploadForm
          onModalCloseClick={() => {
            console.log("clicked");
            setUploadModalOpen(false);
          }}
        />
      ) : null}
      <div>
        <IconButton onClickEvent={() => {}}>
          <Image src={Logo} alt="logo" width="40" height="40" />
        </IconButton>
      </div>
      <MenuButton
        isSelected={pathname === "/review"}
        text={"Review"}
        onClickEvent={() => {
          router.push("/review");
        }}
      >
        <RateIcon />
      </MenuButton>
    </StyledSidebar>
  );
};
