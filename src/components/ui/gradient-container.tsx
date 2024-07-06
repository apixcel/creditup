import Image from "next/image";
import Link from "next/link";
import React, { ReactNode } from "react";

const GradientContainer: React.FC<{ children: ReactNode }> = ({ children }) => {
  const footer = [
    {
      href: "#",
      text: "Privacy Policy",
    },

    {
      href: "#",
      text: "License",
    },
  ];

  return (
    <div className="w-full min-h-[100vh] relative overflow-hidden flex  items-center justify-around flex-col">
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
      <div className="flex justify-center md:justify-between flex-wrap gap-[15px] items-center w-[90%] lg:w-[900px]">
        <h6 className="text-[#718096]">@ 2024, Made with ❤️ by Creditup</h6>
        <div className="center gap-[10px] text-[#718096]">
          {footer.map(({ href, text }, i) => (
            <Link href={href} key={i + "footer link"}>
              {text}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GradientContainer;
