"use client";
import Image from "next/image";
import { ContainerScroll } from "../ui/container-scroll-animation";

export function HeroBanner() {
  return (
    <div className="flex flex-col">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="w-full text-[32px] sm:text-[42px] lg:text-[60px] md:text-[56px] font-bold mt-1 text-white dark:text-white leading-none uppercase">
              CUT your creditor repayments in half, whilst improving your credit
              worthiness
            </h1>
            <p className="mt-5">
              You don’t need to join an IVA or Debt Management plan, to deal
              with your problem debts
            </p>
            <button className="mt-5 relative inline-flex overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-medium text-white backdrop-blur-3xl">
                Take back control of your finances today!
              </span>
            </button>
          </>
        }
      >
        <Image
          src={`/img/Hero_Banner.webp`}
          alt="hero"
          height={720}
          width={1350}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
