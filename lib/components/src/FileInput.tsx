import { MuiFileInput } from "mui-file-input";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const fileUploadConfig = {
  acceptedFileTypes: ["imgae/jpg", "image/jpeg", "image/png"],
  maxFileSizeMb: 1,
};

export interface FileInputProps {
  name: string;
  label: string;
  disabled: boolean;
  handleRefChange: (file: File[]) => void;
  value: File[] | undefined;
}

function doesExceedMaxSize(files: File[]) {
  if (files instanceof Array) {
    return files.find(
      (it) => it.size > fileUploadConfig.maxFileSizeMb * 1024 * 1000
    );
  }
}

export function FileInput(props: FileInputProps) {
  const handleChange = (files: File[] | null | undefined) => {
    if (!files || typeof files === "undefined") {
      //throw some error for null or undefined
      toast.error(`Invalid input.`);
      return;
    }
    if (doesExceedMaxSize(files)) {
      //throw some error for exceeding maxSize
      toast.error(
        `Max file size is ${fileUploadConfig.maxFileSizeMb} megabytes for a single image.`
      );
      return;
    }

    //if(){} //check if number of files exceeds allowed for the user

    props.handleRefChange(files);
  };

  return (
    <>
      <MuiFileInput
        label={props.label}
        inputProps={{
          "aria-label": `${props.name}-file-input`,
          type: "file",
          accept: fileUploadConfig.acceptedFileTypes,
        }}
        value={props.value}
        multiple={true}
        disabled={props.disabled}
        onChange={handleChange}
      />
      <ToastContainer />
    </>
  );
}
