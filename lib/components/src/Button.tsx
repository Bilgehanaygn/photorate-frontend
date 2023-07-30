import { lightPrimary, lightText } from "@/app/global-styles";
import { styled } from "styled-components";

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  float: left;
  background-color: ${lightPrimary};
  border: none;
  padding: 15px;
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: 300;
  border-radius: 50px;
  color: ${lightText};
  cursor: pointer;
  &:hover {
    background-color: rgba(30, 135, 240, 0.7);
  }
`;

const Button = (props: { text: string; onClick: () => void }) => {
  return <StyledButton onClick={props.onClick}>{props.text}</StyledButton>;
};

export default Button;
