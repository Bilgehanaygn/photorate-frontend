export interface FileViewModel {
  name: string;
  content: string;
}

const readSingleFile: (
  reader: FileReader,
  file: File
) => Promise<string> = async (reader: FileReader, file: File) => {
  const fileAsBase64 = await new Promise<string>((resolve, reject) => {
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      if (typeof reader.result === "string") {
        resolve(reader.result);
      }
      reject();
    };
  });

  return fileAsBase64;
};

export const fileToBase64Image = async (files: File[]) => {
  const reader = new FileReader();
  const images: FileViewModel[] = [];

  for (let file of files) {
    const fileAsBase64 = await readSingleFile(reader, file);
    images.push({ name: file.name, content: fileAsBase64 });
  }

  return images;
};

const base64toByteArray = (base64Data: string, contentType: string) => {
  contentType = contentType || "";
  var sliceSize = 1024;
  var byteCharacters = atob(base64Data);
  var bytesLength = byteCharacters.length;
  var slicesCount = Math.ceil(bytesLength / sliceSize);
  var byteArrays = new Array(slicesCount);

  for (var sliceIndex = 0; sliceIndex < slicesCount; ++sliceIndex) {
    var begin = sliceIndex * sliceSize;
    var end = Math.min(begin + sliceSize, bytesLength);

    var bytes = new Array(end - begin);
    for (var offset = begin, i = 0; offset < end; ++i, ++offset) {
      bytes[i] = byteCharacters[offset].charCodeAt(0);
    }
    byteArrays[sliceIndex] = new Uint8Array(bytes);
  }
  return byteArrays;
  // return new Blob(byteArrays, { type: contentType });
};

export const base64ImageToFile = (images: FileViewModel[]) => {
  const files: File[] = [];
  for (let image of images) {
    const imageByteArray = base64toByteArray(image.content, "");
    const file = new File(imageByteArray, image.name);
    files.push(file);
  }

  return files;
};
