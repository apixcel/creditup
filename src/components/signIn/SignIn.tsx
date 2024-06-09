"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/utils/cn";
import Link from "next/link";
import React from "react";

export default function SignIn() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg">
      <h2 className="font-bold text-xl text-white">Sign in to your account</h2>

      <form className="mt-8" onSubmit={handleSubmit}>
        <div className="flex items-center gap-4 mb-3">
          <LabelInputContainer className="mb-5 flex flex-row items-center gap-2">
            <Input type="checkbox" className="w-[20px] h-[20px] mt-[8px]" />
            <p className="text-sm ">As a customer</p>
          </LabelInputContainer>
          <LabelInputContainer className="mb-5 flex flex-row items-center gap-2">
            <Input type="checkbox" className="w-[20px] h-[20px] mt-[8px]" />
            <p className="text-sm ">As a agent</p>
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email" className="text-white">
            Email Address
          </Label>
          <Input id="email" placeholder="projectmayhem@fc.com" type="email" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="password" className="text-white">
            Password
          </Label>
          <Input id="password" placeholder="••••••••" type="password" />
        </LabelInputContainer>

        <Link href="/logIn">
          <button className="w-full relative inline-flex overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-medium text-white backdrop-blur-3xl">
              Sign In
            </span>
          </button>
        </Link>
      </form>
    </div>
  );
}

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
