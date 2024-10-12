import React from "react";
import { useEffect } from "react";

const MyProfile = () => {
  return (
    <div className="w-full h-full bg-cyan-600 flex justify-center items-center p-10">
      {/* Profile Picture */}
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-row justify-start ml-4 mt-8">
          {/* Name */}
          <h2 className="font-bold text-2xl">Henry kkharris</h2>
          <p className="font-semibold overflow-auto whitespace-nowrap w-44 mt-2">
            FullStack Application Developer
          </p>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
