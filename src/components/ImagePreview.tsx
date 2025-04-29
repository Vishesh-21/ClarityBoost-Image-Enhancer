import userImage from "/userImage.avif";
import { TbLoader3 } from "react-icons/tb";

type previewImageProps = {
  loading: boolean;
  uploadImage: string | null;
  enhancedImage: string | null;
};

export const ImagePreview = ({
  uploadImage,
  enhancedImage,
  loading,
}: previewImageProps) => {
  return (
    <div className="mt-6 w-full md:h-[80vh] md:flex-row h-[120vh] flex-col flex gap-4">
      {/* preview the uploaded image */}
      <div className="md:w-1/2 w-full h-full overflow-hidden space-y-2">
        <div className="text-center font-medium bg-blue-500 text-white py-2 rounded-b-2xl">
          <h1>Original Image</h1>
        </div>
        <div className="w-full h-full rounded-md relative">
          <img
            src={uploadImage ?? userImage}
            alt="uploadImage"
            loading="lazy"
            className="w-full h-full object-cover"
          />
          {!uploadImage && (
            <h1 className="absolute z-10 text-black top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl font-bold opacity-50 whitespace-nowrap">
              Please Upload an Image
            </h1>
          )}
        </div>
      </div>

      {/* preview the enhanced image */}
      <div className="md:w-1/2 w-full h-full overflow-hidden space-y-2">
        <div className="text-center font-medium bg-blue-500 text-white py-2 rounded-b-2xl">
          <h1>Enhanced Image</h1>
        </div>
        <div className="w-full h-full rounded-md relative">
          <img
            src={enhancedImage ?? userImage}
            alt="enhanced_image"
            loading="lazy"
            className="w-full h-full object-cover"
          />
          {!loading && !enhancedImage && (
            <h1 className="absolute z-10 text-black top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl font-bold opacity-50 whitespace-nowrap">
              No image to preview.
            </h1>
          )}
          {loading && (
            <h1
              className="absolute z-10 text-blue-500 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold animate-spin"
              style={{ animationDuration: "1s" }}
            >
              <TbLoader3 className="h-14 w-14" />
            </h1>
          )}
        </div>
      </div>
    </div>
  );
};
