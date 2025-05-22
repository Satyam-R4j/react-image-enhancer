import React, { useState } from "react";
import Preview from "./Preview";
import Upload from "./Upload";
import {enhancedImageAPI} from "../utils/enhanceImageApi";



const Home = () => {
  const [uploadImage, setUploadImage] = useState(null);
  const [enhancedImage, setEnhancedImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const UploadImageHandler = async (file) =>{
    setUploadImage(URL.createObjectURL(file))
    setLoading(true)    
    try {
      const enhancedURL = await enhancedImageAPI(file)

      setEnhancedImage(enhancedURL)
      setLoading(false)
    } catch (error) {
      console.log(error);
      alert("Error while enhancing the image. Please try again later.")
      
    }
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
