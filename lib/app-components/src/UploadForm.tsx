import ReactDom from "react-dom";
import Overlay from "../../components/src/Overlay";
import { useState, useRef, useEffect } from "react";
import Modal from "../../components/src/Modal";
import Dropzone, { useDropzone } from "react-dropzone";
import { DropzoneProps } from "react-dropzone";
import { lightPrimary, lightSecondary, lightText } from "@/app/global-styles";
import PhotoIcon from "../../components/src/PhotoIcon";
import Image from "next/image";
import IconButton from "../../components/src/IconButton";
import CloseIcon from "../../icons/CloseIcon";
import Button from "../../components/src/Button";
import { uploadImage } from "../../api/user";
import { toast } from "react-toastify";

interface CustomFile extends File {
  preview?: string;
}

const Thumbs = (props: {
  files: CustomFile[];
  onImageCloseClick: (index: number) => void;
}) => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "grid",
        gridTemplateRows: "auto auto",
        gridTemplateColumns: "auto auto",
      }}
    >
      {props.files.map((file, index) => (
        <div
          key={index}
          style={{
            position: "relative",
            width: "fit-content",
            height: "fit-content",
            margin: "auto",
          }}
        >
          <div
            onClick={() => {
              props.onImageCloseClick(index);
            }}
            style={{
              position: "absolute",
              top: -10,
              right: -10,
              cursor: "pointer",
            }}
          >
            <CloseIcon width="20" height="20" />
          </div>
          <Image
            src={file.preview!}
            width={80}
            height={80}
            alt="img"
            style={{ borderRadius: 5 }}
          />
        </div>
      ))}
    </div>
  );
};

const UploadForm = (props: { onModalCloseClick: () => void }) => {
  const ref = useRef<Element | null>(null);
  const [mounted, setMounted] = useState(false);
  const [files, setFiles] = useState<CustomFile[]>([]);

  const { getRootProps, getInputProps } = useDropzone({
    accept: { image: [".jpg", ".jpeg", ".png"] },
    onDrop: (acceptedFiles: File[]) => {
      let previewedFiles = acceptedFiles.map((file: CustomFile) => {
        file.preview = URL.createObjectURL(file);
        return file;
      });
      setFiles(previewedFiles);
    },
  });

  useEffect(() => {
    ref.current = document.getElementById("portal");
    setMounted(true);

    return () => {
      files.forEach((file) => URL.revokeObjectURL(file.preview!));
    };
  }, []);

  const onImageCloseClick = (index: number) => {
    const newFiles = [...files];
    newFiles.splice(index, 1);
    setFiles(newFiles);
  };

  const handleUploadClick = async () => {
    const formData = new FormData();
    formData.append("file", files[0] as Blob);

    const response = await uploadImage(formData);
    if (response.type === "INFO") {
      toast.success(response.message);
      //close the modal
      props.onModalCloseClick();
    }
  };

  return mounted && ref.current
    ? ReactDom.createPortal(
        <Overlay>
          <Modal>
            <div
              style={{ width: 400, height: window.innerHeight, maxHeight: 550 }}
            >
              <div
                style={{
                  textAlign: "center",
                  padding: 10,
                  fontWeight: 500,
                  borderBottom: `1px solid ${lightText}`,
                  lineHeight: "20px",
                  position: "relative",
                }}
              >
                Upload Images
                <IconButton
                  onClickEvent={props.onModalCloseClick}
                  style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                  }}
                >
                  <CloseIcon width="25" height="25" />
                </IconButton>
              </div>
              <div
                style={{
                  height: 200,
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div
                  {...getRootProps({ className: "dropzone" })}
                  style={{
                    margin: "auto",
                    width: "70%",
                    height: "80%",
                    border: `2px dashed ${lightPrimary}`,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    cursor: "pointer",
                  }}
                >
                  <PhotoIcon width="50" height="50" />
                  <div
                    style={{
                      boxSizing: "border-box",
                      marginTop: 10,
                      textAlign: "center",
                    }}
                  >
                    Drag n' drop images <br /> or <br /> click to upload
                  </div>
                  <input {...getInputProps()} />
                </div>
              </div>

              <div
                style={{
                  height: 230,
                }}
              >
                <Thumbs files={files} onImageCloseClick={onImageCloseClick} />
              </div>
              <div
                style={{
                  width: "50%",
                  margin: "auto",
                }}
              >
                <Button onClick={handleUploadClick} text="Upload" />
              </div>
            </div>
          </Modal>
        </Overlay>,
        ref.current!
      )
    : null;
};

export default UploadForm;
