import { styled } from "styled-components";

const StyledOverlay = styled.div`
  display: block;
  position: fixed;
  padding-top: 200px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 2;
`;

const Overlay = (props: { children?: JSX.Element | JSX.Element[] }) => {
  return <StyledOverlay>{props.children}</StyledOverlay>;
};

export default Overlay;
