import { styled } from "styled-components";
import { lightSecondary } from "@/app/global-styles";

const StyledUploadModal = styled.div`
  display: block;
  background: ${lightSecondary};
  margin: auto;
  border-radius: 10px;
  width: fit-content;
  height: fit-content;
`;

const Modal = (props: { children?: JSX.Element | JSX.Element[] }) => {
  return <StyledUploadModal>{props.children}</StyledUploadModal>;
};

export default Modal;
