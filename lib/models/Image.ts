import { pointerKey } from "@testing-library/user-event";
import { error } from "console";

export type labelValueModel = { label: string; value: string };

export const points = [
  { label: "1", value: "ONE" },
  { label: "2", value: "TWO" },
  { label: "3", value: "THREE" },
  { label: "4", value: "FOUR" },
  { label: "5", value: "FIVE" },
];

const tags = [
  { label: "Lovely", value: "LOVELY" },
  { label: "Sweet", value: "SWEET" },
  { label: "Sexy", value: "SEXY" },
  { label: "Pretty", value: "PRETTY" },
  { label: "Cool", value: "COOL" },
  { label: "Neutral", value: "NEUTRAL" },
  { label: "Ugly", value: "UGLY" },
  { label: "Poor", value: "POOR" },
  { label: "Bad Physics", value: "BAD_PHYSICS" },
];

const pointsValidationCheck = (point: labelValueModel) => {
  if (!points.includes(point)) {
    throw new Error("Given point is not in the valid range!");
  }
};
const tagsValidationCheck = (tag: labelValueModel) => {
  if (!tags.includes(tag)) {
    throw new Error("Given tag is not valid.");
  }
};

export const getValuesForPoint = (point: string): labelValueModel[] => {
  switch (point) {
    case "FIVE":
    case "FOUR":
      return tags.slice(0, 5);
    case "THREE":
      return tags.slice(5, 6);
    case "TWO":
    case "ONE":
      return tags.slice(6, 10);
    default:
      return [];
  }
};

export interface ImageViewModel {
  imageId: string;
  imageLink: string;
  point: number;
  tag: string;
}
