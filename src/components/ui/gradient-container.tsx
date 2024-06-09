import Image from "next/image";
import React, { ReactNode } from "react";

const GradientContainer: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="w-full min-h-[100vh] relative overflow-hidden">
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
      <div className="mt-[117px] relative z-50">{children}</div>
    </div>
  );
};

export default GradientContainer;
