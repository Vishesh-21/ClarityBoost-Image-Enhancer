import React, { useState } from "react";

type uploadHandlerProp = {
  uploadHandler: (file: File) => void;
};

export const ImageUpload: React.FC<uploadHandlerProp> = ({ uploadHandler }) => {
  const [isDragging, setIsDragging] = useState(false);

  // Handle file selection via input
  const uploadImageHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      uploadHandler(file);
    }
  };

  // Handle drag enter
  const handleDragEnter = (event: React.DragEvent<HTMLElement>) => {
    event.preventDefault();
    event.stopPropagation();
    setIsDragging(true);
  };

  // Handle drag leave
  const handleDragLeave = (event: React.DragEvent<HTMLElement>) => {
    event.preventDefault();
    event.stopPropagation();
    setIsDragging(false);
  };

  // Handle drag over
  const handleDragOver = (event: React.DragEvent<HTMLElement>) => {
    event.preventDefault();
    event.stopPropagation();
  };

  // Handle file drop
  const handleDrop = (event: React.DragEvent<HTMLElement>) => {
    event.preventDefault();
    event.stopPropagation();
    setIsDragging(false);

    const file = event.dataTransfer.files?.[0];
    if (file) {
      uploadHandler(file);
    }
  };

  return (
    <div className="bg-white p-3 rounded-md">
      <label
        htmlFor="ImageInput"
        className={`block p-6 rounded-md border-2 border-dashed ${
          isDragging ? "border-blue-500 bg-blue-50" : "border-gray-200"
        } cursor-pointer hover:border-blue-500 transition-border duration-200 text-center`}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        <input
          type="file"
          id="ImageInput"
          className="hidden"
          onChange={uploadImageHandler}
          accept="image/*"
        />
        <h1 className="text-gray-500 font-medium">
          {isDragging
            ? "Drop your image here"
            : "Click or drag to upload your image"}
        </h1>
      </label>
    </div>
  );
};
