"use client";

import { useState } from "react";
import StepBody from "../shared/StepBody";
import { useAppDispatch } from "@/redux/hook";
import { setCustomerDetailDescribe } from "@/redux/features/customer-detail/customerDetailSlice";

const StepOne = () => {
  const [currentItem, setCurrentItem] = useState<string>("");
  const dispatch = useAppDispatch();

  const describeItems = [
    {
      value: "I plan on buying a house",
    },
    {
      value: "I plan on buying a house 2",
    },
    {
      value: "I plan on buying a house 3",
    },
    {
      value: "I plan on buying a house 4",
    },
    {
      value: "I plan on buying a house 5",
    },
  ];

  return (
    <div className="py-[100px]">
      <StepBody title="What describes you best?">
        <div className="flex flex-col gap-6">
          {describeItems.map((item, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentItem(item.value);
                dispatch(setCustomerDetailDescribe({ describe: item?.value }));
              }}
              className={`outline hover:outline-slate-800 border-2 hover:border-white w-full py-[12px] px-[24px] bg-[#0A5047] text-white rounded-[12px] ${
                item.value === currentItem
                  ? "outline outline-slate-800 border-2 border-white"
                  : ""
              }`}
            >
              {item.value}
            </button>
          ))}
        </div>
      </StepBody>
    </div>
  );
};

export default StepOne;
