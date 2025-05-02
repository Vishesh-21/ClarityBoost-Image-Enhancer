import { BiDownload } from "react-icons/bi";
import userImage from "/userImage.avif";
import { TbLoader3 } from "react-icons/tb";

type previewImageProps = {
  loading: boolean;
  uploadImage: string | null;
  enhancedImage: string | null;
  downloadImage: () => void;
};

export const ImagePreview = ({
  uploadImage,
  enhancedImage,
  loading,
  downloadImage,
}: previewImageProps) => {
  return (
    <div className="mt-6 w-full md:h-[80vh] md:flex-row h-[120vh] flex-col flex gap-4">
      {/* preview the uploaded image */}
      <div className="md:w-1/2 w-full h-full overflow-hidden space-y-2">
        <div className="text-center w-2/3  mx-auto font-medium bg-blue-500 text-white py-2 rounded-b-2xl">
          <h1>Original Image</h1>
        </div>
        <div className="w-full h-full rounded-md relative mt-4">
          <img
            src={uploadImage ?? userImage}
            alt="uploadImage"
            loading="lazy"
            className="w-full h-full object-contain"
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
        <div className="text-center w-2/3 mx-auto font-medium bg-blue-500 text-white py-2 rounded-b-2xl">
          <h1>Enhanced Image</h1>
        </div>
        <div className="w-full h-full rounded-md relative mt-4">
          <img
            src={enhancedImage ?? userImage}
            alt="enhanced_image"
            loading="lazy"
            className="w-full h-full object-contain"
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

          {enhancedImage && !loading && (
            <button
              className="bg-red-500 text-white rounded-md px-3 py-3 cursor-pointer hover:bg-red-600 absolute top-2 right-2 flex items-center gap-2"
              onClick={downloadImage}
            >
              <BiDownload className="inline w-6 h-6" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
