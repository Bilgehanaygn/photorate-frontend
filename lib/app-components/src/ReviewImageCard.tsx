"use client";
import { useState, useEffect } from "react";
import {
  ImageViewModel,
  getValuesForPoint,
  labelValueModel,
} from "../../models/Image";
import Image from "next/image";
import { fetchRandomImage, rateAnImage } from "../../api/reviewer";
import { lightPrimary } from "@/app/global-styles";
import { points } from "../../models/Image";
import Button from "../../components/src/Button";
import { toast } from "react-toastify";

const ReviewImageCard = () => {
  const [image, setImage] = useState<ImageViewModel | undefined>(undefined);
  const [loading, setLoading] = useState(true);
  const [selectedPoint, setSelectedPoint] = useState<string | undefined>(
    undefined
  );
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [possibleTags, setPossibleTags] = useState<labelValueModel[]>([]);
  const [pointButtonSelectedIndex, setPointButtonSelectedIndex] = useState<
    number | undefined
  >(undefined);
  const [tagButtonSelectedIndexes, setTagButtonSelectedIndexes] = useState<
    number[]
  >([]);

  useEffect(() => {
    const initialize = async function () {
      const randomImage = await fetchRandomImage();
      setImage(randomImage);
      setLoading(false);
    };
    initialize();
  }, []);

  const handlePointButtonClick = (index: number, point: string) => {
    setSelectedPoint(point);
    setPointButtonSelectedIndex(index);
    setPossibleTags(getValuesForPoint(point));

    //also when a new point is selected, the tags should be resetted since index based implementation could lead to errors
    setSelectedTags([]);
    setTagButtonSelectedIndexes([]);
  };

  const resetSelectedTags = () => {};

  const handleTagButtonClick = (index: number, tag: string) => {
    //if the newly clicked tag was not selected//does not exist in the list
    if (!selectedTags.includes(tag)) {
      setSelectedTags([...selectedTags, tag]);
    }
    //else remove from the array
    else {
      setSelectedTags(selectedTags.filter((item) => item !== tag));
    }

    if (!tagButtonSelectedIndexes.includes(index)) {
      setTagButtonSelectedIndexes([...tagButtonSelectedIndexes, index]);
    }
    //else remove from the array
    else {
      setTagButtonSelectedIndexes(
        tagButtonSelectedIndexes.filter((item) => item !== index)
      );
    }
  };

  const handleSubmitClick = async () => {
    const response = await rateAnImage(
      image!.imageId,
      selectedPoint!,
      selectedTags
    );
    if (response.type === "INFO") {
      toast.success(response.message);
    }
  };

  return (
    <div
      style={{
        border: `5px solid ${lightPrimary}`,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "fit-content",
        height: "fit-content",
        margin: "auto",
      }}
    >
      {image ? (
        <>
          <Image src={image?.imageLink} width={500} height={500} alt="image" />
          <div
            style={{
              width: "100%",
              height: 100,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {points.map((element, index) => {
              return (
                <div
                  style={{
                    width: "20%",
                    boxSizing: "border-box",
                    padding: "0 10px",
                  }}
                  key={index}
                >
                  <Button
                    onClick={() => {
                      handlePointButtonClick(index, element.value);
                    }}
                    text={element.label}
                    isSelected={index === pointButtonSelectedIndex}
                    isSelectedColor="green"
                  />
                </div>
              );
            })}
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {possibleTags.map((element, index) => {
              return (
                <div style={{ width: "fit-content", margin: 10 }} key={index}>
                  <Button
                    onClick={() => {
                      handleTagButtonClick(index, element.value);
                    }}
                    text={element.label}
                    isSelected={tagButtonSelectedIndexes.includes(index)}
                    isSelectedColor="green"
                  />
                </div>
              );
            })}
          </div>
          {selectedPoint && selectedTags.length !== 0 && (
            <div
              style={{ marginTop: 50, marginBottom: 20, width: "fit-content" }}
            >
              <Button text="Submit" onClick={handleSubmitClick} />
            </div>
          )}
        </>
      ) : null}
    </div>
  );
};

export default ReviewImageCard;
