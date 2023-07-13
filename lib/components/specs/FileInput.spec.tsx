import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { FileInput } from "../src/FileInput";
import userEvent from "@testing-library/user-event";
import { useState } from "react";

const FileInputForm = () => {
  const [file, setFile] = useState<File[] | undefined>(undefined);

  const handleChange = (targetFiles: File[]) => {
    setFile(targetFiles);
  };

  return (
    <div>
      <FileInput
        name="image"
        label="Select an image"
        disabled={false}
        handleRefChange={handleChange}
        value={file}
      />
    </div>
  );
};

describe("FileInput tests", () => {
  it("Upload one file to FileInput and see the filename name on the screen", async () => {
    render(<FileInputForm />);

    const file = new File(["hello"], "hello.png", {
      type: "image/png",
    });

    const fileInput = await screen.findByLabelText("image-file-input");
    userEvent.upload(fileInput, [file]);

    expect(await screen.findByText(`${file.name}`)).toBeInTheDocument();
  });

  it("If any of the given files is exceeding the max size an error message must be presented", async () => {});
});
