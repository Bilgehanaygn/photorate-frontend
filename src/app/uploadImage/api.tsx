import axios from "axios";
import { fileToBase64Image } from "./models";

const baseURL = "http://localhost:8080/api/image";

export async function uploadImages(files: File[]) {
  const images = await fileToBase64Image(files);
  console.log(images);
  // await axios.post(baseURL, images);
}

export async function getImageByName(name: string) {
  const { data } = await axios.get(baseURL + `?name=${name}`);
  console.log(data);
  return data[0];
}
