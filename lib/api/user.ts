import axios from "axios";
import { UserViewModel } from "../models/User";

const baseUrl = "http://localhost:8080/api/v1/user";

export const getLoggedInUser = async function () {
  const response = await axios.get<UserViewModel>(`${baseUrl}/getLoggedInUser`);
  if (response.data) {
    return response.data;
  }
  //will throw an exception
};
