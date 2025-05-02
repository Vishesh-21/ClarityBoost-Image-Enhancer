import { ImageUpload } from "./ImageUpload";
import { ImagePreview } from "./ImagePreview";
import { useState } from "react";
import { enhanceImageFunction } from "../utils/enhanceImageFunction";

export const Home = () => {
  const [uploadImage, setUploadImage] = useState<string | null>(null);
  const [enhancedImage, setEnhancedImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  //  handler to upload an image
  const uploadHandler = async (file: File | null): Promise<void> => {
    if (file) {
      setUploadImage(URL.createObjectURL(file));
      // setLoading(true);
      // try {
      //   const enhanceImageUrl = await enhanceImageFunction(file);
      //   setEnhancedImage(enhanceImageUrl);
      // } catch (error) {
      //   if (error instanceof Error) {
      //     console.log("Error : ", error.message);
      //   } else {
      //     console.log("An unknown error occurred");
      //   }
      // } finally {
      //   setLoading(false);
      // }
    } else {
      alert("Please Upload an image to enhance...");
    }
  };

  return (
    <div className="w-full min-h-screen gap-4 flex flex-col items-center justify-start py-10">
      {/* component to upload image  */}
      <ImageUpload uploadHandler={uploadHandler} />

      {/* component to preview the loaded image and the enhanced image */}
      <ImagePreview
        loading={loading}
        uploadImage={uploadImage}
        enhancedImage={enhancedImage}
      />
    </div>
  );
};
