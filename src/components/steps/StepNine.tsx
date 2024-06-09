"use client";

import { useState } from "react";
import StepBody from "../shared/StepBody";
import { useAppDispatch } from "@/redux/hook";
import { setCustomerDetailStatus } from "@/redux/features/customer-detail/customerDetailSlice";

const StepNine = () => {
  const [currentItem, setCurrentItem] = useState<string>("");
  const dispatch = useAppDispatch();
  const status = [
    {
      value: "Home owner with mortgage",
    },
    {
      value: "Home owner with no mortgage",
    },
    {
      value: "Renting",
    },
    {
      value: "Living with parents",
    },
  ];

  return (
    <StepBody title="What is your status?">
      <div className="flex flex-col gap-6">
        {status.map((item, index) => (
          <button
            key={index}
            onClick={() => {setCurrentItem(item.value); dispatch(setCustomerDetailStatus({status: item?.value}))}}
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
  );
};

export default StepNine;
