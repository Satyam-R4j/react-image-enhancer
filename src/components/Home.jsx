import React, { useState } from "react";
import Preview from "./Preview";
import Upload from "./Upload";

const Home = () => {
  const [uploadImage, setUploadImage] = useState(null);
  const [enhancedImage, setEnhancedImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const UploadImageHandler = (file) =>{
    console.log(file);
    
  }

  return (
    <>
      <Upload  UploadImageHandler={UploadImageHandler}/>
      <Preview
        loaded={loading}
        uploaded={uploadImage}
        enhanced={enhancedImage}
      />
    </>
  );
};

export default Home;
