import React, { useState } from "react";
import Preview from "./Preview";
import Upload from "./Upload";

const Home = () => {
  const [uploadImage, setUploadImage] = useState(null);
  const [enhancedImage, setEnhancedImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const UploadImageHandler = (file) =>{
    setUploadImage(URL.createObjectURL(file))
    setLoading(true)    
  }

  return (
    <>
      <Upload  UploadImageHandler={UploadImageHandler}/>
      <Preview
        loading={loading}
        uploaded={uploadImage}
        enhanced={enhancedImage}
      />
    </>
  );
};

export default Home;
