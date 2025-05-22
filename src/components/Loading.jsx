import React from "react";

const Loading = () => {
  return <div className="flex justify-center items-center h-full">
    <div className=" animate-spin border-l-4 border-r-4  w-10 h-10 rounded-full border-zinc-500"></div>
  </div>;
};

export default Loading;
