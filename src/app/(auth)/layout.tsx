import GradientContainer from "@/components/ui/gradient-container";
import Image from "next/image";
import Link from "next/link";
import React, { ReactNode } from "react";

const layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <GradientContainer>
      <Link href={"/"} className="w-full flex justify-center items-center">
        <Image src={"/img/logo.png"} alt="logo" width={296} height={96} />
      </Link>
      <div className="mt-[78px]">{children}</div>
    </GradientContainer>
  );
};

export default layout;
