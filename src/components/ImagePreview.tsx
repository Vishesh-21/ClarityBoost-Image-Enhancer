import userImage from "../../public/userImage.avif";
export const ImagePreview = () => {
  return (
    <div className="mt-6 w-full md:h-[80vh] md:flex-row h-[120vh] flex-col flex gap-4">
      {/* preview the uploaded image */}
      <div className="md:w-1/2 w-full h-full overflow-hidden bg-gray-100">
        <div className="text-center font-medium bg-blue-500 text-white py-2 rounded-b-2xl">
          <h1>Original Image</h1>
        </div>
        <div className="w-full h-full rounded-md relative">
          <img
            src={userImage}
            alt="uploadImage"
            loading="lazy"
            className="w-full h-full object-cover"
          />
          <h1 className="absolute z-10 text-black top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl font-bold opacity-50">
            Please Upload an Image
          </h1>
        </div>
      </div>

      {/* preview the enhanced image */}
      <div className="md:w-1/2 w-full h-full overflow-hidden bg-gray-100">
        <div className="text-center font-medium bg-blue-500 text-white py-2 rounded-b-2xl">
          <h1>Enhanced Image</h1>
        </div>
        <div className="w-full h-full rounded-md relative">
          <img
            src={userImage}
            alt="enhanced_image"
            loading="lazy"
            className="w-full h-full object-cover"
          />
          <h1 className="absolute z-10 text-black top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl font-bold opacity-50 whitespace-nowrap">
            Upload an Image to Enhance.
          </h1>
        </div>
      </div>
    </div>
  );
};
