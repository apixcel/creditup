"use client";

import { useState } from "react";
import StepBody from "../shared/StepBody";

const StepTwo = () => {
  const [currentItem, setCurrentItem] = useState<string>("");
  const titles = [
    {
      value: "Mr",
    },
    {
      value: "Ms",
    },
    {
      value: "Mrs",
    },
    {
      value: "Dr",
    },
    {
      value: "Miss",
    },
    {
      value: "Other",
    },
  ];

  return (
    <>
      <StepBody title="What describes you best?">
        <div className="flex flex-col gap-6">
          {titles.map((item, index) => (
            <button
              key={index}
              onClick={() => setCurrentItem(item.value)}
              className={`w-full py-[12px] px-[24px] bg-[#0A5047] text-white rounded-[12px] ${
                item.value === currentItem
                  ? "outline outline-slate-800 border-2 border-whtie"
                  : ""
              }`}
            >
              {item.value}
            </button>
          ))}
        </div>
      </StepBody>
    </>
  );
};

export default StepTwo;
