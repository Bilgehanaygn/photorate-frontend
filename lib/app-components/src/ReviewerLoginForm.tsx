import InputField from "../../components/src/InputField";
import PhoneIcon from "../../icons/PhoneIcon";
import { lightSecondary, lightText } from "@/app/global-styles";
import Button from "../../components/src/Button";
import { useState } from "react";
import { register, reviewerSignIn, signin } from "../../api/auth";
import { getLoggedInUser } from "../../api/user";
import { useAppDispatch } from "../../store/store";
import { login } from "../../slices/userSlice";
import StarIcon from "../../icons/StarIcon";
import { useRouter } from "next/navigation";
import Modal from "../../components/src/Modal";

const ReviewerLoginForm = () => {
  const [phoneNum, setPhoneNum] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [inputError, setInputError] = useState<boolean>(false);

  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleLoginClick = async () => {
    if (phoneNum === "") {
      setInputError(true);
      return;
    }
    if (password === "") {
      setInputError(true);
    }

    await reviewerSignIn(phoneNum, password);
    const userResponse = await getLoggedInUser();
    dispatch(login(userResponse));
    router.push("/");
  };

  const phoneNumOnChange = (event: React.FormEvent<HTMLInputElement>) => {
    setInputError(false);
    setPhoneNum(event.currentTarget.value);
  };

  const passwordOnChange = (event: React.FormEvent<HTMLInputElement>) => {
    setInputError(false);
    setPassword(event.currentTarget.value);
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

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
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
          <div style={{ height: 50 }}></div>
          <InputField
            disabled={false}
            errorMessage="This field is required"
            errors={inputError}
            onChange={passwordOnChange}
            type="password"
            name="otp-input"
            placeholder="Password"
            icon={<StarIcon width="20" height="20" />}
            value={password}
          />
        </div>
        <Button text="Log in" onClick={handleLoginClick} />
      </div>
    </Modal>
  );
};

export default ReviewerLoginForm;
