import { lightPrimary, lightText } from "@/app/global-styles";
import { styled } from "styled-components";

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  float: left;
  background-color: ${lightPrimary};
  color: ${lightText};
  border: none;
  padding: 15px;
  font-size: 18px;
  font-weight: 600 !important;
  border-radius: 50px;
  cursor: pointer;
  &:hover {
    background-color: rgba(30, 135, 240, 0.7);
  }
`;

const Button = (props: { text: string; onClick: () => void }) => {
  return <StyledButton onClick={props.onClick}>{props.text}</StyledButton>;
};

export default Button;
