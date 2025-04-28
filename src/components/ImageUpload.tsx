//this component consist the functionality uploading image

import React from "react";

type uploadHandlerProp = {
  uploadHandler: (file: File) => void;
};

export const ImageUpload: React.FC<uploadHandlerProp> = ({ uploadHandler }) => {
  // function to upload image
  const uploadImageHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      uploadHandler(file); // we send file to over parent component
    }
  };

  return (
    <div className="bg-white p-3 rounded-md">
      <label
        htmlFor="ImageInput"
        className="block p-6 rounded-md border-2 border-dashed border-gray-200 cursor-pointer hover:border-blue-500 transition-border duration-200 text-center"
      >
        <input
          type="file"
          id="ImageInput"
          className="hidden"
          onChange={uploadImageHandler}
        />
        <h1 className="text-gray-500 font-medium">
          Click and drag to upload your image
        </h1>
      </label>
    </div>
  );
};
