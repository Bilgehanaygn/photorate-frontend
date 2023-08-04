import InputField from "../../components/src/InputField";
import PhoneIcon from "../../icons/PhoneIcon";
import { lightSecondary, lightText } from "@/app/global-styles";
import Button from "../../components/src/Button";
import { useState } from "react";
import { register, signin } from "../../api/auth";
import { getLoggedInUser } from "../../api/user";
import { useAppDispatch } from "../../store/store";
import { login } from "../../slices/userSlice";
import StarIcon from "../../icons/StarIcon";
import { useRouter } from "next/navigation";
import Modal from "../../components/src/Modal";

const LoginForm = () => {
  const [countryCode, setCountryCode] = useState<string | null>(null);
  const [phoneNum, setPhoneNum] = useState<string>("");
  const [inputError, setInputError] = useState<boolean>(false);
  const [phoneNumSubmitted, setPhoneNumSubmitted] = useState<boolean>(false);
  const [otp, setOtp] = useState<string>("");

  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleLoginClick = async () => {
    if (phoneNum === "") {
      setInputError(true);
      return;
    }
    const response = await register(phoneNum);
    setPhoneNumSubmitted(true);
    console.log(response);
  };

  const handleSubmitClick = async () => {
    if (otp === "") {
      setInputError(true);
      return;
    }
    await signin(phoneNum, otp);
    const userResponse = await getLoggedInUser();
    dispatch(login(userResponse));
    router.push("/");
  };

  const phoneNumOnChange = (event: React.FormEvent<HTMLInputElement>) => {
    setInputError(false);
    setPhoneNum(event.currentTarget.value);
  };

  const otpOnChange = (event: React.FormEvent<HTMLInputElement>) => {
    setInputError(false);
    setOtp(event.currentTarget.value);
  };

  return (
    <Modal>
      <div
        style={{
          width: 450,
          height: 450,
          padding: 50,
          backgroundColor: "transparent",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          margin: "auto",
        }}
      >
        <div style={{ fontSize: 30, textAlign: "center", color: lightText }}>
          Welcome back!
        </div>

        <div style={{ display: "flex" }}>
          {phoneNumSubmitted ? (
            <InputField
              disabled={false}
              errorMessage="This field is required"
              errors={inputError}
              onChange={otpOnChange}
              type="number"
              name="otp-input"
              placeholder="6 Digit Code"
              icon={<StarIcon width="20" height="20" />}
              value={otp}
            />
          ) : (
            <InputField
              disabled={false}
              errorMessage="This field is required."
              errors={inputError}
              onChange={phoneNumOnChange}
              type={"text"}
              name="phone-num-input"
              placeholder="Phone Number"
              icon={<PhoneIcon width="20" height="20" />}
              value={phoneNum}
            />
          )}
        </div>
        {phoneNumSubmitted ? (
          <Button text="Submit" onClick={handleSubmitClick} />
        ) : (
          <Button text="Log in" onClick={handleLoginClick} />
        )}
      </div>
    </Modal>
  );
};

export default LoginForm;
