import { lightText } from "@/app/global-styles";
import { styled } from "styled-components";

const StyledMenuButton = styled.button<{ isSelected: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  float: left;
  background-color: transparent;
  border: none;
  padding: 15px;
  margin-bottom: 20px;
  font-size: 22px;
  font-weight: ${(props) => (props.isSelected ? 600 : 300)}
  border-radius: 50px;
  color: ${lightText};
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.3);
  }
`;

const MenuButton = (props: {
  children: JSX.Element;
  text: string;
  isSelected: boolean;
  onClickEvent: () => void;
}) => {
  return (
    <StyledMenuButton
      onClick={props.onClickEvent}
      isSelected={props.isSelected}
    >
      {props.children}
      <span style={{ marginLeft: 15 }}>{props.text}</span>
    </StyledMenuButton>
  );
};

export default MenuButton;
