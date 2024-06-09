import Image from "next/image";
import React, { ReactNode } from "react";

const GradientContainer: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="w-full min-h-[100vh] relative overflow-hidden flex  items-center justify-center">
      <Image
        src={"/img/auraFrameL.png"}
        width={958}
        height={500}
        alt="aura  gradient"
        className="absolute top-[-70px] left-[-311px] z-10"
      />
      <Image
        src={"/img/auraFrameR.png"}
        width={958}
        height={500}
        alt="aura  gradient"
        className="absolute bottom-[-70px] right-[-139px] z-10"
      />
      <div className=" py-[20px] lg:py-0 relative z-50 w-full px-[15px] lg:px-0">
        {children}
      </div>
    </div>
  );
};

export default GradientContainer;
