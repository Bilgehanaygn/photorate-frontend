import { lightError, lightText } from "@/app/global-styles";
import { styled } from "styled-components";

export type InputFieldProps = {
  placeholder: string;
  name: string;
  disabled: boolean;
  type: string;
  icon: JSX.Element | null;
  errors: boolean;
  errorMessage: string;
  value: string;
  onChange: (event: any | undefined) => void;
};

const StyledInput = styled.input<{ errors: boolean; type: string }>`
  background-image: linear-gradient(
      ${(props) => (props.errors ? lightError : "#20aee3")},
      ${(props) => (props.errors ? lightError : "#20aee3")}
    ),
    linear-gradient(
      ${(props) => (props.errors ? lightError : "#bfbfbf")},
      ${(props) => (props.errors ? lightError : "#bfbfbf")}
    );
  border: 0 none;
  border-radius: 0;
  box-shadow: none;
  float: none;
  background-color: transparent;
  background-position: center bottom, center calc(100% - 1px);
  background-repeat: no-repeat;
  background-size: 0 2px, 100% 1px;
  padding: 0;
  transition: background 0s ease-out 0s;
  color: ${(props) => (props.errors ? lightError : lightText)};
  min-height: 35px;
  display: initial;
  width: 100%;
  outline: none;
  font-size: 15px;
  &:focus {
    background-size: 100% 2px, 100% 1px;
    outline: 0 none;
    transition-duration: 0.3s;
  }
  ::placeholder {
    color: ${lightText};
  }

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    margin: 0;
  }
`;

const StyledInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  color: #ccc;

  input:focus-within {
    color: ${lightText};
  }
`;

const InputField = (props: InputFieldProps) => {
  return (
    <div style={{ width: "100%" }}>
      <StyledInputContainer>
        {props.icon}
        {props.icon ? <span style={{ width: 15 }}></span> : null}
        <StyledInput
          placeholder={props.placeholder}
          type={props.type}
          aria-label={props.name}
          errors={props.errors}
          onChange={props.onChange}
          disabled={props.disabled}
          value={props.value}
        />
      </StyledInputContainer>
      <div
        style={{
          color: lightError,
          marginTop: 15,
          display: props.errors ? "block" : "none",
          fontSize: 17,
          textAlign: "right",
        }}
      >
        {props.errorMessage}
      </div>
    </div>
  );
};

export default InputField;
