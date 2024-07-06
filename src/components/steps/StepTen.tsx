"use client";

import { setCustomerDetailTotal } from "@/redux/features/customer-detail/customerDetailSlice";
import { useAppDispatch } from "@/redux/hook";
import { useState } from "react";
import StepBody from "../shared/StepBody";
import StepBackButton from "./StepBackButton";

const StepTen = () => {
  const [currentItem, setCurrentItem] = useState<string>("");
  const dispatch = useAppDispatch();
  const prices = [
    {
      value: "£0 - £2000",
    },
    {
      value: "£2000 - £5000",
    },
    {
      value: "£5000 - £10 000",
    },
    {
      value: "More than £10 000",
    },
  ];

  return (
    <StepBody title="How much do you owe in total?">
      <div className="flex flex-col gap-6">
        {prices.map((item, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentItem(item.value);
              dispatch(setCustomerDetailTotal({ total: item?.value }));
            }}
            className={`outline hover:outline-slate-800 border-2 hover:border-white w-full py-[12px] px-[24px] bg-slate-950 text-white rounded-[12px] ${
              item.value === currentItem
                ? "outline outline-slate-800 border-2 border-white"
                : ""
            }`}
          >
            {item.value}
          </button>
        ))}
      </div>
      <StepBackButton />

    </StepBody>
  );
};

export default StepTen;
