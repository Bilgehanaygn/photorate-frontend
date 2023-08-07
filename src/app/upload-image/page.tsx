"use client";
import { FileInput } from "../../../lib/components/src/FileInput";
import { useState } from "react";
import { getImageByName, uploadImages } from "./api";
import { ToastContainer, toast } from "react-toastify";
import { base64ImageToFile } from "./models";
import axios from "axios";
import { Layout } from "../../../lib/layout/Layout";
import Button from "../../../lib/components/src/Button";

export default function Image() {
  const [files, setFiles] = useState<File[] | undefined>();
  const [image, setImage] = useState<string | undefined>();
  const [] = useState();

  const handleChange = async (targetFiles: File[]) => {
    setFiles(targetFiles);
  };

  // const handleUploadClick = async () => {
  //   try {
  //     if (typeof files === "undefined") {
  //       toast.error("Invalid files");
  //       return;
  //     }
  //     await uploadImages(files);
  //   } catch (err) {
  //     toast.error("Error while uploading files.");
  //     console.log(err);
  //   }
  // };

  const handleGetClick = async () => {
    const { data } = await getImageByName("2017-08-17-22-54-07.png");
    console.log(data);
    setImage("data:image/png;base64" + data[0].content);
  };

  const handleUploadClick = async () => {
    // await axios.post(
    //   "http://localhost:8080/api/v1/s3",
    //   {
    //     content: await files![0].text(),
    //   }
    //   // { withCredentials: true }
    // );
  };

  return (
    <div style={{ background: "aliceblue", width: "100vw", height: "100vh" }}>
      <FileInput
        name="imageFileInput"
        label="Select an image"
        disabled={false}
        handleRefChange={handleChange}
        value={files}
      />
      <Button text="Upload" onClick={handleUploadClick} />
      <Button text="Get Image" onClick={handleGetClick} />
      {image ? <img src={image} alt="image alter" /> : null}
    </div>
  );
}
