import axios from "axios";
import { UserViewModel } from "../models/User";
import {
  MessageResponse,
  defaultSuccessResult,
} from "../messageresponse/MessageResponse";

const baseUrl = "http://localhost:8080/api/v1/user";

export const getLoggedInUser = async function () {
  const response = await axios.get<UserViewModel>(
    `${baseUrl}/getLoggedInUser`,
    { withCredentials: true }
  );
  console.log(response.data);

  if (response.data) {
    return response.data;
  }
  //will throw an exception
};

export const uploadImage = async function (formData: FormData) {
  const { data: response } = await axios.post<MessageResponse>(
    "http://localhost:8080/api/v1/image",
    formData,
    {
      withCredentials: true,
      headers: { "Content-Type": "multipart/form-data" },
    }
  );

  return response;
};

export const getImageLink = async function (imageId: String) {
  const { data } = await axios.get(
    `http://localhost:8080/api/v1/image/${imageId}`
  );

  return data;
};
