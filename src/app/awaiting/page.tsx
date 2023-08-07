"use client";
import { useEffect, useState } from "react";
import { Layout } from "../../../lib/layout/Layout";
import axios from "axios";
import Image from "next/image";

const Awaiting = () => {
  const [image, setImage] = useState<string | null>(null);

  useEffect(() => {
    const getImages = async function () {
      let response = await axios.get(
        "http://localhost:8080/api/v1/image/6c9f31f2-f8a7-416e-a9c8-0948d0b9d271.png",
        { withCredentials: true }
      );

      setImage(response.data);
    };
    getImages();
  }, []);

  console.log(image);
  return (
    <>
      <div style={{ color: "white" }}>Awaiting</div>
      <div>
        {image ? (
          <Image src={image!} width={300} height={300} alt="error" />
        ) : null}
      </div>
    </>
  );
};

export default Awaiting;
