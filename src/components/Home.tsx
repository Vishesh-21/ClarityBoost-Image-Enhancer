import { ImageUpload } from "./ImageUpload";
import { ImagePreview } from "./ImagePreview";

export const Home = () => {
  return (
    <div className="w-full min-h-screen gap-4 flex flex-col items-center justify-start py-10">
      {/* component to upload image  */}
      <ImageUpload />

      {/* component to preview the loaded image and the enhanced image */}
      <ImagePreview />
    </div>
  );
};
