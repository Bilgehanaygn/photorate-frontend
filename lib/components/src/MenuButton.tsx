import { lightPrimary, lightText } from "@/app/global-styles";
import { styled } from "styled-components";

const StyledMenuButton = styled.div<{ $isSelected: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  float: left;
  background-color: transparent;
  border: none;
  padding: 15px;
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: ${(props) => (props.$isSelected ? 600 : 400)};
  border-radius: 50px;
  color: ${(props) => (props.$isSelected ? lightPrimary : lightText)};
  cursor: pointer;
  &:hover {
    background-color: rgba(34, 43, 54, 0.5);
  }
`;

const StyledButtonContainer = styled.div`
  width: 100%;
  display: flex;
`;

const MenuButton = (props: {
  children: JSX.Element;
  text: string;
  isSelected: boolean;
  onClickEvent: () => void;
}) => {
  return (
    <StyledButtonContainer>
      <StyledMenuButton
        onClick={props.onClickEvent}
        $isSelected={props.isSelected}
      >
        {props.children}
        <span style={{ marginLeft: 15 }}>{props.text}</span>
      </StyledMenuButton>
    </StyledButtonContainer>
  );
};

export default MenuButton;
