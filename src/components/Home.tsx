import React from "react";
import { ImageUpload } from "./ImageUpload";
import { ImagePreview } from "./ImagePreview";

export const Home = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center">
      {/* component to upload image  */}
      <ImageUpload />

      {/* component to preview the loaded image and the enhanced image */}
      <ImagePreview />
    </div>
  );
};
