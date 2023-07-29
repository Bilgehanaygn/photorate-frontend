import { styled } from "styled-components";
import { lightSecondary } from "@/app/global-styles";

const StyledIconButton = styled.button`
  background-color: transparent;
  border: none;
  color: white;
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 50%;
  display: flex;
  &:hover {
    background-color: rgba(0, 0, 0, 0.3);
  }
`;

const IconButton = (props: {
  children: JSX.Element;
  onClickEvent: () => void;
}) => {
  return (
    <div>
      <StyledIconButton onClick={props.onClickEvent}>
        {props.children}
      </StyledIconButton>
    </div>
  );
};

export default IconButton;
