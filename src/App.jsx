import { useState } from "react";
import Home from "./components/Home";

import "./App.css";

function App() {
  return (
    <>

      <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-900">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-purple-800 mb-2">Ai image Enhancer</h1>
          <p className="text-lg text-gray-500">Upload your Image and let AI enhance to in second! </p>
          
        </div>
        <Home />
        <div className="text-lg text-gray-500 mt-5">Powered by @Satyam-R4j</div>
      </div>
    </>
  );
}

export default App;
