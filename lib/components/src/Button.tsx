import { lightPrimary, lightText } from "@/app/global-styles";
import { styled } from "styled-components";

const StyledButton = styled.button<{
  $isSelected: boolean;
  $isSelectedColor: string;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  float: left;
  background-color: ${(props) =>
    props.$isSelected ? props.$isSelectedColor : lightPrimary};
  color: ${lightText};
  border: none;
  width: 100%;
  padding: 15px;
  font-size: 18px;
  font-weight: 600 !important;
  border-radius: 50px;
  cursor: pointer;
  &:hover {
    background-color: rgba(30, 135, 240, 0.7);
  }
`;

const Button = (props: {
  text: string;
  onClick: () => void;
  isSelected?: boolean;
  isSelectedColor?: string;
}) => {
  return (
    <StyledButton
      onClick={props.onClick}
      $isSelected={props.isSelected ?? false}
      $isSelectedColor={props.isSelectedColor ?? ""}
    >
      {props.text}
    </StyledButton>
  );
};

export default Button;
