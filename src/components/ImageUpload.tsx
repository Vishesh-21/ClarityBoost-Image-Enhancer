//this component consist the functionality uploading image

export const ImageUpload: React.FC = () => {
  return (
    <div className="bg-white p-3 rounded-md">
      <label htmlFor="ImageInput" className="block p-6 rounded-md border-2 border-dashed border-gray-200 cursor-pointer hover:border-blue-500 transition-border duration-200 text-center">
        <input type="file" id="ImageInput" className="hidden"/>
        <h1 className="text-gray-500 font-medium">Click and drag to upload your image</h1>
      </label>
    </div>
  );
};
