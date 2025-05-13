import React from "react";

const Upload = () => {
  return (
    <div className="bg-lime-500 shadow-lg text-lg font-semibold rounded-2xl p-3 w-full max-w-2xl">
      <label
        htmlFor="fileInput"
        className="block w-full cursor-pointer border-2 border-dashed px-2 py-1 border-gray-300 rounded-lg text-center hover:border-blue-400 transition-all "
      >
        <input  type="file" className="hidden" id="fileInput"/>

      <span className="text-lg font-medium text-gray-600 ">Click and drag to upload your image</span>

      </label>
    </div>
  );
};

export default Upload;
