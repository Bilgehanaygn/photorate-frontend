import axios from "axios";
import { UserViewModel } from "../models/User";
import { MessageResponse } from "../messageresponse/MessageResponse";

const baseUrl = "http://localhost:8080/api/v1/auth";

export const register = async function (phoneNum: string) {
  const response = await axios.get<MessageResponse>(
    `${baseUrl}/register/${phoneNum}`
  );

  return response.data;
};

export const signin = async function (phoneNum: string, otp: string) {
  const response = await axios.post<UserViewModel>(
    `${baseUrl}/login`,
    {
      phoneNum: phoneNum,
      otp: otp,
    },
    { withCredentials: true }
  );

  return response.data;
};
