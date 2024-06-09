import Image from "next/image";
import React, { ReactNode } from "react";

const layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="pt-[117px]">
      <Image src={"/img/logo.png"} alt="logo" width={296} height={96} />
      {children}
    </div>
  );
};

export default layout;
