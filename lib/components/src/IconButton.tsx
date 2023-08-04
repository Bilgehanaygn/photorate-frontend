import { styled } from "styled-components";

const StyledIconButton = styled.button`
  background-color: transparent;
  border: none;
  color: white;
  padding: 7px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: rgba(34, 43, 54, 0.3);
  }
`;

const IconButton = (props: {
  children: JSX.Element;
  onClickEvent: () => void;
  style?: {};
}) => {
  return (
    <div style={props.style}>
      <StyledIconButton onClick={props.onClickEvent}>
        {props.children}
      </StyledIconButton>
    </div>
  );
};

export default IconButton;
