import React, { ReactNode } from "react";

const Card: React.FC<{ children: ReactNode; heading: string }> = ({
  children,
  heading,
}) => {
  return (
    <div
      style={{ boxShadow: "0px 7px 23px 0px rgba(0, 0, 0, 0.05)" }}
      className="px-[20px] py-[50px] bg-white max-w-[816px] md:px-[50px] rounded-[24px] mx-auto"
    >
      <h2 className="text-[#071133] text-center  text-2xl font-semibold leading-[30px]">
        {heading}
      </h2>
      {children}
    </div>
  );
};

export default Card;
