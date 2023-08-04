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
        "http://localhost:8080/api/v1/s3/21312321555.jpeg",
        { withCredentials: true }
      );
      const reader = new FileReader();

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
          <Image src={image!} width={100} height={100} alt="error" />
        ) : null}
      </div>
    </>
  );
};

export default Awaiting;
