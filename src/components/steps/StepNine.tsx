"use client";

import { setCustomerDetailStatus } from "@/redux/features/customer-detail/customerDetailSlice";
import { useAppDispatch } from "@/redux/hook";
import { useState } from "react";
import StepBody from "../shared/StepBody";
import StepBackButton from "./StepBackButton";

const StepNine = () => {
  const [currentItem, setCurrentItem] = useState<string>("");
  const dispatch = useAppDispatch();
  const status = [
    {
      value: "Home owner",
    },
    {
      value: "Private Renting",
    },
    {
      value: "Council Tenant",
    },
    {
      value: "Living with parents",
    },
    {
      value: "Other",
    },
  ];

  return (
    <StepBody title="what is your residential status">
      <div className="flex flex-col gap-6">
        {status.map((item, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentItem(item.value);
              dispatch(setCustomerDetailStatus({ status: item?.value }));
            }}
            className={`relative inline-flex overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 `}
          >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-medium text-white backdrop-blur-3xl">
              {item.value}
            </span>
          </button>
        ))}
      </div>
      <StepBackButton />
    </StepBody>
  );
};

export default StepNine;
