import axios from "axios";
import { ImageViewModel } from "../models/Image";
import { MessageResponse } from "../messageresponse/MessageResponse";

const baseUrl = "http://localhost:8080/api/v1/image";

export const fetchRandomImage = async () => {
  const { data: response } = await axios.get<ImageViewModel>(baseUrl, {
    withCredentials: true,
  });

  return response;
};

export const rateAnImage = async (
  imageId: string,
  point: string,
  tags: string[]
) => {
  const { data: response } = await axios.put<MessageResponse>(
    baseUrl + `/${imageId}`,
    { point, tags },
    { withCredentials: true }
  );
  return response;
};
