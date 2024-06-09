"use client";
import { cn } from "@/utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    id: string;
    title: string;
    description: string;
    icon: string;
  }[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          key={item.id} // Use a unique identifier as key
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {hoveredIndex === idx && (
            <AnimatePresence>
              <motion.span
                className="absolute inset-0 h-full w-full bg-gradient-to-r from-[#C8B3F1] to-[#534BB9] block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            </AnimatePresence>
          )}
          <Card>
            <CardIcon src={item.icon} alt={item.title} />
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
          </Card>
        </div>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-black dark:border-white/[0.2] group-hover:border-slate-700 relative z-20 border border-slate-600",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4 flex flex-col items-center text-center h-[100%]">
          {children}
        </div>
      </div>
    </div>
  );
};

export const CardIcon = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <div className="w-[100px] h-[100px] border border-slate-600 rounded-full flex items-center justify-center">
      <Image src={src} width={50} height={50} alt={alt} />
    </div>
  );
};

export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4
      className={cn(
        "text-white text-[22px] font-bold tracking-wide mt-4",
        className
      )}
    >
      {children}
    </h4>
  );
};

export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-8 text-zinc-400 tracking-wide leading-relaxed text-[16px]",
        className
      )}
    >
      {children}
    </p>
  );
};
