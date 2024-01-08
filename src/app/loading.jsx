import Image from "next/image";
import React from "react";

const Loading = () => {
  return (
    
      <div className="min-h-screen w-full flex flex-col gap-2 items-center justify-center text-white">
        <Image src="/logo_merah.png" alt="logo" width={100} height={100} />
        <div className="flex gap-2 items-center justify-center">
          <span>Loading...</span>
          <span className="loading loading-spinner loading-sm"></span>
        </div>
      </div>
    
  );
};

export default Loading;